import Axios from 'axios';
import Navigo from 'navigo';
import { tween, timeline, styler } from 'popmotion';
import Content from '../components/Content';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import store from '../store/store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);

function render(){
    var state = store.getState();

    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
        `;

    document
        .querySelector('h1')
        .addEventListener('click', (event) => {
            var animation = timeline([
                {
                    'track': 'size',
                    'from': {
                        'fontSize': '200%'
                    },
                    'to': {
                        'fontSize': '300%',
                    },
                    'duration': 2000
                },
                {
                    'track': 'location',
                    'from': {
                        'x': 0
                    },
                    'to': {
                        'x': 100
                    }
                }
            ]);
                
            var title = styler(event.target);

            animation.start((value) => {
                title.set(value.size);
                title.set(value.location);
            });
        });

    router.updatePageLinks();
}

function handleNavigation(activePage){
    store.dispatch((state) => {
        state.active = activePage;

        return state;
    });
}


router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();

Axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        store.dispatch((state) => {
            state.posts = response.data;

            return state;
        });
    });

Axios
    .get('https://api.openweathermap.org/data/2.5/weather?zip=63108&appid=1e7c603f536ba94b36847d01c8d473ff')
    .then((response) => {
        store.dispatch((state) => {
            state.weather = response.data;

            return state;
        });
    });

Axios
    .get('https://api.github.com/users/extratoristrial/repos', {
        'headers': {
              'Authorization': `token ${process.env.GITHUB_API_KEY}` //eslint-disable-line
        }
    })
    .then((response) => {
        store.dispatch((state) => {
            state.repos = response.data;
    
            return state;
        });
    });
    

store.addStateListener(render);