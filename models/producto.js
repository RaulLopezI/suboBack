const { Schema, model } = require('mongoose');


const ProductoScheme = Schema({

    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    pujaInicial: {
        type: Number,
        required: true
    },
    puja: {
        type: Number,
        required: false
    },
    cerrado: {
        type: Boolean,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    pujante: {
        required: false,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
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