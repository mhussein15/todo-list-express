const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const TodoModal = sequelize.define("Todo", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deadLineDate: {
      type: DataTypes.DATE,
    },
    slug: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(TodoModal, {
    source: ["name"],
  });
  return TodoModal;
};
