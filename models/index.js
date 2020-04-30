/*
 * @Descripttion: 
 * @Author: sunft
 * @Date: 2020-04-21 17:01:46
 * @LastEditTime: 2020-04-30 11:15:45
 */
const roleMenuModel = require('./roleMenu');
const userModel = require('./user');
const menuModel = require('./menu');
const roleModel = require('./role');
const articleModel = require('./article');
const demoModel = require('./demo');
roleModel.hasMany(roleMenuModel,{ foreignKey: 'roleId' });
roleMenuModel.hasOne(menuModel,{ foreignKey: 'id' });
userModel.belongsTo(roleModel,{ foreignKey: 'roleId',
    targetKey: 'id' });

module.exports={
    roleMenuModel,
    userModel,
    menuModel,
    roleModel,
    articleModel,
    demoModel
}