document.addEventListener("DOMContentLoaded", () => {
    const fileSelect = document.getElementById("file-select");
    const fileContent = document.getElementById("file-content");
  
    fetch("/").then(response => response.text()).then(data => {
      const files = data.split("\n").filter(name => name);
      files.forEach(file => {
        const option = document.createElement("option");
        option.value = option.textContent = file;
        fileSelect.appendChild(option);
      });
    });
  
    fileSelect.addEventListener("change", () => {
      const file = fileSelect.value;
      fetch(file).then(response => response.text()).then(data => {
        fileContent.value = data;
      });
    });
  
    document.getElementById("file-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const file = fileSelect.value;
      fetch(file, {
        method: "PUT",
        body: fileContent.value,
      }).then(response => {
        if (response.ok) {
          alert("File saved successfully!");
        } else {
          alert("Failed to save the file.");
        }
      });
    });
  });
  