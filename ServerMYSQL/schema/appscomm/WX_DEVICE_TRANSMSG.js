/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WX_DEVICE_TRANSMSG', {
    MSG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CONTENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEVICE_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEVICE_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MSG_TYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    OPEN_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    POST_TIMES: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    REMARK: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RESULT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RESULT_MSG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'WX_DEVICE_TRANSMSG'
  });
};
