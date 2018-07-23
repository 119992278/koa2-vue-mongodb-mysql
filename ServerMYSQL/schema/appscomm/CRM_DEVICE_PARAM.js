/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE_PARAM', {
    PARAM_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PARAM_CODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PARAM_NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PARAM_ORDER: {
      type: DataTypes.INTEGER(2).UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: '01'
    },
    PARAM_REMARK: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE_PARAM'
  });
};
