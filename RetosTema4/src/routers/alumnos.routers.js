const { Router } = require("express");
const router = Router();
const alumnosCtrl = require("../controller/alumnos.controller");

router.get('/alumnos', alumnosCtrl.getAlumnos);
router.post('/alumnos', alumnosCtrl.addAlumno);
router.put('/alumnos', alumnosCtrl.editAlumno);
router.delete('/alumnos', alumnosCtrl.delAlumno);

module.exports = router;