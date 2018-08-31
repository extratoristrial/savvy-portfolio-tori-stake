
import Navigation from '../components/Navigation.js';
import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';

var state = {
    'title': 'h e l l o , w o r l d'
};

document
    .querySelector('#root')
    .innerHTML = `
        ${Navigation()}
        ${Header(state)}
        ${Content()}
        ${Footer()}`;

document
    .querySelector('h1')
    .addEventListener(
        'click',
        function changeTheTitle(event){
            var title = 'h e l l o , w o r l d';

            if(event.target.textContent === title){
                event.target.textContent = 'Oh shit, look what you did! Quick, fix it!';
            }
            else{
                event.target.textContent = title
                ;
            }
        }
    );
