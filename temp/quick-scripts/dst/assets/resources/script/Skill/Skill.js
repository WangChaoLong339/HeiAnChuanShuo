
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/script/Skill/Skill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NyaXB0L1NraWxsL1NraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sUUFBUSxHQUFHO0lBQ2IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQzlFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ3pFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUM3RCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUscUNBQXFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUNqRixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUMzRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVB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RUFBRSxDQUFDLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNHO0lBTkosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTZEekI7SUFBRCxZQUFDO0NBN0RELEFBNkRDLENBN0RrQyxFQUFFLENBQUMsU0FBUyxHQTZEOUM7a0JBN0RvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2tpbGxDZmcgPSBbXG4gICAgeyBuYW1lOiAn6YeN5Ye7JywgbGltaXQ6IDEsIGljb246IDAsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDE1MCXkvKTlrrMnIH0sXG4gICAgeyBuYW1lOiAn54Gr54KO5by5JywgbGltaXQ6IDgsIHN0cmluZzogJ+WPkeWwhOS4gOS4queBq+eQg+mAoOaIkDEzMCXkvKTlrrMs5a+55pWM5Lq66YCg5oiQNjAl54On5Lyk5Lyk5a6z5oyB57utMuWbnuWQiCcsIGljb246IDEgfSxcbiAgICB7IG5hbWU6ICfni4LmgJInLCBsaW1pdDogMTYsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDEwMCXkvKTlrrMs6ZmN5L2O5pWM5Lq6MzAl5pS75Ye7LOaMgee7rTPlm57lkIgnLCBpY29uOiAyIH0sXG4gICAgeyBuYW1lOiAn5peL6aOO5papJywgbGltaXQ6IDI0LCBzdHJpbmc6ICflr7nmlYzkurrpgKDmiJAy5qyhNjAl5Lyk5a6z5L2/55uu5qCH55yp5pmVMeWbnuWQiCcsIGljb246IDMgfSxcbiAgICB7IG5hbWU6ICfprZTms5XmiqTnm74nLCBsaW1pdDogMzIsIHN0cmluZzogJ+mYsuW+oeaPkOWNhzMwJSzmjIHnu6005Zue5ZCIJywgaWNvbjogNCB9LFxuICAgIHsgbmFtZTogJ+mbt+aatCcsIGxpbWl0OiAzOCwgc3RyaW5nOiAn5Y+s5ZSk6Zu355S15omT5Ye75pWM5Lq6LOmAoOaIkDE1MCXkvKTlrrMs5L2/5pWM5Lq65Y+X5YiwOTAl55S15Ye75Lyk5a6z5oyB57utMuWbnuWQiCcsIGljb246IDUgfSxcbiAgICB7IG5hbWU6ICfll5zooYAnLCBsaW1pdDogNDIsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDIwMCXkvKTlrrMs5ZC45pS2MjAl5Z+656GA5Lyk5a6z6L2s5YyW5Li66Ieq5bex55qE55Sf5ZG9JywgaWNvbjogNiB9LFxuICAgIHsgbmFtZTogJ+mHjeWHuyjpq5jnuqcpJywgbGltaXQ6IDUyLCBzdHJpbmc6ICflr7nmlYzkurrpgKDmiJAyNDAl5Lyk5a6zJywgaWNvbjogMCB9LFxuICAgIHsgbmFtZTogJ+eBq+eCjuW8uSjpq5jnuqcpJywgbGltaXQ6IDU4LCBzdHJpbmc6ICflj5HlsITkuIDkuKrngavnkIPpgKDmiJAyMDAl5Lyk5a6zLOWvueaVjOS6uumAoOaIkDcwJeeDp+S8pOS8pOWus+aMgee7rTPlm57lkIgnLCBpY29uOiAxIH0sXG4gICAgeyBuYW1lOiAn54uC5oCSKOmrmOe6pyknLCBsaW1pdDogNjQsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDIyMCXkvKTlrrMs6ZmN5L2O5pWM5Lq6MzUl5pS75Ye7LOaMgee7rTPlm57lkIgnLCBpY29uOiAyIH0sXG4gICAgeyBuYW1lOiAn5peL6aOO5papKOmrmOe6pyknLCBsaW1pdDogNzQsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDLmrKExMDAl5Lyk5a6z5L2/55uu5qCH55yp5pmVMeWbnuWQiCcsIGljb246IDMgfSxcbiAgICB7IG5hbWU6ICfprZTms5XmiqTnm74o6auY57qnKScsIGxpbWl0OiA4MCwgc3RyaW5nOiAn6Ziy5b6h5o+Q5Y2HNTAlLOaMgee7rTXlm57lkIgnLCBpY29uOiA0IH0sXG4gICAgeyBuYW1lOiAn6Zu35pq0KOmrmOe6pyknLCBsaW1pdDogMTAwLCBzdHJpbmc6ICflj6zllKTpm7fnlLXmiZPlh7vmlYzkuros6YCg5oiQMjMwJeS8pOWusyzkvb/mlYzkurrlj5fliLAxMTAl55S15Ye75Lyk5a6z5oyB57utMuWbnuWQiCcsIGljb246IDUgfSxcbiAgICB7IG5hbWU6ICfll5zooYAo6auY57qnKScsIGxpbWl0OiAzMDAsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDI0MCXkvKTlrrMs5ZC45pS2MzAl5Z+656GA5Lyk5a6z6L2s5YyW5Li66Ieq5bex55qE55Sf5ZG9JywgaWNvbjogNiB9LFxuICAgIHsgbmFtZTogJ+mHjeWHuyjnu4jnuqcpJywgbGltaXQ6IDUwMCwgc3RyaW5nOiAn5a+55pWM5Lq66YCg5oiQMzAwJeS8pOWusycsIGljb246IDAgfSxcbiAgICB7IG5hbWU6ICfngavngo7lvLko57uI57qnKScsIGxpbWl0OiA3MDAsIHN0cmluZzogJ+WPkeWwhOS4gOS4queBq+eQg+mAoOaIkDI0MCXkvKTlrrMs5a+55pWM5Lq66YCg5oiQOTAl54On5Lyk5Lyk5a6z5oyB57utNOWbnuWQiCcsIGljb246IDEgfSxcbiAgICB7IG5hbWU6ICfni4LmgJIo57uI57qnKScsIGxpbWl0OiA4MDAsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDI2MCXkvKTlrrMs6ZmN5L2O5pWM5Lq6NDAl5pS75Ye7LOaMgee7rTPlm57lkIgnLCBpY29uOiAyIH0sXG4gICAgeyBuYW1lOiAn5peL6aOO5papKOe7iOe6pyknLCBsaW1pdDogMTAwMCwgc3RyaW5nOiAn5a+55pWM5Lq66YCg5oiQMuasoTEyMCXkvKTlrrPkvb/nm67moIfnnKnmmZUx5Zue5ZCIJywgaWNvbjogMyB9LFxuICAgIHsgbmFtZTogJ+mtlOazleaKpOebvijnu4jnuqcpJywgbGltaXQ6IDEyMDAsIHN0cmluZzogJ+mYsuW+oeaPkOWNhzYwJSzmjIHnu6015Zue5ZCIJywgaWNvbjogNCB9LFxuICAgIHsgbmFtZTogJ+mbt+aatCjnu4jnuqcpJywgbGltaXQ6IDE0MDAsIHN0cmluZzogJ+WPrOWUpOmbt+eUteaJk+WHu+aVjOS6uizpgKDmiJAyNjAl5Lyk5a6zLOS9v+aVjOS6uuWPl+WIsDEzMCXnlLXlh7vkvKTlrrPmjIHnu60y5Zue5ZCIJywgaWNvbjogNSB9LFxuXVxuXG5jb25zdCBTa2lsbENvbG9yID0ge1xuICAgIE5vcm1vbDogJyNmZmRkOGMnLFxuICAgIEZvcmJpZDogJyNmZjAwMDAnLFxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGluZm8gPSBbXVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uZW50ZXIgPSB0aGlzLm9uZW50ZXIuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuaW5mbyA9IEdldExvY2FsU3RvcmFnZSgnc2tpbGxfaW5mbycsIFtdKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlU2tpbGxJdGVtKClcbiAgICB9XG5cbiAgICBjcmVhdGVTa2lsbEl0ZW0oKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTa2lsbENmZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGQgPSBTa2lsbENmZ1tpXVxuICAgICAgICAgICAgbGV0IGNsb25lSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcbiAgICAgICAgICAgIGxldCBhY2hpZXZlID0gZC5saW1pdCA8PSBQbGF5ZXJJbmZvLmxldmVsXG4gICAgICAgICAgICBjbG9uZUl0ZW0uUGF0aENoaWxkKCdpY29uJywgJ011bHRpRnJhbWUnKS5TZXRGcmFtZShkLmljb24pXG4gICAgICAgICAgICBjbG9uZUl0ZW0uUGF0aENoaWxkKCdza2lsbG5hbWUnLCBjYy5MYWJlbCkuc3RyaW5nID0gYCR7ZC5uYW1lfWBcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ2xpbWl0JywgY2MuTGFiZWwpLnN0cmluZyA9IGDnrYnnuqcke2QubGltaXR9YFxuICAgICAgICAgICAgY2xvbmVJdGVtLlBhdGhDaGlsZCgnbGltaXQnKS5jb2xvciA9IGFjaGlldmUgPyBjYy5jb2xvcigyNTUsIDIyMSwgMTQwKSA6IGNjLmNvbG9yKDI1NSwgMCwgMClcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ2RlcycsIGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtkLnN0cmluZ31gXG4gICAgICAgICAgICBjbG9uZUl0ZW0uUGF0aENoaWxkKCdtYXNrJykuYWN0aXZlID0gIWFjaGlldmVcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ3NlbGVjdCcpLmFjdGl2ZSA9IGFjaGlldmVcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ3NlbGVjdCcsICdNdWx0aUZyYW1lJykuU2V0RnJhbWUodGhpcy5pbmZvLmluZGV4T2YoaSkgPT0gLTEgPyAwIDogMSlcbiAgICAgICAgICAgIGNsb25lSXRlbS5pZHggPSBpXG4gICAgICAgICAgICBjbG9uZUl0ZW0ucGFyZW50ID0gdGhpcy5jb250ZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmVudGVyKCkge1xuICAgIH1cblxuICAgIHVwZGF0ZVNraWxsSXRlbSgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LkVhY2hDaGlsZCgoaXQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaXQuUGF0aENoaWxkKCdzZWxlY3QnLCAnTXVsdGlGcmFtZScpLlNldEZyYW1lKHRoaXMuaW5mby5pbmRleE9mKGlkeCkgPT0gLTEgPyAwIDogMSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbGlja0l0ZW0oZSkge1xuICAgICAgICBsZXQgZXhpc3RJZHggPSB0aGlzLmluZm8uaW5kZXhPZihlLnRhcmdldC5wYXJlbnQuaWR4KVxuICAgICAgICBpZiAoZXhpc3RJZHggIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5mby5zcGxpY2UoZXhpc3RJZHgsIDEpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNraWxsSXRlbSgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbmZvLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZm8ucHVzaChlLnRhcmdldC5wYXJlbnQuaWR4KVxuICAgICAgICB0aGlzLmluZm8uc29ydCgoYSwgYikgPT4geyByZXR1cm4gYSAtIGIgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmZvKVxuICAgICAgICB0aGlzLnVwZGF0ZVNraWxsSXRlbSgpXG4gICAgfVxufVxuIl19