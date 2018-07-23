/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_PRODUCT_NAME', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CUSTOMER_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PRODUCT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SHELVE_FLAG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    INSERT_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'CRM_PRODUCT_NAME'
  });
};
