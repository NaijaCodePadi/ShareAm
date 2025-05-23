// const inputText = document.getElementById("debounce-text");
// const updateDebounceText = debounce((inputText) => {
//   console.log(inputText);
// });
// inputText.addEventListener("input", () => {
//   updateDebounceText(inputText.value);
// });
// function debounce(text, delay = 1500) {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       text(...args);
//     }, delay);
//   };
// }

import { DebounceInput } from "./debounce-comp.js";

const searchInput = document.getElementById("debounce-text");

const debouncedSearch = new DebounceInput({
  element: searchInput,
  callback: (value) => {
    console.log(value);
  },
  delay: 1500,
});

debouncedSearch.setDelay(500);

debouncedSearch.destroy();
