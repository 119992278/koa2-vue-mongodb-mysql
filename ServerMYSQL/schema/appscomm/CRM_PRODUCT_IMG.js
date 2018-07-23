/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_PRODUCT_IMG', {
    IMG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IMG_URL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IMG_REMARK: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IMG_ORDER: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HREF: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'CRM_PRODUCT_IMG'
  });
};
