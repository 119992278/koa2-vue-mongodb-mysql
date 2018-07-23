/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE_PHONE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    CUSTOMER_CODE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ACCOUNT_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PHONE_BRAND: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PHONE_SYS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PHONE_ROM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    APP_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    INSTALL_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SYNCHRO_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATA_REPORT_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INSTER_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE_PHONE'
  });
};
