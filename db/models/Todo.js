const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const TodoModal = sequelize.define("Todo", {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    priority: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    deadlineDate: {
      type: DataTypes.DATEONLY,
      isDate: true,
    },
  });
  SequelizeSlugify.slugifyModel(TodoModal, {
    source: ["name"],
  });
  return TodoModal;
};
