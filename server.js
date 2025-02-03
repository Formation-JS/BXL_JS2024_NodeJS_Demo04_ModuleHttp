//! Import du module "node/http"
const http = require('node:http');

//! Création du serveur web
const server = http.createServer((req, res) => {

    //! Le code présent ici sera executé pour chaque requete !!!

    //? Contenu des objets "req" et "res"
    //  - Request
    console.log('Nouvelle requete : ');
    console.log(` - Méthode : ${req.method}`);
    console.log(` - Url : ${req.url}`);
    //  - Response
    console.log(` - Header envoyé au client : ${res.headersSent}`);
    console.log(` - Status de la requete : ${res.statusCode}`);

    
    //? Définir le code de réponse
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    res.statusCode = 418;
    
    //? Définir le type de réponse via le header
    res.setHeader('Content-type', 'text/plain');
    
    //? Définir et envoyé la réponse
    console.log('Traitement en cours...');
    //  - Ecrire la réponse
    res.write('Hello World');
    //  - Envoyer la réponse
    res.end();


    //? Contenu des objets "req" et "res"
    //  - Response (suite)
    console.log(` - Header envoyé au client : ${res.headersSent}`);
    console.log(` - Status de la requete : ${res.statusCode}`);
    console.log();
});

//! Démarrer le serveur
server.listen(8080, () => {
    console.log(`Web server is running on port 8080`);
});