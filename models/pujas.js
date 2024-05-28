const { Schema, model } = require('mongoose');


const PujasScheme = Schema({
    producto: {
        required: false,
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});


PujasScheme.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})



module.exports = model( 'Pujas', PujasScheme );