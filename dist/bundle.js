(()=>{"use strict";class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <h1>Hola mami como estas</h1>\n\t\t\t\t<postImage></postImage>\n\n        ")}}customElements.define("app-container",t)})();