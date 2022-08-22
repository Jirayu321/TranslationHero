import  {Router}  from "express";
import {login} from "../controllers/controllers.js"

const router = Router();

router.get("/",login);

export default router