//! Import du module "node/http"
const http = require('node:http');
const { URL } = require('node:url');
const ejs = require('ejs');

//! Création du serveur web
const server = http.createServer((req, res) => {

    // Obtenir la route demandé
    const { pathname, searchParams } = new URL(req.url, 'http://127.0.0.1:8080');
    const { method } = req;

    console.log('Information de la route : ');
    console.log(` - pathname : ${pathname}`);
    console.log(` - searchParams : ${searchParams}`);
    console.log(` - method : ${method}`);

    // Routing
    if (pathname === '/') {
        const today = (new Date()).toLocaleDateString('fr-be', {
            dateStyle: 'full'
        });
        const people = ['Della', 'Balthazar', 'Khun', 'Gontran', 'Hortence'];
        
        // Ecrire la réponse via le moteur de vue (EJS)
        ejs.renderFile('./views/index.ejs', { today, people }, (error, html) => {
            if(error) {
                console.log(error);
                
                // Réponse en cas d'erreur (Ficher manquant ?)
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Désolé, tout est cassé 😭");
                return;
            }
            
            // Réponse avec le contenu html généré par EJS
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    }
    else if (pathname === '/contact' && method === 'GET') {
        // Défini le status et le type de contenu
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Envoyé le formulaire
        res.end(`<!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact</title>
            </head>
            <body>
                <h1>Formulaire</h1>
                <form method="post">
                    <input type="text" name="demo">
                    <button type="submit">Valider</button>
                </form>
            </body>
            </html>`);
    }
    else if (pathname === '/contact' && method === 'POST') {
        // Défini le status et le type de contenu
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Envoyé la confirmation
        res.end(`<!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact</title>
            </head>
            <body>
                <h1>Merci de votre message</h1>
            </body>
            </html>`);
    }
    else {
        // Défini le status et le type de contenu
        res.writeHead(404, { 'Content-Type': 'text/html' });

        // Envoyé la confirmation
        res.end(`<!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact</title>
            </head>
            <body>
                <h1>Page non trouvé (╯°□°）╯︵ ┻━┻</h1>
            </body>
            </html>`);
    }

});

//! Démarrer le serveur
server.listen(8080, () => {
    console.log(`Web server is running on port 8080`);
}); server.js