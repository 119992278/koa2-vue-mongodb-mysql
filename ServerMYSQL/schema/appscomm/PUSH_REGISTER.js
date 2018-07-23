/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PUSH_REGISTER', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    device_id: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true
    },
    customer: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    os_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    register_id: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'PUSH_REGISTER'
  });
};
