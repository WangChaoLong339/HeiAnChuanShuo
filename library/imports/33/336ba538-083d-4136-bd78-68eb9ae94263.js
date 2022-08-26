"use strict";
cc._RF.push(module, '336baU4CD1BNr14aOua6UJj', 'Skill');
// resources/script/Skill/Skill.ts

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
var SkillCfg = [
    { name: '重击', limit: 1, icon: 0, string: '对敌人造成150%伤害' },
    { name: '火炎弹', limit: 8, string: '发射一个火球造成130%伤害,对敌人造成60%烧伤伤害持续2回合', icon: 1 },
    { name: '狂怒', limit: 16, string: '对敌人造成100%伤害,降低敌人30%攻击,持续3回合', icon: 2 },
    { name: '旋风斩', limit: 24, string: '对敌人造成2次60%伤害使目标眩晕1回合', icon: 3 },
    { name: '魔法护盾', limit: 32, string: '防御提升30%,持续4回合', icon: 4 },
    { name: '雷暴', limit: 38, string: '召唤雷电打击敌人,造成150%伤害,使敌人受到90%电击伤害持续2回合', icon: 5 },
    { name: '嗜血', limit: 42, string: '对敌人造成200%伤害,吸收20%基础伤害转化为自己的生命', icon: 6 },
    { name: '重击(高级)', limit: 52, string: '对敌人造成240%伤害', icon: 0 },
    { name: '火炎弹(高级)', limit: 58, string: '发射一个火球造成200%伤害,对敌人造成70%烧伤伤害持续3回合', icon: 1 },
    { name: '狂怒(高级)', limit: 64, string: '对敌人造成220%伤害,降低敌人35%攻击,持续3回合', icon: 2 },
    { name: '旋风斩(高级)', limit: 74, string: '对敌人造成2次100%伤害使目标眩晕1回合', icon: 3 },
    { name: '魔法护盾(高级)', limit: 80, string: '防御提升50%,持续5回合', icon: 4 },
    { name: '雷暴(高级)', limit: 100, string: '召唤雷电打击敌人,造成230%伤害,使敌人受到110%电击伤害持续2回合', icon: 5 },
    { name: '嗜血(高级)', limit: 300, string: '对敌人造成240%伤害,吸收30%基础伤害转化为自己的生命', icon: 6 },
    { name: '重击(终级)', limit: 500, string: '对敌人造成300%伤害', icon: 0 },
    { name: '火炎弹(终级)', limit: 700, string: '发射一个火球造成240%伤害,对敌人造成90%烧伤伤害持续4回合', icon: 1 },
    { name: '狂怒(终级)', limit: 800, string: '对敌人造成260%伤害,降低敌人40%攻击,持续3回合', icon: 2 },
    { name: '旋风斩(终级)', limit: 1000, string: '对敌人造成2次120%伤害使目标眩晕1回合', icon: 3 },
    { name: '魔法护盾(终级)', limit: 1200, string: '防御提升60%,持续5回合', icon: 4 },
    { name: '雷暴(终级)', limit: 1400, string: '召唤雷电打击敌人,造成260%伤害,使敌人受到130%电击伤害持续2回合', icon: 5 },
];
var SkillColor = {
    Normol: '#ffdd8c',
    Forbid: '#ff0000',
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Skill = /** @class */ (function (_super) {
    __extends(Skill, _super);
    function Skill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.item = null;
        _this.info = [];
        return _this;
    }
    Skill.prototype.onLoad = function () {
        this.node.onenter = this.onenter.bind(this);
        this.info = GetLocalStorage('skill_info', []);
        this.createSkillItem();
    };
    Skill.prototype.createSkillItem = function () {
        this.content.removeAllChildren();
        for (var i = 0; i < SkillCfg.length; i++) {
            var d = SkillCfg[i];
            var cloneItem = cc.instantiate(this.item);
            var achieve = d.limit <= PlayerInfo.level;
            cloneItem.PathChild('icon', 'MultiFrame').SetFrame(d.icon);
            cloneItem.PathChild('skillname', cc.Label).string = "" + d.name;
            cloneItem.PathChild('limit', cc.Label).string = "\u7B49\u7EA7" + d.limit;
            cloneItem.PathChild('limit').color = achieve ? cc.color(255, 221, 140) : cc.color(255, 0, 0);
            cloneItem.PathChild('des', cc.Label).string = "" + d.string;
            cloneItem.PathChild('mask').active = !achieve;
            cloneItem.PathChild('select').active = achieve;
            cloneItem.PathChild('select', 'MultiFrame').SetFrame(this.info.indexOf(i) == -1 ? 0 : 1);
            cloneItem.idx = i;
            cloneItem.parent = this.content;
        }
    };
    Skill.prototype.onenter = function () {
    };
    Skill.prototype.updateSkillItem = function () {
        var _this = this;
        this.content.EachChild(function (it, idx) {
            it.PathChild('select', 'MultiFrame').SetFrame(_this.info.indexOf(idx) == -1 ? 0 : 1);
        });
    };
    Skill.prototype.clickItem = function (e) {
        var existIdx = this.info.indexOf(e.target.parent.idx);
        if (existIdx != -1) {
            this.info.splice(existIdx, 1);
            this.updateSkillItem();
            return;
        }
        if (this.info.length == 3) {
            return;
        }
        this.info.push(e.target.parent.idx);
        this.info.sort(function (a, b) { return a - b; });
        console.log(this.info);
        this.updateSkillItem();
    };
    __decorate([
        property(cc.Node)
    ], Skill.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], Skill.prototype, "item", void 0);
    Skill = __decorate([
        ccclass
    ], Skill);
    return Skill;
}(cc.Component));
exports.default = Skill;

cc._RF.pop();