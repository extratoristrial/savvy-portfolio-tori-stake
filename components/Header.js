export default function Header(state){
    var page = state[state.active];
        
    return `
        <div id="header">
            <h1>${page && page.title}</h1>

        </div>
        <div id="greeting"></div>
            `;
}

