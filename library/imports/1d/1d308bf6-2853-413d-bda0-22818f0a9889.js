"use strict";
cc._RF.push(module, '1d308v2KFNBPb2gIoGPCpiJ', 'CCExtend');
// resources/tool/CCExtend.ts

cc.Node.prototype.PathChild = function (path, componentName) {
    var names = path.split('/');
    var node = null;
    for (var i = 0; i < names.length; i++) {
        if (node) {
            node = node.getChildByName(names[i]);
        }
        else {
            node = this.getChildByName(names[i]);
        }
    }
    if (!node) {
        return cc.error("node is not exist(" + path + ")");
    }
    if (componentName) {
        return node.getComponent(componentName);
    }
    return node;
};
cc.Node.prototype.EachChild = function (cb) {
    this.children.forEach(function (child, idx) {
        cb(child, idx);
    });
};

cc._RF.pop();