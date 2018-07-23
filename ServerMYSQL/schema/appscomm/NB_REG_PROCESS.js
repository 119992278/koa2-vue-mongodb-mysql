/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NB_REG_PROCESS', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    task_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    process: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    insert_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'NB_REG_PROCESS'
  });
};
