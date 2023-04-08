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

    static get styles() {
        return css`
      :host{
            display: block;
        }
        .box{
            border: 2px solid black;
            display: flex;
        }
        .item{
            display: inline-flex;
        }
    `;
    }


    render() {
        return html`
        



        <h2>${this.list}</h2>
        <div class="box">
            ${this.badges.map(badge => html`
            <div class="item">
                <edu-badge name="${badge.name}" creator="${badge.creator}" image="${badge.image}" department="${badge.department}"></edu-badge>
            </div>
            `)}
      </div>
        `;
    }
}
customElements.define(BadgeList.tag, BadgeList);