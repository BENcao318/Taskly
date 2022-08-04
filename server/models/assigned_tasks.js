'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Assigned_Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ Completed_Task }) {
    //   // define association here
    //   this.hasOne(Completed_Task, {
    //     foreignKey: 'assigned_task_id',
    //     as: 'assigned_task',
    //   })
    // }
    // static associate({ Client }) {
    //   // define association here
    //   this.hasMany(Client, { foreignKey: 'client_id', as: 'client' })
    // }
    static associate({ Task, Client, Completed_Task }) {
      // define association here
      this.belongsTo(Task, { foreignKey: 'task_id', as: 'task' })
      this.belongsTo(Client, { foreignKey: 'client_id', as: 'client' })
      this.hasOne(Completed_Task, {
        foreignKey: 'assigned_task_id',
        as: 'completed_task',
      })
    }
    // static associate({ Client }) {
    //   // define association here
    //   this.belongsTo(Client, { foreignKey: 'client_id', as: 'client' })
    // }
  }
  Assigned_Task.init(
    {
      client_id: DataTypes.INTEGER,
      task_id: DataTypes.INTEGER,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: 'assigned_tasks',
      modelName: 'Assigned_Task',
    }
  )
  return Assigned_Task
}
