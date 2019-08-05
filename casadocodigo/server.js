const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log(`Servidor rodando na porta 3000`);
});

// Primeiro parâmetro: rota que quero atender, função que será executa
app.get('/', function (req, resp) {
    resp.send(`
    <html>
        <head>
           <meta charset="utf-8">
        </head>
        <body>
            <h1> Casa do Código </h1>
        </body>
    </html>
    `
    );
});

app.get('/livros', function (req, resp) {
    resp.send(`
    <html>
        <head>
           <meta charset="utf-8">
        </head>
        <body>
            <h1> Listagem de Livros </h1>
        </body>
    </html>
    `
    );
});

// const http = require('http');

// const servidor = http.createServer(function (req, resp) {

//     let html = '';

//     if(req.url == '/'){
//         html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//             </head>
//             <body>
//                 <h1> Casa do Código </h1>
//             </body>
//         </html>
//     `;
//     } else if (req.url == '/livros') {
//         html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//             </head>
//             <body>
//                 <h1> Listagem de </h1>
//             </body>
//         </html>
//     `;
//     }

//     resp.end(html);
// });
// servidor.listen(3000);
