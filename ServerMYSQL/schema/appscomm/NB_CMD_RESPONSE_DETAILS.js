/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NB_CMD_RESPONSE_DETAILS', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    response_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    result_code: {
      type: DataTypes.STRING(10),
      allowNull: true
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
    tableName: 'NB_CMD_RESPONSE_DETAILS'
  });
};
