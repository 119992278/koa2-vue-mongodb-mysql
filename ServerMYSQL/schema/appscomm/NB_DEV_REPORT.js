/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NB_DEV_REPORT', {
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
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_message_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    insert_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'NB_DEV_REPORT'
  });
};
