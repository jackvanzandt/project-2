import { LitElement, html, css } from 'lit';
import "./edu-badge.js";

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
        this.updateList();
        this.searchForThis = '';
        this.searchThis(this.badges,this.searchForThis);
    }

    async updateList(){
       const address = '/api/list';
       const data = await fetch(address).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return [];
    })
    .then((data) => {
        this.badges = data;
    });
       console.log(data);
       
    }

    searchThis(items, searchForThis){
      return items.filter((thing) => 
      {
        for (var item in thing)
        {
          if (thing[item].toString().toLowerCase().includes(searchForThis.toLowerCase()))
          {
            return true;
          }
        }
        return false;
      });
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