import Axios from 'axios';
import Navigo from 'navigo';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import * as State from '../store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var newState = Object.assign({}, State);

function render(state){
    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state[state.active])}
        ${Content(state)}
        ${Footer()}
        `;

    router.updatePageLinks();
}

function handleNavigation(activePage){
    newState.active = activePage;

    render(newState);
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();

Axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        newState.posts = response.data;

        render(newState);
    });