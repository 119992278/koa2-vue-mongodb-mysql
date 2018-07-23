/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_PRODUCT_VERSION', {
    VERSION_ID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    DEVICE_VERSION: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    BUILD_VERSION: {
      type: DataTypes.STRING(32),
      allowNull: true
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
      allowNull: true,
      defaultValue: '0'
    },
    INSERT_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FIRMWARE_TYPE: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    BYFORCE: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    MD5: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'CRM_PRODUCT_VERSION'
  });
};
