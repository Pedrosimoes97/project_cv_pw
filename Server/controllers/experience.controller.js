import { ExperienceModel } from "../models/experience.model.js";

export const createExperince = async (req, res) => {
  try {
    const { company, startDate, endDate } = req.body;
    const experience = await ExperienceModel.create({
      company,
      startDate,
      endDate,
    });
    return res.status(201).json(experience);
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({ error: "erro de Servidor" });
  }
};

export const getExperience = async (req, res) => {
  try {
    const experience = await ExperienceModel.findAll();
    return res.json(experience);
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({ error: "Erro de Servidor" });
  }
};
