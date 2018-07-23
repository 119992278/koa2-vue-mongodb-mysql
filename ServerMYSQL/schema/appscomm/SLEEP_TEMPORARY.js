/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SLEEP_TEMPORARY', {
    SLEEP_ID: {
      type: DataTypes.INTEGER(19),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OPEN_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ORGID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEVICE_TYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEVICE_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CONTENT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SLEEP_TYPE: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    }
  }, {
    tableName: 'SLEEP_TEMPORARY'
  });
};
