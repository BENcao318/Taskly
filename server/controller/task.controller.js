const db = require("../models");
const completed_task = require("../models/completed_task");
const { User, Admin, Task, Assigned_Task, Completed_Task } = db;
const Op = db.Sequelize.Op;

exports.findTask = async (req, res) => {
  const id = req.query.task_id;

  const taskData = await Task.findAll({
    where: {
      id: id,
    },
    attributes: ["form_json_data"],
  });

  res.status(200).send({
    success: true,
    message: "Successfully find the task with given id",
    messge2: null,
    taskData,
  });
};

exports.createTask = async (req, res) => {
  const { admin_id, form_json_data } = req.body;

  try {
    const taskData = await Task.create({ admin_id, form_json_data });

    res.status(200).send({
      success: true,
      message: "Task create success",
      messge2: null,
      taskData,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Task",
    });
  }
};

exports.createCompletedTask = async (req, res) => {
  const { assigned_task_id, response_json_data, copy_of_survey_json } =
    req.body;

  try {
    const taskData = await Completed_Task.create({
      assigned_task_id,
      response_json_data,
      copy_of_survey_json,
    });

    res.status(200).send({
      success: true,
      message: "Completed Task create success",
      messge2: null,
      taskData,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Task",
    });
  }
};

exports.markTaskComplete = async (req, res) => {
  const assigned_task_id = req.query.assigned_task_id;

  console.log(assigned_task_id);

  try {
    const updateStatus = await Assigned_Task.update(
      {
        completed: true,
      },
      {
        where: { id: assigned_task_id },
      }
    );

    console.log("Am I running?");

    res.status(200).send({
      success: true,
      message: "Completed Task update success",
      messge2: null,
      updateStatus,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Task",
    });
  }
};

exports.createAssignedTask = async (req, res) => {
  const { client_id, task_id, completed } = req.body;

  try {
    const taskData = await Assigned_Task.create({
      client_id,
      task_id,
      completed,
    });

    res.status(200).send({
      success: true,
      message: "Assigned Task create success",
      messge2: null,
      taskData,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Task",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    if (req.session.user && req.session.user.email !== req.query.user) {
      return;
    }
    const userInfo = await User.findOne({
      raw: true,
      where: {
        email: req.query.user,
      },
      attributes: ["admin_id"],
    });

    const taskData = await Task.findAll({
      where: {
        admin_id: userInfo.admin_id,
      },
      attributes: ["id", "form_json_data"],
    });

    res.status(200).send({
      success: true,
      message: "Successfully find the tasks on user",
      messge2: null,
      taskData,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Task",
    });
  }
};

exports.findAllAssignedTasks = async (req, res) => {
  const { client_uuid } = req.query;

  try {
    const userData = await User.findAll({
      raw: true,
      where: {
        uuid: client_uuid,
      },
    });

    const assignedTasks = await Assigned_Task.findAll({
      raw: true,
      where: {
        client_id: userData[0].client_id,
      },
      include: ["task"],
      order: [["client_id", "ASC"]],
      attributes: ["id", "client_id", "task_id", "completed"],
    });

    let completedTaskId = [];
    assignedTasks.forEach(function (item) {
      if (item.completed) {
        completedTaskId.push(item.id);
      }
    });

    const completedTasks = await Completed_Task.findAll({
      raw: true,
      where: {
        assigned_task_id: completedTaskId,
      },
      attributes: [
        "assigned_task_id",
        "response_json_data",
        "copy_of_survey_json",
      ],
    });

    res.status(200).send({
      success: true,
      message: "Find assigned tasks ",
      messge2: null,
      assignedTasks,
      completedTasks,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Task",
    });
  }
};

exports.findAllCompletedTasks = async (req, res) => {
  try {
    const taskData = await Completed_Task.findAll({
      where: {
        assigned_task_id: 1,
      },
      include: ["assigned_task"],
    });

    res.status(200).send({
      success: true,
      message: "Find completed tasks ",
      messge2: null,
      taskData,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Task",
    });
  }

exports.deleteTask = async (req, res) => {
  const task_id = req.body.task_id

  if (!req.session.user) {
    return res.status(500).send({
      success: false,
      message: 'User is not authenticated to delete',
      messge2: null,
    })
  }

  try {
    const task = await Task.findOne({
      where: {
        id: task_id,
      },
    })
    await task.destroy()

    res.status(200).send({
      success: true,
      message: 'Successfully delete the task',
      messge2: null,
    })
  } catch (err) {
    res.status(500).send({
      message: `Error retrieving User with company name=${company_name}, ${err}`,
    })
  }
}
