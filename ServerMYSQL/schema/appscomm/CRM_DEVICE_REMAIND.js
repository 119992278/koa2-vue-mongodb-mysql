/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE_REMAIND', {
    REMIND_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DEVICE_ID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    REMIND_REPEAT: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    REMIND_TIME: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    REMIND_TYPE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    REMIND_TEXT: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    REMIND_DETAIL: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    REMIND_STATUS: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DO_TYPE: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    FLAG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE_REMAIND'
  });
};
