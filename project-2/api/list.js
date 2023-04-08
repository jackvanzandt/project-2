export default async function handler(req, res) {
    const search = req.query.search || '';
    var list = [
        {
            "name": "Caleb Pellerite",
            "creator": "Caleb",
            "image": "https://media.licdn.com/dms/image/C4E03AQF17VSorK1Rsw/profile-displayphoto-shrink_800_800/0/1660240269190?e=2147483647&v=beta&t=S5jkOeUrxUScxBgK2dv2ULh6FtdppASauD0oITdmCRU",
            "department": "Food Science"
          },
          {
            "name": "A Person",
            "creator": "person",
            "image": "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
            "department": "Your Mom"
          },
          {
            "name": "Web Teacher",
            "creator": "Bryan Ollendyke",
            "image": "https://yt3.googleusercontent.com/1LdVMQLDT9EaKcK0pYG0JOjAScB4qCt1cB_zI1LIFzvpknX8TsuLjkqJKSuDDoP2sfTJOnEXkbI=s900-c-k-c0x00ffffff-no-rj",
            "department": "IST"
          },
          {
            "name": "Short Guy",
            "creator": "Jeffery Ned",
            "image": "https://www.centredaily.com/latest-news/6fxhkn/picture240209937/alternates/FREE_1140/POTyrone7.JPG",
            "department": "Athletics"
          },
          {
            "name": "Winner",
            "creator": "Daniel Jones",
            "image": "https://p.kindpng.com/picc/s/139-1392955_new-york-giants-logo-new-york-giants-hd.png",
            "department": "New York Giants"
          },
          {
            "name": "Knicks",
            "creator": "New York Knicks",
            "image": "https://cdn.shopify.com/s/files/1/1949/1233/products/knicks-apple-mock_1000x.jpg?v=1575428339",
            "department": "Madison Square Garden"
          }

    ];
    list.map((badge) => {
      badge.index = badge.name.toLowerCase() + " " + badge.creator.toLowerCase() + " " + badge.department.toLowerCase();
    });
    list = list.filter((badge) => {
      return badge.index.indexOf(search.toLowerCase()) > -1;
    });
    console.log(list);
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(list);
  }