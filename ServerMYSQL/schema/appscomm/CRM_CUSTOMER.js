/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_CUSTOMER', {
    CUSTOMER_ID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    CUSTOMER_CODE: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    WX_CUSTOMER_CODE: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    CUSTOMER_NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CUSTOMER_CONTACT: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CUSTOMER_REMARK: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'CRM_CUSTOMER'
  });
};
