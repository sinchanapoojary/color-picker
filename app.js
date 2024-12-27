const num = document.getElementById("num");
const generate = document.getElementById("generate");
const root = document.getElementById("root");

generate.onclick = () => {
  let numberOfColors = Number(num.value);
  if (numberOfColors > 5000) {
    alert("number is increasing!");
  }
  if (numberOfColors > 10000) {
    alert(" Can not load large number of colors!");
    return;
  }
  const existingHexCodes = new Set();
  for (let i = 0; i < numberOfColors; i++) {
    const newHexCode = generateUniqueHexCode(existingHexCodes);
    existingHexCodes.add(newHexCode);
  }
  root.innerText = "";
  existingHexCodes.forEach((value) => {
    let div = generateElement("div", value);
    root.append(div);
  });
};
function generateElement(tagName, color) {
  let tag = document.createElement(tagName);
  tag.style.background = "#" + color;
  tag.innerText = "#" + color;
  return tag;
}
function generateUniqueHexCode(existingHexCodes) {
  const allChars = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  while (true) {
    allChars.sort(() => Math.random() - 0.5);

    const hexCode = allChars.slice(0, 6).join("");

    if (!existingHexCodes.has(hexCode)) {
      return hexCode;
    }
  }
}
