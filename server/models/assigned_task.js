'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Assigned_Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Completed_Task }) {
      // define association here
      this.hasOne(Completed_Task, { foreignKey: 'assigned_task_id', as: 'assigned_task' })
    }
    static associate({ Client }) {
      // define association here
      this.hasMany(Client, { foreignKey: 'client_id', as: 'client' })
    }
    static associate({ Task }) {
      // define association here
      this.hasMany(Task, { foreignKey: 'task_id', as: 'task' })
    }

    toJSON() {
      return { ...this.get(), id: undefined } //Hide the user id for safety
    }
  }
  Assigned_Task.init(
    {
      client_id: {
        type: DataTypes.INTEGER,
      },
      task_id: {
        type: DataTypes.INTEGER,
      },
      completed: {
        type: DataTypes.BOOLEAN,
      }

    },
    {
      sequelize,
      tableName: 'assigned_tasks',
      modelName: 'Assigned_Task',
    }
  )
  return Assigned_Task
}
