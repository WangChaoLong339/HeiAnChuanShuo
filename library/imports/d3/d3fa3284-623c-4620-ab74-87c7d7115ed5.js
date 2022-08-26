"use strict";
cc._RF.push(module, 'd3fa3KEYjxGIKt0h8fXEV7V', 'Player');
// resources/script/Player/Player.ts

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
var AttributeCfg = [
    { hp: '生命', },
    { attack: '攻击', },
    { defense: '防御', },
    { hit: '命中', },
    { dodge: '闪避', },
    { crit: '暴击', },
    { critHurt: '暴击伤害', },
    { holdout: '负面抗性', },
    { hpBack: '生命恢复', },
    { materialDrop: '物品掉落', },
    { goldDrop: '金币掉落', },
    { expPlus: '经验加层', },
];
var EquipCfg = [
    { helmet: '头盔' },
    { necklace: '项链' },
    { clothing: '衣服' },
    { glove: '手套' },
    { pants: '裤子' },
    { ring: '戒子' },
    { weapon: '武器' },
    { shoe: '鞋子' },
];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.item = null;
        _this.info = {
            /* 生命 */ hp: 100,
            /* 攻击 */ attack: 20,
            /* 防御 */ defense: 8,
            /* 命中 */ hit: 35,
            /* 闪避 */ dodge: 3,
            /* 暴击 */ crit: 56,
            /* 暴击伤害 */ critHurt: 88,
            /* 负面抗性 */ holdout: 70,
            /* 生命恢复 */ hpBack: 20,
            /* 物品掉落 */ materialDrop: 150,
            /* 物品掉落 */ goldDrop: 150,
            /* 经验加层 */ expPlus: 230,
        };
        return _this;
    }
    Player.prototype.onLoad = function () {
        this.node.onenter = this.onenter.bind(this);
        this.createAttribute();
    };
    Player.prototype.createAttribute = function () {
        this.content.removeAllChildren();
        for (var i = 0; i < AttributeCfg.length / 2; i++) {
            var cloneItem = cc.instantiate(this.item);
            cloneItem.parent = this.content;
        }
    };
    Player.prototype.onenter = function () {
        this.updateAttribute();
        this.updateEquip();
    };
    Player.prototype.getDataByIdx = function (idx) {
        var data = [];
        for (var i in AttributeCfg[idx]) {
            var d = { title: AttributeCfg[idx][i], val: this.info[i] };
            data.push(d);
        }
        for (var i in AttributeCfg[idx + AttributeCfg.length / 2]) {
            var d = { title: AttributeCfg[idx + AttributeCfg.length / 2][i], val: this.info[i] };
            if (idx > 2) {
                d.val += '%';
            }
            data.push(d);
        }
        return data;
    };
    Player.prototype.updateAttribute = function () {
        var _this = this;
        this.content.EachChild(function (item, index) {
            var data = _this.getDataByIdx(index);
            item.EachChild(function (it, idx) {
                it.getComponent(cc.Label).string = data[idx].title + ": " + data[idx].val;
            });
        });
    };
    Player.prototype.updateEquip = function () {
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "item", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();