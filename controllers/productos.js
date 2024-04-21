const { response } = require('express');

const Producto = require('../models/producto');


const getProductos = async (req, res) => {

    const Productos = await Producto.find().populate("usuario", "nombre");

    res.json({
        ok: true,
        productos: Productos
    });

}

const getProductosUser = async (req, res) => {

    idUsuario = req.params.id

    const Productos = await Producto.find({"usuario": idUsuario}).populate("usuario", "nombre");;

    res.json({
        ok: true,
        Productos
    });

}

const crearProducto = async (req, res = response) => {

    const { nombre, usuario } = req.body;

    try {


        const ProductoC = new Producto(req.body);


        // Guardar Producto
        await ProductoC.save();


        res.json({
            ok: true,
            ProductoC
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }


}


/* const actualizarProducto = async (req, res = response) => {

    // TODO: Validar token y comprobar si es el Producto correcto

    const uid = req.params.id;


    try {

        const ProductoDB = await Producto.findById(uid);

        if (!ProductoDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un Producto por ese id'
            });
        }

        // Actualizaciones
        const { password, email, ...campos } = req.body;

        if (ProductoDB.email !== email) {

            const existeEmail = await Producto.findOne({ email });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un Producto con ese email'
                });
            }
        }

        campos.email = email;
        const ProductoActualizado = await Producto.findByIdAndUpdate(uid, campos, { new: true });

        res.json({
            ok: true,
            Producto: ProductoActualizado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }

} */


/* const borrarProducto = async (req, res = response) => {

    const uid = req.params.id;

    try {

        const ProductoDB = await Producto.findById(uid);

        if (!ProductoDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un Producto por ese id'
            });
        }

        await Producto.findByIdAndDelete(uid);


        res.json({
            ok: true,
            msg: 'Producto eliminado'
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });

    }


}*/



module.exports = {
    getProductos,
    crearProducto,
    getProductosUser
    /* actualizarProducto,
    borrarProducto,
    getProductosProducto */
}