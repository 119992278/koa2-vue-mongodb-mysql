/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLM_USER_ROLE', {
    USER_ROLE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ROLE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ACCOUNT_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    APP_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'PLM_USER_ROLE'
  });
};
