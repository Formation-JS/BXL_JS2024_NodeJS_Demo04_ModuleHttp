//! Import du module "node/http"
const http = require('node:http');

//! Création du serveur web
const server = http.createServer((req, res) => {

    //! Le code présent ici sera executé pour chaque requete !!!

});

//! Démarrer le serveur
server.listen(8080, () => {
    console.log(`Web server is running on port 8080`);
});server.js