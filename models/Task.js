//Modelos de las tareas
import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Tasks = db.define("Tasks", {
  taskId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  due_date: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.ENUM("pendiente", "en progreso", "completado"),
    defaultValue: "pendiente",
    allowNull: false,
  }, 
  assigned_to: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  project_id: {
    type: DataTypes.UUID,
    allowNull: false,
  }  
});

export default Tasks;