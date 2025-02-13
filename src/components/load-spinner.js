const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            --border-color: rgba(52, 152, 219, 0.7); /* Default lighter border */
            --border-top-color: #3498db; /* Default top border */
        }

        #spinner {
            border: 4px solid var(--border-color); /* Full border gets lighter color */
            border-top: 4px solid var(--border-top-color); /* Top border is darker */
            border-radius: 50%;
            width: 25px;
            height: 25px;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
    <div id="spinner"></div>
`;

class LoadSpinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).append(
      template.content.cloneNode(true)
    );
  }

  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "color") {
      this.updateColor(newValue);
    }
  }

  updateColor(color) {
    const lighterColor = this.getLighterColor(color, 35, 0.5); // Lighten by 35% and set 50% opacity
    const borderTopColor = color; // Darker top border for contrast

    this.style.setProperty("--border-color", lighterColor);
    this.style.setProperty("--border-top-color", borderTopColor);
  }

  getLighterColor(hex, lightnessIncrease = 30, opacity = 1) {
    // Convert HEX to HSL
    let r, g, b;
    if (hex.startsWith("#")) {
      hex = hex.slice(1);
      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((char) => char + char)
          .join(""); // Expand short hex
      }
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      return hex; // If not a HEX value, return as is
    }

    // Convert RGB to HSL
    let [h, s, l] = this.rgbToHsl(r, g, b);
    l = Math.min(l + lightnessIncrease, 100); // Increase lightness but cap at 100%

    // Convert HSL back to RGB
    [r, g, b] = this.hslToRgb(h, s, l);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  rgbToHsl(r, g, b) {
    (r /= 255), (g /= 255), (b /= 255);
    let max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // Achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h *= 60;
    }
    return [h, s * 100, l * 100];
  }

  hslToRgb(h, s, l) {
    (s /= 100), (l /= 100);
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r, g, b;

    if (h < 60) [r, g, b] = [c, x, 0];
    else if (h < 120) [r, g, b] = [x, c, 0];
    else if (h < 180) [r, g, b] = [0, c, x];
    else if (h < 240) [r, g, b] = [0, x, c];
    else if (h < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];

    return [
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255),
    ];
  }
}

customElements.define("load-spinner", LoadSpinner);
