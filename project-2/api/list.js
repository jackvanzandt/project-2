export default async function handler(req, res) {
    const search = req.query.search || '';
    var list = [
      {
          "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563.jpg",
          "name": "I dont know ",
          "creator": "me",
          "department": "Beast"
      },
      {
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563.jpg",
        "name": "I dont know ",
        "creator": "me",
        "department": "Beast"
    },
    {
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563.jpg",
        "name": "I dont know ",
        "creator": "me",
        "department": "Beast"
    },
      
    ];
    list.map((player) => {
      player.index = player.name.toLowerCase() + " " + player.position.toLowerCase() + " " + player.top.toLowerCase();
    });
    list = list.filter((player) => {
      return player.index.indexOf(search.toLowerCase()) > -1;
    });
    console.log(list);
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(list);
  }