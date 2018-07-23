/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE_BIND', {
    DEVICE_BIND_ID: {
      type: DataTypes.INTEGER(19),
      allowNull: false,
      primaryKey: true
    },
    DEVICE_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IS_BIND: {
      type: DataTypes.INTEGER(1).UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: '1'
    },
    BIND_CLIENT: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    RELEASE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BIND_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IS_DEFAULT: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CUSTOMER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DEVICE_MAC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FLAG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE_BIND'
  });
};
