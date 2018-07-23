/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_CUSTOMER_ACCOUNT_AUTHORITY', {
    AUTHORITY_ID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CUSTOMER_ACCOUNT_ID: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      unique: true
    },
    AUTHORITY1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    AUTHORITY2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    AUTHORITY3: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'CRM_CUSTOMER_ACCOUNT_AUTHORITY'
  });
};
