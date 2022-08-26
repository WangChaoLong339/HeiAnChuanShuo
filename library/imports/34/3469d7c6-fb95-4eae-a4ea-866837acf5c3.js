"use strict";
cc._RF.push(module, '3469dfG+5VOrqTqhmg3rPXD', 'Topbar');
// resources/script/Hall/Topbar.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Topbar = /** @class */ (function (_super) {
    __extends(Topbar, _super);
    function Topbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.info = null;
        return _this;
    }
    Topbar.prototype.onLoad = function () {
        var _this = this;
        // 升级监听
        EventManager.on('player_upgrade', this, function () { _this.info.PathChild('level/val', cc.Label).string = "" + PlayerInfo.level; });
        // 金币监听
        EventManager.on('player_gold', this, function () { _this.info.PathChild('gold', cc.Label).string = "" + PlayerInfo.gold; });
        // 魔石监听
        EventManager.on('player_diam', this, function () { _this.info.PathChild('diam', cc.Label).string = "" + PlayerInfo.diam; });
        // 经验监听
        EventManager.on('player_exp', this, function () {
            _this.info.PathChild('exp/mask').width = PlayerInfo.exp / _this.getNextLevelExp(PlayerInfo.level) * _this.info.PathChild('exp').width;
            _this.info.PathChild('exp/val', cc.Label).string = PlayerInfo.exp + "/" + _this.getNextLevelExp(PlayerInfo.level);
        });
    };
    Topbar.prototype.onDisable = function () {
        EventManager.off('player_upgrade', this);
        EventManager.off('player_gold', this);
        EventManager.off('player_diam', this);
        EventManager.off('player_exp', this);
    };
    Topbar.prototype.onEnable = function () {
        // 称号
        this.info.PathChild('title/val', cc.Label).string = "" + this.getTitle(PlayerInfo.title);
        // 等级
        this.info.PathChild('level/val', cc.Label).string = "" + PlayerInfo.level;
        // 昵称
        this.info.PathChild('nickname', cc.Label).string = "" + PlayerInfo.nickname;
        // 金币
        this.info.PathChild('gold', cc.Label).string = "" + PlayerInfo.gold;
        // 魔石
        this.info.PathChild('diam', cc.Label).string = "" + PlayerInfo.diam;
        // ID
        this.info.PathChild('id', cc.Label).string = "ID:" + PlayerInfo.id;
        // 经验
        this.info.PathChild('exp/mask').width = PlayerInfo.exp / this.getNextLevelExp(PlayerInfo.level) * this.info.PathChild('exp').width;
        this.info.PathChild('exp/val', cc.Label).string = PlayerInfo.exp + "/" + this.getNextLevelExp(PlayerInfo.level);
    };
    Topbar.prototype.getNextLevelExp = function (lv) {
        return 1000;
    };
    Topbar.prototype.getTitle = function (val) {
        return '无';
    };
    __decorate([
        property(cc.Node)
    ], Topbar.prototype, "info", void 0);
    Topbar = __decorate([
        ccclass
    ], Topbar);
    return Topbar;
}(cc.Component));
exports.default = Topbar;

cc._RF.pop();