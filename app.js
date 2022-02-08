const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/dni', function (req, res) {
    let dni = req.query.dni
    var numero
    var letr
    var letra
    var mensaje

        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            mensaje= {msg:"La letra es incorrecta"};
        } else {
            mensaje = {msg:"el dni es correcto"};
        }
        res.send(mensaje);
   
})
puerto = 2000;
app.listen(puerto, () => console.log('Escuchando el puerto', puerto))