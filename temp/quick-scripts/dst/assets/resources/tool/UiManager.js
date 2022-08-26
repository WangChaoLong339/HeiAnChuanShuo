
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/tool/UiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1afady4EtBuYi5GMPLivj1', 'UiManager');
// resources/tool/UiManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiManager = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiManager = /** @class */ (function (_super) {
    __extends(UiManager, _super);
    function UiManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiLayer = null;
        _this.propLayer = null;
        return _this;
    }
    UiManager.prototype.onLoad = function () {
        window.UiMgr = this;
        this.uiPrefabCache = {};
        this.propPrefabCache = {};
    };
    UiManager.prototype.show = function (name, args) {
        var _this = this;
        cc.log("show prefab: " + name);
        var pb = this.uiPrefabCache[name];
        if (pb) {
            pb.active = true;
            pb.onenter && pb.onenter(args);
        }
        else {
            cc.resources.load("prefab/" + name, cc.Prefab, function (err, prefab) {
                if (err) {
                    return cc.error(err);
                }
                pb = cc.instantiate(prefab);
                pb.parent = _this.node;
                _this.uiPrefabCache[name] = pb;
                pb.active = true;
                pb.onenter && pb.onenter(args);
            });
        }
    };
    UiManager.prototype.close = function (args) {
        var name = args;
        if (typeof args == 'object') {
            name = args.node.name;
        }
        cc.log("close prefab: " + name);
        var panel = this.uiPrefabCache[name];
        if (panel) {
            panel.onleave && panel.onleave();
            panel.active = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], UiManager.prototype, "uiLayer", void 0);
    __decorate([
        property(cc.Node)
    ], UiManager.prototype, "propLayer", void 0);
    UiManager = __decorate([
        ccclass
    ], UiManager);
    return UiManager;
}(cc.Component));
exports.UiManager = UiManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvdG9vbC9VaU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBa0RDO1FBL0NHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUE0QzlCLENBQUM7SUF4Q0csMEJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCx3QkFBSSxHQUFKLFVBQUssSUFBSSxFQUFFLElBQUs7UUFBaEIsaUJBa0JDO1FBakJHLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWdCLElBQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxFQUFFLEVBQUU7WUFDSixFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQixFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVUsSUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtnQkFDdkQsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUwsVUFBTSxJQUFJO1FBQ04sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN6QjtRQUVELEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQWlCLElBQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxLQUFLLEVBQUU7WUFDUCxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNMLENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBTmpCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FrRHJCO0lBQUQsZ0JBQUM7Q0FsREQsQUFrREMsQ0FsRDhCLEVBQUUsQ0FBQyxTQUFTLEdBa0QxQztBQWxEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVWlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJvcExheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHVpUHJlZmFiQ2FjaGU6IE9iamVjdFxuICAgIHByb3BQcmVmYWJDYWNoZTogT2JqZWN0XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB3aW5kb3cuVWlNZ3IgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudWlQcmVmYWJDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnByb3BQcmVmYWJDYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIHNob3cobmFtZSwgYXJncz8pIHtcbiAgICAgICAgY2MubG9nKGBzaG93IHByZWZhYjogJHtuYW1lfWApO1xuICAgICAgICBsZXQgcGIgPSB0aGlzLnVpUHJlZmFiQ2FjaGVbbmFtZV07XG4gICAgICAgIGlmIChwYikge1xuICAgICAgICAgICAgcGIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBiLm9uZW50ZXIgJiYgcGIub25lbnRlcihhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGBwcmVmYWIvJHtuYW1lfWAsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHBiLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpUHJlZmFiQ2FjaGVbbmFtZV0gPSBwYjtcbiAgICAgICAgICAgICAgICBwYi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBiLm9uZW50ZXIgJiYgcGIub25lbnRlcihhcmdzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZShhcmdzKSB7XG4gICAgICAgIGxldCBuYW1lID0gYXJncztcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBuYW1lID0gYXJncy5ub2RlLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYGNsb3NlIHByZWZhYjogJHtuYW1lfWApO1xuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLnVpUHJlZmFiQ2FjaGVbbmFtZV07XG4gICAgICAgIGlmIChwYW5lbCkge1xuICAgICAgICAgICAgcGFuZWwub25sZWF2ZSAmJiBwYW5lbC5vbmxlYXZlKCk7XG4gICAgICAgICAgICBwYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=