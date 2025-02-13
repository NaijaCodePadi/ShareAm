const template = document.createElement("template");
template.innerHTML = `
    <style>
        
        #spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        animation: spin 2s linear infinite;
        }

        @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }
    </style>
        
    <div id="spinner"></div>
`;

class loadSpinner extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}
customElements.define("load-spinner", loadSpinner);
