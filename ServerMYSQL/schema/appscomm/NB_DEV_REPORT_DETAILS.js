/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NB_DEV_REPORT_DETAILS', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    report_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    service_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    service_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    service_value: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    tableName: 'NB_DEV_REPORT_DETAILS'
  });
};
