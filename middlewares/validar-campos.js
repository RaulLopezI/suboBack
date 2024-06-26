const { response } = require('express');
const { validationResult } = require('express-validator')

const validarCampos = (req, res = response, next ) => {

    const errores = validationResult( req );

    if ( !errores.isEmpty() ) {
        console.log(errores);
        return res.status(400).json({
            ok: false,
            errors: errores
        });
    }

    next();
}

module.exports = {
    validarCampos
}
