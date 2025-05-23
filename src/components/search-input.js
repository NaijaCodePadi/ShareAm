import { DebounceInput } from "./debounce-comp.js";

const searchInput = document.getElementById("debounce-text");

const debouncedSearch = new DebounceInput({
  element: searchInput,
  callback: (value) => {
    console.log(value);
  },
  delay: 1500,
});

debouncedSearch.destroy();
