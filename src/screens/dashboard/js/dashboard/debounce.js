const inputText = document.getElementById("debounce-text");

const updateDebounceText = debounce((inputText) => {
  console.log(inputText);
});

inputText.addEventListener("input", () => {
  console.log(inputText.value);
  console.log(updateDebounceText(inputText.value));
});

function debounce(shareAm, delay = 1500) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      shareAm(...args);
    }, delay);
  };
}
