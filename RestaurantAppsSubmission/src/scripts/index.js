import 'regenerator-runtime';
import App from './views/app';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/nav-bar';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#content'),
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  main: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
