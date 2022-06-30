
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

  const CmenuBox = document.querySelector("#c-menu-box");
  const locationBtn = CmenuBox.children[0];
  const MsearchingBtn = CmenuBox.children[1];
  const releasedBtn = CmenuBox.children[2];

  const locationP = document.querySelector("#location"); 
  const MsearchingP = document.querySelector("#movie-searching"); 
  const releasedP = document.querySelector("#released"); 
  displayChange(locationBtn,cinemaP,locationP);
  displayChange(MsearchingBtn,cinemaP,MsearchingP);
  displayChange(releasedBtn,cinemaP,releasedP);

  const seoulBtn = document.querySelector("#location-box > li:nth-child(2)");
  const locationSeoulP = document.querySelector("#location-seoul");
  displayChange(seoulBtn,locationP,locationSeoulP);

  const gangnamBtn = document.querySelector("#seoul-box > li:nth-child(2)");
  const gangnamP = document.querySelector("#location-seoul-gangnam");
  displayChange(gangnamBtn,locationSeoulP,gangnamP);



  // 영화 정보 클릭
  const infoBtn1 = document.querySelector(".movie-name > .info-button");
  const mouseInfo1 = document.querySelector(".movie-img > .mouse-info");
  const infoBtn2 = document.querySelector(".movie-name-2 > section:nth-child(1) > .info-button");
  const mouseInfo2 = document.querySelector(".movie-img-2 > section:nth-child(1) > .mouse-info");
  const infoBtn3 = document.querySelector(".movie-name-2 > section:nth-child(2) > .info-button");
  const mouseInfo3 = document.querySelector(".movie-img-2 > section:nth-child(2) > .mouse-info");

  // let tof = true;
  // if(tof === true) {
  //   infoBtn.addEventListener("click", function() {
  //     mouseInfo.style.display = "flex";
  //     tof = false;
  //     console.log(tof);
  //   });
  // };
  
  // if(tof === false) {
  //   infoBtn.addEventListener("click", function() {
  //     mouseInfo.style.display = "none";
  //     tof = true;
  //     console.log(tof);
  //   });
  // };

  function movieInfo(infoBtn, mouseInfo) {
    infoBtn.addEventListener("mouseover", function() {
      mouseInfo.style.display = "flex";
    });
    infoBtn.addEventListener("mouseleave", function() {
      mouseInfo.style.display = "none";
    });
  };

  movieInfo(infoBtn1,mouseInfo1);
  movieInfo(infoBtn2,mouseInfo2);
  movieInfo(infoBtn3,mouseInfo3);



const searchP = document.getElementById("search-page");
//fixed-menu
const fixedMenu = document.querySelector(".fixed-menu");
const homeIcon = fixedMenu.children[0];
const searchIcon = fixedMenu.children[1];
const starIcon = fixedMenu.children[2];
const userIcon = fixedMenu.children[3];

displayChange(searchIcon,homeP,searchP);

