const template = document.createElement("template");
template.innerHTML = `
    <style>
      
        *{
            padding: 0;
            margin: 0;
        }

        @font-face {
            font-family: poppins-bold;
            src: url(../assets/fonts/Poppins-Bold.ttf);
        }

        @font-face {
            font-family: poppins-regular;
            src: url(../assets/fonts/Poppins-Regular.ttf);
        }

        @font-face {
            font-family: poppins-medium;
            src: url(../assets/fonts/Poppins-Medium.ttf);
        }

        @font-face {
            font-family: Rubik;
            src: url(../assets/fonts/Rubik-Italic-VariableFont_wght.ttf);
        }

        header{
  -webkit-app-region: drag;
  position: fixed;
  width: 100%;
  height:38px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
  
header .icon-bar{
  display: flex;
  justify-content: center; /* horizontally centers the image */
  align-items: center; /* vertically centers the image */
  color: white;
  gap: 10px;
  font-family: poppins-medium;
  font-size: 14px;
}
header .icon-bar div{
  display: flex;
  justify-content: center; /* horizontally centers the image */
  align-items: center; /* vertically centers the image */
  
}
header .icon-bar img{
  width: 20px;
}
header .control-box{
  -webkit-app-region: no-drag;
  margin-left: auto;
  display: flex;
  align-items: center;
  
}
header .control-box div{
  width: 40px;
  height: 38px;
  display: flex;
  justify-content: center; /* horizontally centers the image */
  align-items: center; /* vertically centers the image */
}
header .control-box > div:nth-child(1):hover, header .control-box > div:nth-child(2):hover{
  background-color: #2d0a63;
}
header .control-box > div:nth-child(3):hover{
  background-color: #C42B1C;
}
@media (prefers-color-scheme: dark) {
  header{
    background-color: #2A282D;
  }
}
@media (prefers-color-scheme: light) {
  header{
    background-color: #22074A;
  }
}
    </style>
    
    <header>
      <div class="icon-bar">
        <div>
          <img src="../../assets/images/logo.png" alt="ShareAm_Logo" />
        </div>
       
         <slot name="title"></slot>
      </div>
      <div id="control-box-parent" class="control-box">
        <div id="minimize-button" class="minimize">
          <img src="../../assets/icons/control_box/minimize.svg" />
        </div>
        <div id="maximize-button" class="maximize">
          <img src="../../assets/icons/control_box/maximize.svg" />
        </div>
        <div id="close-button" class="main-close-button">
          <img src="../../assets/icons/control_box/close.svg" />
        </div>
      </div>
    </header>
    `;

class PageHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }

  //     if (document.getElementById('darkmode-toggle')) {
  //   document.getElementById('darkmode-toggle').addEventListener('click', async () => {
  //     const isDarkMode = await window.darkMode.toggle()
  //   })
  // }
  // if (document.getElementById('reset-to-system')) {
  //   document.getElementById('reset-to-system').addEventListener('click', async () => {
  //     await window.darkMode.system()
  //   })
  // }

  // document.getElementById('minimize-button').addEventListener('click', async () => {
  //   await window.electronAPI.minimizeWindow();
  // });
  // document.getElementById('maximize-button').addEventListener('click', async () => {
  //   await window.electronAPI.maximizeWindow();
  // });
  // document.getElementById('close-button').addEventListener('click', async () => {
  //   await window.electronAPI.closeWindow();
  // });

  // document.addEventListener('DOMContentLoaded', async () => {
  //   const currentState = await window.showState.getState();
  // });
}
customElements.define("page-header", PageHeader);
