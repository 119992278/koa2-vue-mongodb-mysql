/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FEED_BACK_ANSWER', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    OPINION_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ANSWER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PARAM_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    INSTER_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'FEED_BACK_ANSWER'
  });
};
