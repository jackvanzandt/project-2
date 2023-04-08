import { LitElement, html, css } from 'lit';
import './badge-list.js';
import './search-bar.js';

class Project2 extends LitElement {
  static get properties() {
    return {
    header: { type: String },
    data: { type: Array },
    searchForThis: { type: String }
    }
  }

  static styles = css`
       
  `;

   constructor() {
    super();
    this.header = 'Badge Search';
    this.searchForThis = '';
  }

  wordChanged(e) {
    this.searchForThis = e.detail.value;
  }

  render() {
    return html`
           

      
        
        
      </div>
    `;
  }
}

customElements.define('project-2', Project2);