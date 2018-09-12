
function Link(link){
    var href = '';

    if(link !== 'home'){
        href = link;
    }

    return `
        <li>
            <a href="/${href}" data-navigo>${link}</a>
        </li>
    `;
}


export default function Navigation(state){
    var links = '';

    console.log(state.links);

    for(let i = 0; i < state.links.length; i++){
        links += Link(state.links[i]);
    }

    return `
        <div id="navigation">
            <ul>
                ${links}
            </ul>
        </div>
    `;
}
