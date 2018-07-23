/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CRM_ACCOUNT_EXISTS', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CUSTOMER_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ACCOUNT_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'CRM_ACCOUNT_EXISTS'
  })
}
