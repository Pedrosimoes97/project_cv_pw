import Router from "express";
import {
  getEducationModel,
  createEducationModel,
  updateEducationModel,
  deleteEducationModel,
} from "../controllers/education.controller.js";

const educationRoutes = Router();

//get
educationRoutes.get("/", getEducationModel);

//post
educationRoutes.post("/create", createEducationModel);

//put
educationRoutes.put("/:id", updateEducationModel);

//delete
educationRoutes.delete("/:id", deleteEducationModel);

export { educationRoutes };
