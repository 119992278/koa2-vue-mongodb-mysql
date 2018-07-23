/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SOS_USER_EMERGENCY_CONTACT_SMS_TEMPLATE', {
    EMERGENCY_CONTACT_SMS_TEMPLATE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EMERGENCY_CONTACT_SMS_TEMPLATE_VALUE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IS_DEFAULT: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'SOS_USER_EMERGENCY_CONTACT_SMS_TEMPLATE'
  });
};
