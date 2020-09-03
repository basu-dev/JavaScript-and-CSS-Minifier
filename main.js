const minifTextarea = document.querySelector(".minified textarea"),
  saveButton = document.querySelector(".minified button"),
  button = document.querySelector("#html-submit span");
let lastInput = "",
  lastOutput = "";

function minify(div) {
  button.innerHTML = "Minifying...";
  if (lastInput !== div) {
    let minifier = new Worker("./minifier.worker.js");
    minifier.postMessage(div);
    minifier.onmessage = (msg) => {
      div = msg.data;
      lastOutput = div;
      showResult(div);
    };
    minifier.onerror = (e) => console.log(e);
  } else if (lastInput == div) {
    showResult(lastOutput);
  }
  lastInput = div;
}
function showResult(div) {
  saveButton.innerHTML = "Copy To ClipBoard";
  saveButton.classList.remove("copied");
  button.innerHTML = "Minify";
  let originalSize = `${(lastInput.toString().length / 1024).toFixed(3)}KB`;
  let finalSize = `${(div.toString().length / 1024).toFixed(3)}KB`;
  document.querySelector(".minified textarea").value = div;
  resizeTextArea(document.querySelector(".minified textarea"));
  document.querySelector("#original").innerHTML = originalSize;
  document.querySelector("#final").innerHTML = finalSize;
}
saveButton.addEventListener("click", () => {
  minifTextarea.disabled = false;
  minifTextarea.select();
  document.execCommand("Copy");
  saveButton.innerHTML = "Copied";
  saveButton.classList.add("copied");
  minifTextarea.height = "20px";
  resizeTextArea(minifTextarea);
  minifTextarea.disabled = true;
});
resizeTextArea = (element) => {
  element.style.height = element.scrollHeight + "px";
};
