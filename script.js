const form = document.querySelector(".memestuff");

const pictureInput = document.querySelector('input[name="picture"]');
const textInputOne = document.querySelector('input[name="text1"]');
const textInputTwo = document.querySelector('input[name="text2"]');

const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');

const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //key to a single page form
  // now we want to extract the info from the 3 inputs
  const memePic = getPicture(pictureInput.value);
  const memePicContainer = document.createElement("div");

  memePicContainer.className = "container";
  const topLine = topText(
    textInputOne.value,
    colorInput.value,
    fontSizeInput.value
  );
  const bottomLine = bottomText(
    textInputTwo.value,
    colorInput.value,
    fontSizeInput.value
  );
  const removeBtn = document.createElement("button");

  removeBtn.innerText = "REMOVE";
  removeBtn.className = "removeButton";

  removeBtn.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });

  memePic.appendChild(topLine);
  memePic.appendChild(bottomLine);
  memePicContainer.appendChild(memePic);
  memePicContainer.appendChild(removeBtn);
  result.appendChild(memePicContainer);
});

function getPicture(text) {
  const picture = document.createElement("div");
  picture.style.backgroundImage = `url('${text}')`;
  console.log(text);
  picture.className = "finalMemePic";
  return picture;
}

function topText(text, color, size) {
  const top = document.createElement("p");
  top.innerText = text;
  top.style.color = color;
  top.style.fontSize = size + "px";
  top.style.fontWeight = 900;
  top.className = "finalMemeTop";
  return top;
}

function bottomText(text, color, size) {
  const bottom = document.createElement("p");
  bottom.innerText = text;
  bottom.style.color = color;
  bottom.style.fontSize = size + "px";
  bottom.style.fontWeight = 900;
  bottom.className = "finalMemeBottom";
  return bottom;
}
