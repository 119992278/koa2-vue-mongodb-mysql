/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_APP', {
    VERSION_ID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    APP_KEY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CUSTOMER_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CLIENT_TYPE: {
      type: DataTypes.STRING(32),
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
    UPDATE_URL: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    VERSION_MESSAGE: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    APP_UPDATE_STATE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    APP_CHINESE_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    APP_ENGLISH_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    APP_SUBJECT_COLOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    APP_SIZE_COLOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    APP_ICON: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ABOUT_US_CHINESE: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ABOUT_US_ENGLISH: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    TERM_CHINESE: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    TERM_ENGLISH: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PRODUCT_ID: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'CRM_APP'
  });
};
