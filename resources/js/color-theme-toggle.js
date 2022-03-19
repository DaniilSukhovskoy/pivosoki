const html = document.querySelector('html');
html.dataset.theme = `theme-dark`;

function switchTheme(theme) {
  html.dataset.theme = `theme-${theme}`;
}