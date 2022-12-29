const container = document.querySelector('.container');
const compactContainer = document.querySelector('compact-container');
const header = document.querySelector('header');
const main = document.querySelector('main');
const orcaGrid = document.querySelector('.orca-grid');
const compactBtn = document.querySelector('#compact');
const darkTheme = document.querySelector('#dark-theme');
const orangeBtn = document.querySelector('#orange');
const amberWhiteStreakyBtn = document.querySelector('#amber-white-streaky');
const redOpalBtn = document.querySelector('#red-opal');
const sunflowerYellowBtn = document.querySelector('#sunflower-yellow');
const blueStreakyBtn = document.querySelector('#blue-streaky');
const frenchVanillaBtn = document.querySelector('#french-vanilla');
const violetBtn = document.querySelector('#violet');
const blackClearStreakyBtn = document.querySelector('#black-clear-streaky');
const turquoiseWhiteStreakyBtn = document.querySelector(
  '#turquoise-white-streaky'
);
const egyptianBlueBtn = document.querySelector('#egyptian-blue');
const yellowRedStreakyBtn = document.querySelector('#yellow-red-streaky');
const lightGreenBtn = document.querySelector('#light-green');
const circles = document.querySelectorAll('.circle');

const buttons = [
  orangeBtn,
  amberWhiteStreakyBtn,
  redOpalBtn,
  sunflowerYellowBtn,
  blueStreakyBtn,
  frenchVanillaBtn,
  violetBtn,
  blackClearStreakyBtn,
  turquoiseWhiteStreakyBtn,
  egyptianBlueBtn,
  yellowRedStreakyBtn,
  lightGreenBtn,
];

compactBtn.addEventListener('click', () => {
  container.classList.toggle('compact-container');
  main.classList.toggle('compact-main');
  header.classList.toggle('compact-header');
  orcaGrid.classList.toggle('compact-orca-grid');
});

darkTheme.addEventListener('click', () => {
  container.classList.toggle('dark-container');
});

orangeBtn.addEventListener('click', () => {
  allOrange();
});

amberWhiteStreakyBtn.addEventListener('click', () => {
  allAmberWhiteStreaky();
});

redOpalBtn.addEventListener('click', () => {
  allRedOpal();
});

sunflowerYellowBtn.addEventListener('click', () => {
  allSunflowerYellow();
});

blueStreakyBtn.addEventListener('click', () => {
  allBlueStreaky();
});

frenchVanillaBtn.addEventListener('click', () => {
  allFrenchVanilla();
});

violetBtn.addEventListener('click', () => {
  allViolet();
});

blackClearStreakyBtn.addEventListener('click', () => {
  allBlackClearStreaky();
});

turquoiseWhiteStreakyBtn.addEventListener('click', () => {
  allTurquoiseWhiteStreaky();
});

egyptianBlueBtn.addEventListener('click', () => {
  allEgyptianBlue();
});

yellowRedStreakyBtn.addEventListener('click', () => {
  allYellowRedStreaky();
});

lightGreenBtn.addEventListener('click', () => {
  allLightGreen();
});

const allOrange = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/orange.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
  container.style.backgroundColor = "#ffffff"
};

const allAmberWhiteStreaky = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/amber-white-streaky.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allRedOpal = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/red-opal.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allSunflowerYellow = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/sunflower-yellow.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allBlueStreaky = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/blue-streaky.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allFrenchVanilla = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/french-vanilla.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allViolet = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/violet.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allBlackClearStreaky = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/black-clear-streaky.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allTurquoiseWhiteStreaky = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/turquoise-white-streaky.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allEgyptianBlue = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/egyptian-blue.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allYellowRedStreaky = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/yellow-red-streaky.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const allLightGreen = () => {
  circles.forEach((circle) => {
    circle.src = './assets/img/light-green.jpg';
  });
  orcaGrid.classList.toggle('solid-grid');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};
