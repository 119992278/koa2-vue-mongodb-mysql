/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE_CONFIG_CHANGED', {
    CONFIG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DEVICE_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PARAM_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PARAM_VALUE1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PARAM_VALUE2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PARAM_VALUE3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PARAM_VALUE4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PARAM_VALUE5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REFER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE_CONFIG_CHANGED'
  });
};
