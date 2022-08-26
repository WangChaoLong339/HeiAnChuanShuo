"use strict";
cc._RF.push(module, '698f7AOlrlDhp2jie89I4wx', 'Home');
// resources/script/Home/Home.ts

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
var HomeCfg = [
    { name: '黑市', pfb: '', levelLimit: 5, },
    { name: '铁匠铺', pfb: '', levelLimit: 8, },
    { name: '成就', pfb: '', levelLimit: 0, },
    { name: '冒险', pfb: 'Adventure', levelLimit: 0, },
    { name: '副本', pfb: '', levelLimit: 10, },
    { name: '深渊', pfb: '', levelLimit: 30, },
];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.root = null;
        _this.item = null;
        return _this;
    }
    Home.prototype.onLoad = function () {
        this.node.onenter = this.onenter.bind(this);
        this.node.onleave = this.onleave.bind(this);
        this.createHomeItem();
        EventManager.on('player_upgrade', this, this.updateItemLock.bind(this));
    };
    Home.prototype.onDestroy = function () {
        EventManager.off('player_upgrade', this);
    };
    Home.prototype.onenter = function () {
        this.updateItemLock();
    };
    Home.prototype.onleave = function () {
    };
    Home.prototype.createHomeItem = function () {
        this.root.removeAllChildren();
        var viewSize = GetViewSize();
        for (var i = 0; i < HomeCfg.length; i++) {
            var cloneItem = cc.instantiate(this.item);
            cloneItem.PathChild('val', cc.Label).string = "" + HomeCfg[i].name;
            cloneItem.getComponent('MultiFrame').SetFrame(i);
            cloneItem.idx = i;
            cloneItem.parent = this.root;
            cloneItem.x = (i % 3 - 1) * (viewSize.width / 3 - 20);
            cloneItem.y = (1 - Math.floor(i / 3) + 0.5) * this.item.height + (1 - Math.floor(i / 3)) * 40;
        }
    };
    Home.prototype.updateItemLock = function () {
        this.root.EachChild(function (it, idx) {
            it.PathChild('lock').active = HomeCfg[idx].levelLimit > PlayerInfo.level;
        });
    };
    Home.prototype.clickItem = function (e) {
        var idx = e.target.idx;
    };
    __decorate([
        property(cc.Node)
    ], Home.prototype, "root", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "item", void 0);
    Home = __decorate([
        ccclass
    ], Home);
    return Home;
}(cc.Component));
exports.default = Home;

cc._RF.pop();