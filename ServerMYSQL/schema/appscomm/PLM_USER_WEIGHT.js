/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLM_USER_WEIGHT', {
    WEIGHT_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    USER_INFO_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    USER_WEIGHT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    WEIGHT_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    INSERT_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIME_ZONE: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    tableName: 'PLM_USER_WEIGHT'
  });
};
