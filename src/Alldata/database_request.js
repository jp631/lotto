export const lottoData = () => {
    let databaseUrl = "https://cors-anywhere.herokuapp.com/https://us-central1-yourcloudwebsite.cloudfunctions.net/database"
    fetch(databaseUrl, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "My aunt jane 10",
            database: "clients",
            query: `select * from lotto`,
            socketPath: "/cloudsql/yourcloudwebsite:us-central1:yourcloudwebsite"
        })
    }).then(response => response.json()).then(lotData => { 
        return lotData
    });
}

export const clientData = () => {
    let databaseUrl = "https://cors-anywhere.herokuapp.com/https://us-central1-yourcloudwebsite.cloudfunctions.net/database"

    fetch(databaseUrl, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "My aunt jane 10",
            database: "clients",
            query: `select * from clients`,
            socketPath: "/cloudsql/yourcloudwebsite:us-central1:yourcloudwebsite"
        })
    }).then(response => response.json()).then(data => {
        return data});
}

