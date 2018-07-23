/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLM_PARAM', {
    PARAM_ID: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true
    },
    PARAM_KEY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PARAM_VALUE1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PARAM_VALUE2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PARAM_VALUE3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PARAM_VALUE4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PARAM_VALUE5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PARAM_ORDER: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PARAM_REMARK: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'PLM_PARAM'
  });
};
