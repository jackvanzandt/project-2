export default async function handler(request, res) {

    var list = [
        {
            "name": "Caleb Pellerite",
            "creator": "Caleb",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
            "department": "Food Science"
          },
          {
            "name": "A Person",
            "creator": "person",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
            "department": "Your Mom"
          },
          {
            "name": "Web Teacher",
            "creator": "Bryan Ollendyke",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
            "department": "IST"
          },
          {
            "name": "Short Guy",
            "creator": "Jeffery Ned",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
            "department": "Athletics"
          },
          {
            "name": "Winner",
            "creator": "Daniel Jones",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
            "department": "New York Giants"
          }

    ];
    list.map((badge) => {
      badge.index = badge.name.toLowerCase() + " " + badge.creator.toLowerCase() + " " + badge.department.toLowerCase();
    });
    list = badge.filter((badge) => {
      return badge.index.indexOf(search.toLowerCase()) > -1;
    });
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(list);
  }