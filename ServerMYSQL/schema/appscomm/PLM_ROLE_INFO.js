/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLM_ROLE_INFO', {
    ROLE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ROLE_NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    APP_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CREATE_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'PLM_ROLE_INFO'
  });
};
