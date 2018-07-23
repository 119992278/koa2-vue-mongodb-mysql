/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FEED_BACK', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CUSTOMER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    OPINION: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    FEED_CODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ANSWER_TYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ANSWER_STAUTS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    INSTER_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LOG_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ICON_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'FEED_BACK'
  });
};
