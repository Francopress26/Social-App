const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const routePost = require("./post");
const routeUser = require("./user");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);





 router.use('/post', routePost);
router.use("/user", routeUser);




module.exports = router;