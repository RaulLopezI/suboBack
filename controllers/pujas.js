const { response } = require('express');
const Pujas = require('../models/pujas');

const getPujasUser = async (req, res) => {
    idUsuario = req.params.id
    const PujasR = await Pujas.find({"usuario": idUsuario}).populate("usuario", "nombre").populate("producto")
    res.json({
        ok: true,
        pujas: PujasR
    });
}

const crearPuja = async (req, res = response) => {
    const existe = await Pujas.findOne({ usuario: req.body.usuario, producto: req.body.producto });


    if (existe) {
        return res.json({
            ok: true,
            puja: existe
        });
    }
    try {
        const PujaC = new Pujas(req.body);
        await PujaC.save();
        res.json({
            ok: true,
            PujaC
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}

const borrarPuja = async (req, res = response) => {

    const uid = req.params.id;

    try {

        const PujaD = await Puja.findById(uid);

        if (!PujaD) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe la puja por ese id'
            });
        }

        await Puja.findByIdAndDelete(uid);


        res.json({
            ok: true,
            msg: 'Puja eliminado'
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });

    }


}



module.exports = {
    getPujasUser,
    crearPuja,
    borrarPuja
}