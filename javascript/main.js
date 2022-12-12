image = document.querySelector("img");
butt = document.querySelector("button");
input = document.querySelector("#url");
let url;
butt.addEventListener("click", function () {
  if (input.value.startsWith("http") || input.value.startsWith("https")) {
    url = input.value;
  } else {
    url = `https://${input.value}`;
  }
  image.style.opacity = "0";
  image.src = `https://api.apiflash.com/v1/urltoimage?access_key=d4f19ee7b5d84f76aad48e8327e7993f&wait_until=page_loaded&url=${url}`;
  document.querySelector("svg").style.opacity = "1";
  if (image.complete) {
    loaded();
  } else {
    image.addEventListener("load", loaded);
  }
});
function loaded() {
  image.style.opacity = "1";
  document.querySelector("svg").style.opacity = "0";
}
