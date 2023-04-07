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
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

* {
  box-sizing: border-box;
}

.cardTitle {
  text-decoration: none;
}
.title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



.wrapper {
  display: inline-block;
  width: 28%;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #fff;
  border-color: #3e98d3;
  border-left: 20px solid  #3e98d3;

}
 .data {
  float: right;
  width: 60%;
  height: 100%;
 
}
.data .content {
  padding: 10px;
  position: flex;
}
.author {
  font-size: 15px;
  background-color: #cfe6f4;
  margin-left: 0px;
  text-align: left;
  text-indent: 2%;
  height: 40px;
  font-family: sans-serif;
 
}
.title {

  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 30px;
  
}
.text {
  height: 15px;
  font-family: sans-serif;
  font-size: 15px;
  margin-top: 25px;
  margin-left: 10px;
  
}

.image {
  float: right;
  width: 40%;
}
.book-image {
  width: 60%;
  display: block;
  height: 80%;
  margin-top: 60px;
  margin-left: 45px;
  margin-bottom: auto;
}
  `;

  constructor() {
    super();
    this.name = "APA Style Citations:   Introduction";
    this.creator = "Creator: Victoria Bush";
    this.image = "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png"
    this.department = "Technology and Information";
  }

  render() {
    return html`
      <div class="wrapper">
    <div class="image">
      <img class="book-image"     src="${this.image}"/>
     </div>
     
     <div class="author">
      
     ${this.department}
    
     </div>

     <div class="title">${this.name}
     </div>

     <div class="text">${this.creator}</div>
  
     <div class="data">
       <div class="content">
       </div>
     </div> 
  </div>
 </div>
    `;
  }
}

customElements.define('project-2', Project2);