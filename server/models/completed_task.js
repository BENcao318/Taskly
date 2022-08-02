'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Completed_Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Assigned_Task }) {
      // define association here
      this.hasOne(Assigned_Task, { foreignKey: 'assigned_task_id', as: 'assigned_task' })
    }
  }
  Completed_Task.init(
    {
      assigned_task_id: {
        type: DataTypes.INTEGER,
      },
      response_json_data: {
        type: DataTypes.JSONB,
      },

    },
    {
      sequelize,
      tableName: 'completed_tasks',
      modelName: 'Completed_Task',
    }
  )
  return Completed_Task
}
