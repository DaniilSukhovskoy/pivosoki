let lightMode = localStorage.getItem("lightMode");
console.log(lightMode);

const lightModeToggle = document.getElementsByName("color-theme");

// theme color
// const metaThemeColor = document.querySelector("meta[name=theme-color]");

// get radio
let lightRadio = document.querySelector('input[value="light"]');
let darkRadio = document.querySelector('input[value="dark"]');
let autoRadio = document.querySelector('input[value="auto"]');


// modes functions
const enableLightMode = () => {
  document.documentElement.classList.add("lightmode");
  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  document.documentElement.classList.remove("lightmode");
  localStorage.setItem("lightMode", "disabled");
};

const enableAutoMode = () => {
  localStorage.setItem("lightMode", "auto");
}

const autoMode = () => {
  enableAutoMode();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      const colorScheme = e.matches ? "dark" : "light";
      console.log(colorScheme);

      if (colorScheme === "light") {
        document.documentElement.classList.add("lightmode");
      }
      else {
        document.documentElement.classList.remove("lightmode");
      }
    });

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.add("lightmode");
  }
  else {
    document.documentElement.classList.remove("lightmode");
  }
}

// check local storage and update
if (lightMode === "enabled") {
  enableLightMode();
  lightRadio.checked = true;
}
else if (lightMode === "disabled") {
  disableLightMode();
  darkRadio.checked = true;
}
else if (lightMode === "auto") {
  autoMode();
  autoRadio.checked = true;
}


// radio buttons events
for(const radioButton of lightModeToggle){
  radioButton.addEventListener('change', showSelected);
}

function showSelected(e) {
  lightMode = localStorage.getItem("lightMode");

  if (this.checked && this.value === "light") {
      console.log(`You selected ${this.value}`);
      enableLightMode();
  }
  
  else if (this.checked && this.value === "dark") {
    console.log(`You selected ${this.value}`);
    disableLightMode();
  }
  
  else if (this.checked && this.value === "auto") {
    console.log(`You selected ${this.value}`);
    autoMode();
  }
}

