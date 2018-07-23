/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mbti_result', {
    MBTI_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RESULT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPDATETIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'mbti_result'
  });
};
