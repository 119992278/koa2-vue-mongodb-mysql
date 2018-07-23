/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PUSH_MESSAGE', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sender: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    receiver: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    register_id: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    os_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'PUSH_MESSAGE'
  });
};
