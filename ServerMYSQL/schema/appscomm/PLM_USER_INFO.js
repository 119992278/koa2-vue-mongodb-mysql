/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLM_USER_INFO', {
    USER_INFO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    AREA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BIRTHDAY: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COUNTRY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HEIGHT: {
      type: "DOUBLE",
      allowNull: true
    },
    HEIGHT_UNIT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ICON_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IS_MANAGE: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    NICK_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROVINCE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REF_USER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SEX: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    USER_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WEIGHT: {
      type: "DOUBLE",
      allowNull: true
    },
    WEIGHT_UNIT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    BACKGROUND_WALL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADDRESS_IP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    THEME_COLOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MOTTO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FACE_RECOGNITION_STATUS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FIRST_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LAST_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'PLM_USER_INFO'
  });
};
