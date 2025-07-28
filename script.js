const button = document.querySelector("#btn");
const colorName = document.querySelector("span");
const copy = document.querySelector("#copy");
const copyMsg = document.querySelector("#copy-msg");

const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;

    colorName.innerText = randomColor;
}

const copyColor = () => {
    const color = colorName.innerText;
    navigator.clipboard.writeText(color);

    copyMsg.classList.add("show");  

    setTimeout(() => {
        copyMsg.classList.remove("show");
    }, 1500);
}

button.addEventListener("click", changeColor);
copy.addEventListener("click", copyColor)