import { EducationModel, EducationModel } from "../models/education.model.js";

export const getEducations = async (req, res) => {
  try {
    const education = await EducationModel.findAll();
    return res.json(education);
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({ error: "Erro de servidor" });
  }
};

export const createEducations = async (req, res) => {
  try {
    const { degree, institution, start_date, end_date } = req.body;
    const education = await EducationModel.create({
      degree,
      institution,
      graduationYear,
      start_date,
      end_date,
    });
    return res.status(201).json(education);
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({ error: "Erro de Servidor" });
  }
};

export const updateEducations = async (req, res) => {
  try {
    const { id } = req.params;
    const { degree, institution, start_date, end_date } = req.body;
    const [updatedRows] = await EducationModel.update(
      {
        degree,
        institution,
        graduationYear,
        start_date,
        end_date,
      },
      {
        where: { id },
      }
    );
    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ error: "Erro" });
    }
    return res.json({ message: "Concluido" });
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({ error: "Erro de Servidor" });
  }
};
export const deleteEducations = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await EducationModel.findOne({
      where: { id },
    });
    if (!education) {
      return res.status(404).json({ error: 'Erro' });
    }
    await education.destroy();
    return res.json({ message: 'Concluído' });
  } catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ error: 'Erro de Servidor' });
  }
};
