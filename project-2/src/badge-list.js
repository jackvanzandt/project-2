import { LitElement, html, css } from 'lit';
import "./edu-badge.js";
import "./search-bar.js";

export class BadgeList extends LitElement {
    static get tag() {
        return 'badge-list';
    }
    static get properties() {
        return{
          badges: { type: Array},
          list: { type: String}, 
        }
    }

    constructor() {
        super();
        this.badges = [];
        this.list = 'Badge List';
        this.getSearchResults().then((results) => {
          this.badges = results;
      });
    }

    async getSearchResults(value = '') {
      const address = `/api/list?search=${value}`;
      const results = await fetch(address).then((response) => {
          if (response.ok) {
              return response.json()
          }
          return [];
      })
      .then((data) => {
          return data;
      });

      return results;
  }

  async _handleSearchEvent(e) {
    const term = e.detail.value;
    this.badges = await this.getSearchResults(term);
}

    static get styles() {
        return css`
      
    `;
    }


    render() {
        return html`
        



        <h2>${this.list}</h2>
            ${this.badges.map(badge => html`
                <edu-badge name="${badge.name}" creator="${badge.creator}" image="${badge.image}" department="${badge.department}"></edu-badge>
            `)}
        `;
    }
}
customElements.define(BadgeList.tag, BadgeList);