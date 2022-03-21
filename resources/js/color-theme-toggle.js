function initTheme() {
  let lightMode = localStorage.getItem("lightMode");

  const lightModeToggle = document.getElementsByName("color-theme");
  //если первый раз и в хранилище пусто, то дефолтную тему
  if(!lightMode) {
      lightMode = 'dark'; // или может auto
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
  //console.log(lightMode);
  if (lightMode == 'auto') {
      lightMode = getDetectTheme(); //раз уж один раз вызываем, то можно и без функции, тут код писать, но лучше так )
  }
  //надо засинхронить название input → class
  if (lightMode === 'light'){
    document.documentElement.classList.add("lightmode");
  } else {
    document.documentElement.classList.remove("lightmode");
  }
  
  //или можно так составить имя
  //document.documentElement.classList.add('class_' + lightMode);
}

// ну тут я условно, ф-ия детектед и возвращает текущую тему
function getDetectTheme() {
  //let colorScheme = 'light';
 

  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    colorScheme = 'light';
  } else {
    colorScheme = 'dark';
  } 
  console.log(colorScheme);
  return colorScheme;
}

initTheme();
