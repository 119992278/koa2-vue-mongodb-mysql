/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NB_REG_RESULT', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    task_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dev_serial: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    reg_result: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    insert_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'NB_REG_RESULT'
  });
};
