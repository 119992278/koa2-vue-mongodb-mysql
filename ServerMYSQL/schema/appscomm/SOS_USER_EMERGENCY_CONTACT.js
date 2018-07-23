/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SOS_USER_EMERGENCY_CONTACT', {
    SOS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EMERGENCY_CONTACT_PHONE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMERGENCY_CONTACT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'SOS_USER_EMERGENCY_CONTACT'
  });
};
