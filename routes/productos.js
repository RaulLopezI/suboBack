/*
    Ruta: /api/Productos
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const {
  getProductos,
  crearProducto,
  getProductosUser
} = require("../controllers/productos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.get("/", getProductos);
router.get("/:id", getProductosUser);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearProducto
);

/* router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  actualizarProducto
);

router.delete("/:id", validarJWT, borrarProducto); */

module.exports = router;
