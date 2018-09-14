import * as Pages from './pages';


export default function Content(state){
    const page = state[state.active];
    
    return `
    <div id="content">
        <div>
            ${Pages[page.body](state.posts)}
        </div>
    </div>`;
}

    