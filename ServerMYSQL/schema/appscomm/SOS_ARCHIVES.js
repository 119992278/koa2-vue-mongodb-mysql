/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SOS_ARCHIVES', {
    SOS_ARCHIVES_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SOS_ARCHIVES_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SOS_ARCHIVES_PHONE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'SOS_ARCHIVES'
  });
};
