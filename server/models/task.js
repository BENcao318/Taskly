'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Admin, Assigned_Task }) {
      // define association here
      this.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' })
      this.hasMany(Assigned_Task, {
        foreignKey: 'task_id',
        as: 'assigned_task',
      })
    }
    // static associate({ Assigned_Task }) {
    //   // define association here
    //   this.hasMany(Assigned_Task, {
    //     foreignKey: 'task_id',
    //     as: 'assigned_task',
    //   })
    // }
  }
  Task.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      admin_id: DataTypes.INTEGER,
      form_json_data: DataTypes.JSON,
    },
    {
      sequelize,
      tableName: 'tasks',
      modelName: 'Task',
    }
  )
  return Task
}
