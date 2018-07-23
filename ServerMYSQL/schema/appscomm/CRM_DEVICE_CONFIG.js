/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE_CONFIG', {
    CONFIG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DEVICE_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PARAM_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    PARAM_VALUE1: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    PARAM_VALUE2: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    PARAM_VALUE3: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    PARAM_VALUE4: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    PARAM_VALUE5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE_CONFIG'
  });
};
