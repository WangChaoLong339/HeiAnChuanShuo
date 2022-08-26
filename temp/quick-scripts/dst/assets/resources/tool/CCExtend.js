
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/tool/CCExtend.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvdG9vbC9DQ0V4dGVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxJQUFJLEVBQUUsYUFBYztJQUN4RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDdkM7YUFBTTtZQUNILElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3ZDO0tBQ0o7SUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1AsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUFxQixJQUFJLE1BQUcsQ0FBQyxDQUFBO0tBQ2hEO0lBQ0QsSUFBSSxhQUFhLEVBQUU7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUE7S0FDMUM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQTtBQUVELEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLEVBQUU7SUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztRQUM3QixFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2xCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuTm9kZS5wcm90b3R5cGUuUGF0aENoaWxkID0gZnVuY3Rpb24gKHBhdGgsIGNvbXBvbmVudE5hbWU/KSB7XG4gICAgbGV0IG5hbWVzID0gcGF0aC5zcGxpdCgnLycpXG5cbiAgICBsZXQgbm9kZSA9IG51bGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShuYW1lc1tpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmdldENoaWxkQnlOYW1lKG5hbWVzW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm4gY2MuZXJyb3IoYG5vZGUgaXMgbm90IGV4aXN0KCR7cGF0aH0pYClcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2V0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG59XG5cbmNjLk5vZGUucHJvdG90eXBlLkVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGlkeCkgPT4ge1xuICAgICAgICBjYihjaGlsZCwgaWR4KVxuICAgIH0pXG59Il19