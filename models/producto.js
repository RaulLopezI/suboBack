const { Schema, model } = require('mongoose');


const ProductoScheme = Schema({

    nombre: {
        type: String,
        required: true
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});


ProductoScheme.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})



module.exports = model( 'Producto', ProductoScheme );