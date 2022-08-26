"use strict";
cc._RF.push(module, 'b7c4fqhxNdGdKC0ZGc/YI7/', 'Backpack');
// resources/script/Backpack/Backpack.ts

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
var TabCfg = [
    '装备',
    '道具',
    '全部',
    '排序',
    '分解',
];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Backpack = /** @class */ (function (_super) {
    __extends(Backpack, _super);
    function Backpack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabContent = null;
        _this.tabItem = null;
        return _this;
    }
    Backpack.prototype.onLoad = function () {
        this.node.onenter = this.onenter.bind(this);
        this.currentTabIdx = 0;
        this.createTabs();
        this.updateTabItem();
    };
    Backpack.prototype.createTabs = function () {
        this.tabContent.removeAllChildren();
        for (var i = 0; i < TabCfg.length; i++) {
            var cloneTabItem = cc.instantiate(this.tabItem);
            cloneTabItem.PathChild('val', cc.Label).string = "" + TabCfg[i];
            cloneTabItem.idx = i;
            cloneTabItem.parent = this.tabContent;
        }
    };
    Backpack.prototype.onenter = function () {
    };
    Backpack.prototype.updateTabItem = function () {
        var _this = this;
        this.tabContent.EachChild(function (it, idx) { it.getComponent('MultiFrame').SetFrame(_this.currentTabIdx == idx ? 0 : 1); });
    };
    Backpack.prototype.updatePage = function () {
    };
    Backpack.prototype.btnTabItem = function (e) {
        this.currentTabIdx = e.target.idx;
        this.updateTabItem();
    };
    __decorate([
        property(cc.Node)
    ], Backpack.prototype, "tabContent", void 0);
    __decorate([
        property(cc.Node)
    ], Backpack.prototype, "tabItem", void 0);
    Backpack = __decorate([
        ccclass
    ], Backpack);
    return Backpack;
}(cc.Component));
exports.default = Backpack;

cc._RF.pop();