export class DebounceInput {
  constructor({ element, callback, delay = 1500 }) {
    this.inputElement = element;
    this.callback = callback;
    this.delay = delay;
    this.timeout = null;

    this.init();
  }

  init() {
    this.handleInput = this.debounce((value) => {
      this.callback(value);
    }, this.delay);

    this.inputElement.addEventListener("input", (e) => {
      this.handleInput(e.target.value);
    });
  }

  debounce(func, delay) {
    return (...args) => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  setDelay(newDelay) {
    this.delay = newDelay;
    this.handleInput = this.debounce((value) => {
      this.callback(value);
    }, this.delay);
  }

  /**
   * Clean up event listeners
   */
  destroy() {
    this.inputElement.removeEventListener("input", this.handleInput);
    clearTimeout(this.timeout);
  }
}
