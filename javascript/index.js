import Axios from 'axios';
import Navigo from 'navigo';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Greeter from '../components/Greeter';
import Content from '../components/Content';
import Footer from '../components/Footer';
import store from '../store/store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var greeter = new Greeter(store.dispatch);

function render(){
    var state = store.getState();

    console.log(state);

    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state)}
        ${Content(state)}
        ${Footer()}
        `;

    greeter.render(root);

    router.updatePageLinks();
}

function handleNavigation(activePage){
    store.dispatch((state) => Object.assign(state, { 'active': activePage }));
}


router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();

Axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        store.dispatch((state) => Object.assign(state, { 'posts': response.data }));
    });

store.addListeners(render);