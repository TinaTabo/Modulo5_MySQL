const { Router } = require("express");
const router = Router();
const notasCtrl = require("../controller/notas.controller");

router.get('/media', notasCtrl.getMedia);
router.get('/apuntadas', notasCtrl.getAsignaturasAlumnos);
router.get('/impartidas', notasCtrl.getAsignaturasProfesores);

module.exports = router;