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
.search-container {
	background-color: #f2f2f2;
	padding: 100px;
  width: 70%;
  height: 10%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
}

.explore-container {
  width: 100%;
  min-height: 100vh;
  background-color: #d3dce4;
  display: flex;
  flex-direction: column; 
}

.explore-container h1 {
  margin: 0;
  padding-top: 50px;
  padding-bottom: 15px;
  padding-left: 80px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #5b5a5a;
}

.search-container input[type="text"] {
	padding: 20px;
	border: none;
	background-color: #fff;
	font-size: 16px;
	width: 60%;
  margin: 0 10px 0 0;
}

.search-container button {
	background-color: #4CAF50;
	color: white;
	padding: 10px 20px;
	border: none;
	cursor: pointer;
	font-size: 16px;
}

.badge {
	background-color: #4CAF50;
	color: #fff;
	padding: 10px;
	margin-right: 10px;
	margin-bottom: 10px;
	font-size: 16px;
	border-radius: 5px;
	cursor: pointer;
}

.badge:hover {
	background-color: #3e8e41;
}

.search-text {
  font-size: 20px;
  font-family: sans-serif;
  margin-bottom: 20px;
  margin-right: 10px;
}

header {
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.logo {
  font-size: 18px;
  font-style: und;
  font-weight: bold;
  color: #888;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.input-container {
  display: flex;
  align-items: center;
}

#search-input {
  margin-right: 10px;
  width: calc(100% - 120px);
}

.content-wrapper {
  overflow-y: scroll;
  height: 100vh;
}

.badgeList{
      width: 80%;
      background-color: white;
      font-size: 20px;
      margin: auto;
      padding: 10px;
    }

    
    `;
    }


    render() {
        return html`
        <div class="content-wrapper">
        <header>
          <div class="logo">Penn State Digital Badges</div>
        </header>
      <div class="explore-container">
        <h1>Explore</h1>
      <div class="search-container">
        <div class="search-text">Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.</div>
          <div class="input-container">
            <div class="searchBar">
            <search-bar @value-changed="${this._handleSearchEvent}"></search-bar>
          </div>
        </div>
      </div>

      <div class="badgeList">
        <div class="listHeading">
          Looking for something brand spankin' new? Here are the most recently added badges!
        </div>
        <hr>

        
        
        ${this.badges.map(badge => html`
              
                <edu-badge name="${badge.name}" creator="${badge.creator}" image="${badge.image}" department="${badge.department}"></edu-badge>
            
            
            `)}
        `;
    }
}
customElements.define(BadgeList.tag, BadgeList);
