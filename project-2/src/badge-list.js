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
    }

    updateList(){
       const address = '/api/list';
       fetch(address).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return [];
    })
    .then((data) => {
        this.badges = data;
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
              <div class="item">
                <edu-badge name="${badge.name}" creator="${badge.creator}" image="${badge.image}" department="${badge.department}"></edu-badge>
            </div>
            
            `)}
        `;
    }
}
customElements.define(BadgeList.tag, BadgeList);