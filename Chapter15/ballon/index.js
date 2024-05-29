let p = document.querySelector("p");
let size;

function changePixels(newSize) {
    size = newSize;
    p.style.fontSize = size + "px";
}
changePixels(20);

function handleChnage(event) {
    if (event.key == "ArrowUp") {
        if (size > 70) {
            p.textContent = "💥";
            document.body.removeEventListener("keydown", handleChnage);
        } else {
            changePixels(size * 1.3);
            // prevent default action of page scroll up
            event.preventDefault();
        }
    } else if (event.key == "ArrowDown") {
        changePixels(size * 0.9);
        // prevent default action of page scroll down
        event.preventDefault();
    }
}

document.body.addEventListener("keydown", handleChnage);
