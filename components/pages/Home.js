import {
    capitalize,
    kebabCase
} from 'lodash';


function Repo(repo){
    var name = kebabCase(repo.name)
        .split('-')
        .map(capitalize)
        .join('');

    return `
    <li>
        <a href="${repo.url}">${name}</a>
    </li>
    `;
}

export default function Home(state){
    var repos = state
        .repos
        .map(Repo)
        .join('');

    return `
<div id="content">
    <img src="https://i.imgur.com/VsNNvTm.jpg" alt="A close-up of a grey striped cat's face with galaxy patterned bow-tie " style="border-style: dotted; border-width: 1.5px; border-color:mediumaquamarine;" >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi ipsum blanditiis cumque rerum, quo ipsam illum similique provident est minus doloremque maxime enim quia exercitationem iste? Maxime, quaerat fuga?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi ipsum blanditiis cumque rerum, quo ipsam illum similique provident est minus doloremque maxime enim quia exercitationem iste? Maxime, quaerat fuga?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto incidunt doloremque dignissimos. Fugiat accusamus exercitationem tenetur quia repudiandae vitae suscipit placeat id perspiciatis repellendus, quae quam accusantium numquam reiciendis. Ea?
        </p>
    <div id="animation">
    </div>
    <div id="repos">
        <ol>
            ${repos}
        </ol>
    </div>
</div>`;
}