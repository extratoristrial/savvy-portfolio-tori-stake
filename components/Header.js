export default function Header(state){
    var title = state[state.active].title;
    
    return `
        <div id="header">
            <h1>${title}</h1>
            <h3>Welcome, ${state.greeting}!</h3>
        </div>
        <div id="greeting"></div>
            `;
}