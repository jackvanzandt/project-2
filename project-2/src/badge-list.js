import { LitElement, html, css } from 'lit';
import "./project-2.js";
import "./search-widget.js";


export class BadgeList extends LitElement {
    static get tag() {
        return 'team-roster';
    }
    static get properties() {
        return {
          players: { type: Array },
          team: { type: String },
        }
    }

    constructor() {
        super();
        this.players = [];
        this.team = 'LA Kings';
        this.getSearchResults().then((results) => {
            this.players = results;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
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
        this.players = await this.getSearchResults(term);
    }

    render() {
        return html`
        <h2>${this.team}</h2>
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        <div class="wrapper">
            ${this.players.map(player => html`
            <div class="item">
                <project-2 name="${player.name}" creator="${player.creator}" image="${player.image}" department="${player.department}"></project-2>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(BadgeList.tag, BadgeList);