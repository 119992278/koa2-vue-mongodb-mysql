/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_PRODUCT', {
    PRODUCT_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CUSTOMER_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PRODUCT_SERIES: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    PRODUCT_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRODUCT_CODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WX_PRODUCT_CODE: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    SHELVE_FLAG: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    MAIN_IMG: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UPDATE_URL: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    VERSION_MESSAGE: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    CURRENT_VERSION: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    NEW_VERSION: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    WX_PRODUCT_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UPDATE_MESSAGE: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'CRM_PRODUCT'
  });
};
