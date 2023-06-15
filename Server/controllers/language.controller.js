import { LanguageModel } from '../models/language.model.js';

export const getLanguages = async (req, res) => {
    try {
      const languages = await LanguageModel.findAll();
      return res.json(languages);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Erro de servidor" });
    }
  };
  