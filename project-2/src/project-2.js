import { LitElement, html, css } from 'lit';



class Project2 extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      creator: { type: String},
      image: {
        type: String,
      },
      department: { type: String},
    }
  }

  static styles = css`

  `;

  render() {
    return html`
       
    `;
  }
}

customElements.define('project-2', Project2);