// Fetching the DOM
const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const formatBtn = document.querySelector(".format-btn");
const minifyBtn = document.querySelector(".minify-btn");

// Formating JSON
formatBtn.addEventListener("click", () => {
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);

  outputArea.value = formatted;
});

// Minifying JSON
minifyBtn.addEventListener("click", () => {
  const minified = JSON.stringify(JSON.parse(inputArea.value));

  outputArea.value = minified;
});
