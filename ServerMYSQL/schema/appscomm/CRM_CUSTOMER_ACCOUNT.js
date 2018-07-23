/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_CUSTOMER_ACCOUNT', {
    CUSTOMER_ACCOUNT_ID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CUSTOMER_ACCOUNT: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    CUSTOMER_PASSWARD: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    ICON_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CUSTOMER_TOKEN: {
      type: DataTypes.STRING(65),
      allowNull: true
    },
    CUSTOMER_ID: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    AUDIT_STATUS: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CUSTOMER_TYPE: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CONTACT_USER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEX: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CUSTOMER_ADDRESS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CUSTOMER_EAMIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IS_ACTIVITY: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AUTHORITY: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    INSERT_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'CRM_CUSTOMER_ACCOUNT'
  });
};
