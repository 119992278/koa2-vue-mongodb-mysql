/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLM_UPGRADE_VERSION', {
    VERSION_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    CUSTOMER_CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FILE_CRC_SIZE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MUST_UPGRADE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UPGRADE_MSG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPGRADE_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPGRADE_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VERSION_NO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EFFECTIVE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    INSERT_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'PLM_UPGRADE_VERSION'
  });
};
