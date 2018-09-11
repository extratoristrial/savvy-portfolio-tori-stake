
import Navigation from '../components/Navigation.js';
import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';

var State = {
    'active': 'home',
    'home': {
        'links': [ 'blog', 'projects', 'contact' ],
        'title': 'h e l l o , w o r l d'
    },
    'blog': {
        'links': [ 'home', 'projects', 'contact' ],
        'title': 'h e l l o , b l o g'
    },
    'projects': {
        'links': [ 'home', 'blog', 'contact' ],
        'title': 'h e l l o , p r o j e c t s'
    },
    'contact': {
        'links': [ 'home', 'blog', 'projects' ],
        'title': 'h e l l o , c o n t a c t'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var newState = State;

    newState.active = event.target.textContent;

    event.preventDefault();

    render(newState);
}

function render(state){
    var links;

    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state[state.active])}
        ${Content()}
        ${Footer()}`;

    links = document.querySelectorAll('#navigation a');

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener(
            'click',
            handleNavigation
        );
    }
}

render(State);

