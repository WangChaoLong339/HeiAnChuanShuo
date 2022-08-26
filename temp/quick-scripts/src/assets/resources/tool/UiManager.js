"use strict";
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