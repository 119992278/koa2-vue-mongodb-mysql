/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NB_CMD_RESPONSE', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dev_serial: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    command_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    insert_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    result_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'NB_CMD_RESPONSE'
  });
};
