/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_APP_VERSION', {
    VERSION_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    APP_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    APP_VERSION: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    UPDATE_URL: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    UPDATE_MESSAGE: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    FILE_CRC_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    INVALID_STATUS: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    CLIENT_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    INSERT_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    JUMP_KEY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONNECT_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'CRM_APP_VERSION'
  });
};
