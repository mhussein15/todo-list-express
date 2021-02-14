const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const TodoModal = sequelize.define("Todo", {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    deadLineDate: {
      type: DataTypes.DATEONLY,
    },
  });
  SequelizeSlugify.slugifyModel(TodoModal, {
    source: ["name"],
  });
  return TodoModal;
};
