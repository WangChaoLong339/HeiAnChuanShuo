
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/script/Player/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NyaXB0L1BsYXllci9QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxZQUFZLEdBQUc7SUFDakIsRUFBRSxFQUFFLEVBQUUsSUFBSSxHQUFHO0lBQ2IsRUFBRSxNQUFNLEVBQUUsSUFBSSxHQUFHO0lBQ2pCLEVBQUUsT0FBTyxFQUFFLElBQUksR0FBRztJQUNsQixFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUc7SUFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEdBQUc7SUFDaEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHO0lBQ2YsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHO0lBQ3JCLEVBQUUsT0FBTyxFQUFFLE1BQU0sR0FBRztJQUNwQixFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUc7SUFDbkIsRUFBRSxZQUFZLEVBQUUsTUFBTSxHQUFHO0lBQ3pCLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRztJQUNyQixFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUc7Q0FDdkIsQ0FBQTtBQUVELElBQU0sUUFBUSxHQUFHO0lBQ2IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ2hCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUNsQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDbEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQ2YsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQ2YsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ2QsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ2hCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUNqQixDQUFBO0FBRUssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxx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LEVBQUUsRUFBRSxHQUFHO2dCQUNuQixFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBSyxDQUFBO1lBQzdFLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsNEJBQVcsR0FBWDtJQUNBLENBQUM7SUE5REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNFO0lBTkgsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtFMUI7SUFBRCxhQUFDO0NBbEVELEFBa0VDLENBbEVtQyxFQUFFLENBQUMsU0FBUyxHQWtFL0M7a0JBbEVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXR0cmlidXRlQ2ZnID0gW1xuICAgIHsgaHA6ICfnlJ/lkb0nLCB9LFxuICAgIHsgYXR0YWNrOiAn5pS75Ye7JywgfSxcbiAgICB7IGRlZmVuc2U6ICfpmLLlvqEnLCB9LFxuICAgIHsgaGl0OiAn5ZG95LitJywgfSxcbiAgICB7IGRvZGdlOiAn6Zeq6YG/JywgfSxcbiAgICB7IGNyaXQ6ICfmmrTlh7snLCB9LFxuICAgIHsgY3JpdEh1cnQ6ICfmmrTlh7vkvKTlrrMnLCB9LFxuICAgIHsgaG9sZG91dDogJ+i0n+mdouaKl+aApycsIH0sXG4gICAgeyBocEJhY2s6ICfnlJ/lkb3mgaLlpI0nLCB9LFxuICAgIHsgbWF0ZXJpYWxEcm9wOiAn54mp5ZOB5o6J6JC9JywgfSxcbiAgICB7IGdvbGREcm9wOiAn6YeR5biB5o6J6JC9JywgfSxcbiAgICB7IGV4cFBsdXM6ICfnu4/pqozliqDlsYInLCB9LFxuXVxuXG5jb25zdCBFcXVpcENmZyA9IFtcbiAgICB7IGhlbG1ldDogJ+WktOeblCcgfSxcbiAgICB7IG5lY2tsYWNlOiAn6aG56ZO+JyB9LFxuICAgIHsgY2xvdGhpbmc6ICfooaPmnI0nIH0sXG4gICAgeyBnbG92ZTogJ+aJi+WllycgfSxcbiAgICB7IHBhbnRzOiAn6KOk5a2QJyB9LFxuICAgIHsgcmluZzogJ+aIkuWtkCcgfSxcbiAgICB7IHdlYXBvbjogJ+atpuWZqCcgfSxcbiAgICB7IHNob2U6ICfpnovlrZAnIH0sXG5dXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW06IGNjLk5vZGUgPSBudWxsXG5cbiAgICBpbmZvID0ge1xuICAgICAgICAvKiDnlJ/lkb0gKi9ocDogMTAwLFxuICAgICAgICAvKiDmlLvlh7sgKi9hdHRhY2s6IDIwLFxuICAgICAgICAvKiDpmLLlvqEgKi9kZWZlbnNlOiA4LFxuICAgICAgICAvKiDlkb3kuK0gKi9oaXQ6IDM1LFxuICAgICAgICAvKiDpl6rpgb8gKi9kb2RnZTogMyxcbiAgICAgICAgLyog5pq05Ye7ICovY3JpdDogNTYsXG4gICAgICAgIC8qIOaatOWHu+S8pOWusyAqL2NyaXRIdXJ0OiA4OCxcbiAgICAgICAgLyog6LSf6Z2i5oqX5oCnICovaG9sZG91dDogNzAsXG4gICAgICAgIC8qIOeUn+WRveaBouWkjSAqL2hwQmFjazogMjAsXG4gICAgICAgIC8qIOeJqeWTgeaOieiQvSAqL21hdGVyaWFsRHJvcDogMTUwLFxuICAgICAgICAvKiDnianlk4HmjonokL0gKi9nb2xkRHJvcDogMTUwLFxuICAgICAgICAvKiDnu4/pqozliqDlsYIgKi9leHBQbHVzOiAyMzAsXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uZW50ZXIgPSB0aGlzLm9uZW50ZXIuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQXR0cmlidXRlKClcbiAgICB9XG5cbiAgICBjcmVhdGVBdHRyaWJ1dGUoKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXR0cmlidXRlQ2ZnLmxlbmd0aCAvIDI7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNsb25lSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcbiAgICAgICAgICAgIGNsb25lSXRlbS5wYXJlbnQgPSB0aGlzLmNvbnRlbnRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uZW50ZXIoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQXR0cmlidXRlKClcbiAgICAgICAgdGhpcy51cGRhdGVFcXVpcCgpXG4gICAgfVxuXG4gICAgZ2V0RGF0YUJ5SWR4KGlkeCkge1xuICAgICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgaW4gQXR0cmlidXRlQ2ZnW2lkeF0pIHtcbiAgICAgICAgICAgIGxldCBkID0geyB0aXRsZTogQXR0cmlidXRlQ2ZnW2lkeF1baV0sIHZhbDogdGhpcy5pbmZvW2ldIH1cbiAgICAgICAgICAgIGRhdGEucHVzaChkKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgaW4gQXR0cmlidXRlQ2ZnW2lkeCArIEF0dHJpYnV0ZUNmZy5sZW5ndGggLyAyXSkge1xuICAgICAgICAgICAgbGV0IGQgPSB7IHRpdGxlOiBBdHRyaWJ1dGVDZmdbaWR4ICsgQXR0cmlidXRlQ2ZnLmxlbmd0aCAvIDJdW2ldLCB2YWw6IHRoaXMuaW5mb1tpXSB9XG4gICAgICAgICAgICBpZiAoaWR4ID4gMikgeyBkLnZhbCArPSAnJScgfVxuICAgICAgICAgICAgZGF0YS5wdXNoKGQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGUoKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5FYWNoQ2hpbGQoKGl0ZW06IGNjLk5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YUJ5SWR4KGluZGV4KVxuICAgICAgICAgICAgaXRlbS5FYWNoQ2hpbGQoKGl0LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke2RhdGFbaWR4XS50aXRsZX06ICR7ZGF0YVtpZHhdLnZhbH1gXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZUVxdWlwKCkge1xuICAgIH1cbn1cbiJdfQ==