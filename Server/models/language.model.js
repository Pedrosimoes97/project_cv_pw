import { INTEGER, STRING } from "sequelize";
import { database } from "../config/database.js";

const LanguageModel = database.define("language", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  language: {
    type: STRING,
    allowNull: true,
  },
  comprehension: {
    type: STRING,
    allowNull: true,
  },
  speaking: {
    type: STRING,
    allowNull: true,
  },
  writing: {
    type: STRING,
    allowNull: true,
  },
});

export { LanguageModel };
