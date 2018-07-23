/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE', {
    DEVICE_ID: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    DEVICE_VERSION: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    BATTERY_POWER: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PRODUCT_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    IS_ACTIVATE: {
      type: DataTypes.INTEGER(1).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    SIM_NUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACTIVE_LEVEL: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    INSERT_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DEVICE_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IMEI: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FLAG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE'
  });
};
