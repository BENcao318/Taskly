'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Admin }) {
      // define association here
      this.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' })
    }
    static associate({ Assigned_Task }) {
      // define association here
      this.hasMany(Assigned_Task, { foreignKey: 'task_id', as: 'task' })
    }
  }
  Task.init(
    {
      admin_id: {
        type: DataTypes.INTEGER,
      },
      form_json_data: {
        type: DataTypes.JSONB,
      },

    },
    {
      sequelize,
      tableName: 'tasks',
      modelName: 'Task',
    }
  )
  return Task
}