import Router from 'express';
import {
  getExperienceModel,
  createExperienceModel,
  
} from '../controllers/experience.controller.js';

const experienceRoutes = Router();

//get
experienceRoutes.get('/', getExperienceModel);

//post
experienceRoutes.post('/create', createExperienceModel);


export { experienceRoutes };
