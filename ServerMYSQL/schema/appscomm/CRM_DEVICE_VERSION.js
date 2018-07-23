/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE_VERSION', {
    DEVICE_ID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    CURRENT_VERSION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FIRMWARE_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IS_NEED_UPDATE: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    NEW_VERSION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PREVIOUS_VERSION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UPDATE_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BATTERY_POWER: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE_VERSION'
  });
};
