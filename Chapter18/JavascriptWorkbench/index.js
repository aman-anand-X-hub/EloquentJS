

document.querySelector("#button").addEventListener("click", () => {

    let code = document.querySelector("#code").value;
    let outputNode = document.querySelector("#output");
    try {
      outputNode.innerText = String(code);
    } catch (e) {
      outputNode.innerText = "Error: " + e;
    }
});