export const lotto=[
    {
        name: 'Georgia Lotto',
        value: "0  4  4  5  8",
    },
    {
        name: 'New York',
        value: "0  4  4  5  8",
    }
]




let databaseUrl = "https://cors-anywhere.herokuapp.com/https://us-central1-yourcloudwebsite.cloudfunctions.net/database"
fetch(databaseUrl, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            password: "My aunt jane 10",
            database: "clients",
            query: `select * from lotto`,
            socketPath: "/cloudsql/yourcloudwebsite:us-central1:yourcloudwebsite"
        })
    }).then( response => response.json()).then( data => console.log(data));
        
    fetch(databaseUrl, {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          password: "My aunt jane 10",
          database: "clients",
          query: `select * from clients`,
          socketPath: "/cloudsql/yourcloudwebsite:us-central1:yourcloudwebsite"
      })
  }).then( response => response.json()).then( data => console.log(data));