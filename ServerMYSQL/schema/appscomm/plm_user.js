/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plm_user', {
    USER_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CUSTOMER_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ACCOUNT_PASSWORD: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    LOGIN_TOKEN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ACTIVE_DEGREE: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    USER_INFO_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SYN_GYM: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FLAG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'plm_user'
  });
};
