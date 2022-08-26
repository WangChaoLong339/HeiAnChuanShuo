"use strict";
cc._RF.push(module, '0dd54a00YNAiai2XGf/bez3', 'Footbar');
// resources/script/Hall/Footbar.ts

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
var HallCfg = [
    { name: '主页', pfb: 'Home' },
    { name: '角色', pfb: 'Player' },
    { name: '背包', pfb: 'Backpack' },
    { name: '技能', pfb: 'Skill' },
    { name: '其他', pfb: 'Other' },
];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Footbar = /** @class */ (function (_super) {
    __extends(Footbar, _super);
    function Footbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.item = null;
        return _this;
    }
    Footbar.prototype.onLoad = function () {
        this.currPageIdx = 0;
        this.createItem();
        this.updateButtons();
    };
    Footbar.prototype.createItem = function () {
        this.layout.removeAllChildren();
        for (var i = 0; i < HallCfg.length; i++) {
            var cloneItem = cc.instantiate(this.item);
            cloneItem.PathChild('val', cc.Label).string = "" + HallCfg[i].name;
            cloneItem.idx = i;
            cloneItem.parent = this.layout;
        }
    };
    Footbar.prototype.updateButtons = function () {
        var _this = this;
        this.layout.children.forEach(function (it, idx) {
            it.getComponent('MultiFrame').SetFrame(idx == _this.currPageIdx ? 1 : 0);
        });
    };
    Footbar.prototype.clickItem = function (e) {
        if (this.currPageIdx == e.target.idx) {
            return;
        }
        UiMgr.close(HallCfg[this.currPageIdx].pfb);
        this.currPageIdx = e.target.idx;
        this.updateButtons();
        UiMgr.show("" + HallCfg[this.currPageIdx].pfb);
    };
    __decorate([
        property(cc.Node)
    ], Footbar.prototype, "layout", void 0);
    __decorate([
        property(cc.Node)
    ], Footbar.prototype, "item", void 0);
    Footbar = __decorate([
        ccclass
    ], Footbar);
    return Footbar;
}(cc.Component));
exports.default = Footbar;

cc._RF.pop();