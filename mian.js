// font
document.head.insertAdjacentHTML(
  "beforeend",
  `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet">
`
);

// body
let body = document.body;
body.style.margin = "0";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundColor = "#202c36";
body.style.fontFamily = '"Nunito Sans", sans-serif';

// body>      block
document.body.insertAdjacentHTML("afterbegin", `<div class = "block"></div>`);
let block = document.querySelector(".block");
block.style.width = "264px";
block.style.height = "336px";
block.style.borderRadius = "5px";
block.style.overflow = "hidden";
block.style.backgroundColor = "#2b3844";
block.style.boxShadow = "0 0 7px 2px rgba(0, 0, 0, 0.03)";

// body>block>      blockImage
let blockImage = document.createElement("div");
blockImage.classList.add("block-image");
block.append(blockImage);
blockImage.style.height = "160px";
blockImage.style.display = "flex";
blockImage.style.justifyContent = "start";

// body>block>blockImage>     img
let image = document.createElement("img");
blockImage.append(image);
image.setAttribute("src", "./Flag_of_Uzbekistan.svg");
image.setAttribute("alt", "Flag of Uzbekistan");
image.style.height = "100%";

// body>block>      blockInfo
let blockInfo = document.createElement("div");
blockInfo.classList.add("block-info");
block.append(blockInfo);
blockInfo.style.padding = "24px";

// body>block>blockInfo>     blockTitle
let blockTitle = document.createElement("h6");
blockInfo.append(blockTitle);
blockTitle.innerText = "Uzbekistan";
blockTitle.classList.add("block_Title");
blockTitle.style.margin = "0";
blockTitle.style.marginBottom = "16px";
blockTitle.style.fontWeight = "800";
blockTitle.style.fontSize = "18px";
blockTitle.style.color = "#ffffff";

// body>block>blockInfo>blockTitle>    aboutState
for (let i = 0; i < 3; i++) {
  blockInfo.insertAdjacentHTML("beforeend", `<p class = "about-state"></p>`);
}
let aboutState = document.querySelectorAll(".about-state");
aboutState[0].innerHTML = "<b>Population:</b> 36.537.000";
aboutState[1].innerHTML = "<b>Region:</b> Asia";
aboutState[2].innerHTML = "<b>Capital:</b> Tashkent";
for (let i = 0; i < 3; i++) {
  aboutState[i].style.margin = "0";
  aboutState[i].style.fontWeight = "300";
  aboutState[i].style.fontSize = "14px";
  aboutState[i].style.color = "#ffffff";
  if (i < 2) {
    aboutState[i].style.marginBottom = "8px";
  }
}
