import { INTEGER, STRING } from "sequelize";
import { database } from "../config/database.js";

const ExperienceModel = database.define("experience", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  company: {
    type: STRING,
    allowNull: true,
  },
  start_date: {
    type: STRING,
    allowNull: true,
  },
  end_date: {
    type: STRING,
    allowNull: true,
  },
});

export { ExperienceModel };
