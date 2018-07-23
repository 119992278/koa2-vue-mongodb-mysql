/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OPERATION_HISTORY', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CUSTOMER_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CUSTOMER_ACCOUNT_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OPERATION_CONTENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OPERATION_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INSERT_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'OPERATION_HISTORY'
  });
};
