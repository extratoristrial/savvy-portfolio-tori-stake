import Weather from './Weather';

export default function Footer(state){
    return `
  <div id="footer">
          <p>
              <a href="https://github.com/extratoristrial">
                <i class="fab fa-github fa-1x"></i>
              </a>|
              <a href="https://twitter.com/@extratoristrial">
                <i class="fab fa-twitter fa-1x"></i>
              </a>|
              <a href="https://www.linkedin.com/in/victoria-stake-a6680b80/">
                <i class="fab fa-linkedin"></i>
              </a>
          </p>
          <h6>&#169; Victoria Stake 2018 </h6>
          <p>${Weather(state.weather)}</p>
      </div>`;
}