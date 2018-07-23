/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_PRODUCT_ATRR', {
    ATRR_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FEATURE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    REMARK: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    SENTENCE_DESCRIPTION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'CRM_PRODUCT_ATRR'
  });
};
