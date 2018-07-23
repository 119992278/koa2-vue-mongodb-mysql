/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_DEVICE_CONTACTS', {
    CONTACTS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    CONTACTS_MEMBER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CONTACTS_NICKNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTACTS_PHONE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTACTS_TYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DEVICE_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'CRM_DEVICE_CONTACTS'
  });
};
