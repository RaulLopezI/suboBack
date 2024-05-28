/*
    Ruta: /api/pujas
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const {
  getPujasUser,
  crearPuja,
  borrarPuja
} = require("../controllers/pujas");

const router = Router();

router.get("/:id", getPujasUser);

router.post(
  "/",
  crearPuja
);

router.delete("/:id", borrarPuja);

/* router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  actualizarProducto
);

 */

module.exports = router;
