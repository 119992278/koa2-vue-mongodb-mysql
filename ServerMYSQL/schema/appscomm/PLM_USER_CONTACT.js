/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLM_USER_CONTACT', {
    CONTACT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    CONTACT_CONTENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTACT_TYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'PLM_USER_CONTACT'
  });
};
