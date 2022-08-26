
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/script/Hall/Topbar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NyaXB0L0hhbGwvVG9wYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBb0RDO1FBakRHLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBaUR6QixDQUFDO0lBOUNhLHVCQUFNLEdBQWhCO1FBQUEsaUJBWUM7UUFYRyxPQUFPO1FBQ1AsWUFBWSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsY0FBUSxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFHLFVBQVUsQ0FBQyxLQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM3SCxPQUFPO1FBQ1AsWUFBWSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLGNBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBRyxVQUFVLENBQUMsSUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEgsT0FBTztRQUNQLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUcsVUFBVSxDQUFDLElBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BILE9BQU87UUFDUCxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUU7WUFD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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0c7SUFISixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBb0QxQjtJQUFELGFBQUM7Q0FwREQsQUFvREMsQ0FwRG1DLEVBQUUsQ0FBQyxTQUFTLEdBb0QvQztrQkFwRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wYmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGluZm86IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcGxheWVyOiBhbnlcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICAvLyDljYfnuqfnm5HlkKxcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uKCdwbGF5ZXJfdXBncmFkZScsIHRoaXMsICgpID0+IHsgdGhpcy5pbmZvLlBhdGhDaGlsZCgnbGV2ZWwvdmFsJywgY2MuTGFiZWwpLnN0cmluZyA9IGAke1BsYXllckluZm8ubGV2ZWx9YDsgfSlcbiAgICAgICAgLy8g6YeR5biB55uR5ZCsXG4gICAgICAgIEV2ZW50TWFuYWdlci5vbigncGxheWVyX2dvbGQnLCB0aGlzLCAoKSA9PiB7IHRoaXMuaW5mby5QYXRoQ2hpbGQoJ2dvbGQnLCBjYy5MYWJlbCkuc3RyaW5nID0gYCR7UGxheWVySW5mby5nb2xkfWA7IH0pXG4gICAgICAgIC8vIOmtlOefs+ebkeWQrFxuICAgICAgICBFdmVudE1hbmFnZXIub24oJ3BsYXllcl9kaWFtJywgdGhpcywgKCkgPT4geyB0aGlzLmluZm8uUGF0aENoaWxkKCdkaWFtJywgY2MuTGFiZWwpLnN0cmluZyA9IGAke1BsYXllckluZm8uZGlhbX1gOyB9KVxuICAgICAgICAvLyDnu4/pqoznm5HlkKxcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uKCdwbGF5ZXJfZXhwJywgdGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbmZvLlBhdGhDaGlsZCgnZXhwL21hc2snKS53aWR0aCA9IFBsYXllckluZm8uZXhwIC8gdGhpcy5nZXROZXh0TGV2ZWxFeHAoUGxheWVySW5mby5sZXZlbCkgKiB0aGlzLmluZm8uUGF0aENoaWxkKCdleHAnKS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaW5mby5QYXRoQ2hpbGQoJ2V4cC92YWwnLCBjYy5MYWJlbCkuc3RyaW5nID0gYCR7UGxheWVySW5mby5leHB9LyR7dGhpcy5nZXROZXh0TGV2ZWxFeHAoUGxheWVySW5mby5sZXZlbCl9YDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBFdmVudE1hbmFnZXIub2ZmKCdwbGF5ZXJfdXBncmFkZScsIHRoaXMpXG4gICAgICAgIEV2ZW50TWFuYWdlci5vZmYoJ3BsYXllcl9nb2xkJywgdGhpcylcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9mZigncGxheWVyX2RpYW0nLCB0aGlzKVxuICAgICAgICBFdmVudE1hbmFnZXIub2ZmKCdwbGF5ZXJfZXhwJywgdGhpcylcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIC8vIOensOWPt1xuICAgICAgICB0aGlzLmluZm8uUGF0aENoaWxkKCd0aXRsZS92YWwnLCBjYy5MYWJlbCkuc3RyaW5nID0gYCR7dGhpcy5nZXRUaXRsZShQbGF5ZXJJbmZvLnRpdGxlKX1gO1xuICAgICAgICAvLyDnrYnnuqdcbiAgICAgICAgdGhpcy5pbmZvLlBhdGhDaGlsZCgnbGV2ZWwvdmFsJywgY2MuTGFiZWwpLnN0cmluZyA9IGAke1BsYXllckluZm8ubGV2ZWx9YDtcbiAgICAgICAgLy8g5pi156ewXG4gICAgICAgIHRoaXMuaW5mby5QYXRoQ2hpbGQoJ25pY2tuYW1lJywgY2MuTGFiZWwpLnN0cmluZyA9IGAke1BsYXllckluZm8ubmlja25hbWV9YDtcbiAgICAgICAgLy8g6YeR5biBXG4gICAgICAgIHRoaXMuaW5mby5QYXRoQ2hpbGQoJ2dvbGQnLCBjYy5MYWJlbCkuc3RyaW5nID0gYCR7UGxheWVySW5mby5nb2xkfWA7XG4gICAgICAgIC8vIOmtlOefs1xuICAgICAgICB0aGlzLmluZm8uUGF0aENoaWxkKCdkaWFtJywgY2MuTGFiZWwpLnN0cmluZyA9IGAke1BsYXllckluZm8uZGlhbX1gO1xuICAgICAgICAvLyBJRFxuICAgICAgICB0aGlzLmluZm8uUGF0aENoaWxkKCdpZCcsIGNjLkxhYmVsKS5zdHJpbmcgPSBgSUQ6JHtQbGF5ZXJJbmZvLmlkfWA7XG4gICAgICAgIC8vIOe7j+mqjFxuICAgICAgICB0aGlzLmluZm8uUGF0aENoaWxkKCdleHAvbWFzaycpLndpZHRoID0gUGxheWVySW5mby5leHAgLyB0aGlzLmdldE5leHRMZXZlbEV4cChQbGF5ZXJJbmZvLmxldmVsKSAqIHRoaXMuaW5mby5QYXRoQ2hpbGQoJ2V4cCcpLndpZHRoO1xuICAgICAgICB0aGlzLmluZm8uUGF0aENoaWxkKCdleHAvdmFsJywgY2MuTGFiZWwpLnN0cmluZyA9IGAke1BsYXllckluZm8uZXhwfS8ke3RoaXMuZ2V0TmV4dExldmVsRXhwKFBsYXllckluZm8ubGV2ZWwpfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXROZXh0TGV2ZWxFeHAobHY6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gMTAwMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRpdGxlKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAn5pegJztcbiAgICB9XG59XG4iXX0=