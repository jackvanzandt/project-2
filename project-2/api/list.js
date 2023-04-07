export default async function handler(request, res) {

    const list = [
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
            "department": "person at person"
          },
          {
            "name": "Bryan Ollendyke",
            "creator": "Bryan Ollendyke",
            "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
            "department": "IST"
          }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(list);
  }