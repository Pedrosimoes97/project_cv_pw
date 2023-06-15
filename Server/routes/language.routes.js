import Router from 'express';
import {
  getLanguageModel,
  createLanguageModel,
  updateLanguageModel,
  deleteLanguageModel
} from '../controllers/language.controller.js';

const languageRoutes = Router();

languageRoutes.get('/', getLanguageModel);
languageRoutes.post('/', createLanguageModel);
languageRoutes.put('/:id', updateLanguageModel);
languageRoutes.delete('/:id', deleteLanguageModel);

export { languageRoutes };
