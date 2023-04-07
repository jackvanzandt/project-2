import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class SearchWidget extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    }
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }
    simple-icon {
      display: inline-block;
      --simple-icon-height: 40px;
      --simple-icon-width: 40px;
    }
    `;
  }

  constructor() {
    super();
    this.value = 'Default Value';
  }

  render() {
    return html`
      <simple-icon icon="icons:search"></simple-icon>
      <input type="text" value="${this.value}" @input="${this._handleInput}" />
    `;
  }
  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: {
        value: this.value,
      }
    }));
  }
}

customElements.define('search-widget', SearchWidget);