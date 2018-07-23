/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_PRODUCT_CLASSIFY', {
    CLASSIFY_ID: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    PARAM_ID: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    }
  }, {
    tableName: 'CRM_PRODUCT_CLASSIFY'
  });
};
