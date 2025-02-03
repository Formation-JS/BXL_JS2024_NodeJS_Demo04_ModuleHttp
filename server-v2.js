//! Import du module "node/http"
const http = require('node:http');
const { URL } = require('node:url');

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
        // Défini le status et le type de contenu
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Ecrire la réponse => Page html avec un h1 "Hello World"
        res.end('<html> <head> <meta charset="utf-8"> </head> <body> <h1>Hello World 🍎</h1> </body> </html>');
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