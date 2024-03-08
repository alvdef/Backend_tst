import { Router } from "express";
// import { usuarioRegisterLocal, usuarioGet } from "../controllers/usuario";
import { usuarioRegisterValidator } from "../middleware/usuarioValidator";

const router = Router();

// router.post("/", usuarioRegisterValidator, usuarioRegisterLocal);

// router.get("/", usuarioGet);

export default router;
