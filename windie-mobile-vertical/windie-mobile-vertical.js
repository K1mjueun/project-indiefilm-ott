
//화면 전환 함수
let displayAppear = [
  {opacity: 0.7},
  {opacity: 0.8},
  {opacity: 0.9},
  {opacity: 1},
];

  let displayChangeTime = {
    duration: 500,
    iterations: 1
  };

  function displayChange(element, disappearTarget, appearTarget) {
    element.addEventListener('click', function() {
      disappearTarget.style.display = "none";
      appearTarget.style.display = "flex";
      appearTarget.animate(displayAppear,displayChangeTime);
      appearTarget.style.opacity = 1;
    });
  };
  //

  const startP = document.querySelector("#start-page");
  const startPlogo = startP.children;
  const loginP = document.querySelector("#login-page");
  displayChange(startPlogo[0],startP,loginP);

  const signinBtn = document.querySelector(".sign-in");
  const firstP = document.querySelector("#first-page");
  displayChange(signinBtn,loginP,firstP);

  const menuBox = document.querySelector("#menu-box");
  const menuHome = menuBox.children[0];
  const menuCinema = menuBox.children[1];
  const menuMagazine = menuBox.children[2];

  const homeP = document.querySelector("#home");
  const cinemaP = document.querySelector("#cinema");
  const magazineP = document.querySelector("#magazine");
  displayChange(menuHome,firstP,homeP);
  displayChange(menuCinema,firstP,cinemaP);
  displayChange(menuMagazine,firstP,magazineP);