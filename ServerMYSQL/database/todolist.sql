/*
Navicat MySQL Data Transfer

Source Server         : localhost1
Source Server Version : 50717
Source Host           : localhost:3308
Source Database       : todolist

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-09-05 14:19:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `list`
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'list的id',
  `user_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('38', '1', 'chanjoey1', '0');
INSERT INTO `list` VALUES ('39', '1', 'chanjoey2', '0');
INSERT INTO `list` VALUES ('40', '1', 'chanjoey3', '0');
INSERT INTO `list` VALUES ('41', '1', 'chanjoey4', '0');
INSERT INTO `list` VALUES ('42', '1', 'chanjoey5', '0');
INSERT INTO `list` VALUES ('43', '15', 'chen1', '0');
INSERT INTO `list` VALUES ('44', '15', 'chen2', '0');
INSERT INTO `list` VALUES ('45', '15', 'chen3', '1');
INSERT INTO `list` VALUES ('46', '15', 'chen4', '1');
INSERT INTO `list` VALUES ('47', '16', 'chen2', '0');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '用户的id',
  `user_name` char(50) DEFAULT NULL COMMENT '用户的名字',
  `password` char(128) DEFAULT NULL COMMENT '用户的密码',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'chanjoey', '123456', '2018-07-23 10:41:11');
INSERT INTO `user` VALUES ('2', 'chanjoey2', '123456', '2018-07-23 10:41:11');
INSERT INTO `user` VALUES ('15', 'chen1', '123456', '2018-07-23 15:12:42');
INSERT INTO `user` VALUES ('16', 'chen2', '123456', '2018-07-23 15:12:42');
