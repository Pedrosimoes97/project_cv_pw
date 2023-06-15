import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/database.js';


const EducationModel = database.define('education.', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    institution: {
      type: STRING,
      allowNull: true,
    },
    degree: {
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

  export {EducationModel};