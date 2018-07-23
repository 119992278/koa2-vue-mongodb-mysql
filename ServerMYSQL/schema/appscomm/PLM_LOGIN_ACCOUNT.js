/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PLM_LOGIN_ACCOUNT', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ACCOUNT_ID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    USER_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    IS_ACTIVITY: {
      type: DataTypes.INTEGER(1).UNSIGNED.ZEROFILL,
      allowNull: true
    },
    ACCOUNT_TYPE: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    ACTIVITY_CODE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    OLD_REGISTER_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DEVICE_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MOBILE_PHONE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FLAG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    APP_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'PLM_LOGIN_ACCOUNT'
  })
}
