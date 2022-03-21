function initTheme() {
  let lightMode = localStorage.getItem("lightMode");

  const lightModeToggle = document.getElementsByName("color-theme");
  //если первый раз и в хранилище пусто, то дефолтную тему
  if(!lightMode) {
      lightMode = 'dark';
  }
for(const radioButton of lightModeToggle) {
    radioButton.addEventListener('change', showSelected);
      //Это можно было б еще оптимизировать, но раз уж  унас все равно есть цикл по input то установим то, что считали из хранилища
      if (radioButton.value == lightMode) {
          radioButton.checked = true;
      }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  showSelected();
});
  //собственно добавим сам класс, типа кликнули на выбор темы
  showSelected();
}

function showSelected() {
  let lightMode = document.querySelector('input[name="color-theme"]:checked').value;
  localStorage.setItem("lightMode", lightMode);
  // browser theme
  let browserThemeColor = document.querySelector('meta[name="theme-color"]')
  if (lightMode == 'auto') {
      lightMode = getDetectTheme();
  }
  //надо засинхронить название input → class
  if (lightMode === 'light'){
    document.documentElement.classList.add("lightmode");
    browserThemeColor.setAttribute('content', '#FFFFFF');
  } else {
    document.documentElement.classList.remove("lightmode");
    browserThemeColor.setAttribute('content', '#000');
  }
}

// ну тут я условно, ф-ия детектед и возвращает текущую тему
function getDetectTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    colorScheme = 'light';
  } else {
    colorScheme = 'dark';
  } 
  console.log(colorScheme);
  return colorScheme;
}

initTheme();
