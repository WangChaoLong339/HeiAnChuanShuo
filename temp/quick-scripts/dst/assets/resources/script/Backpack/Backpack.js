
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/script/Backpack/Backpack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NyaXB0L0JhY2twYWNrL0JhY2twYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sTUFBTSxHQUFHO0lBQ1gsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7Q0FDUCxDQUFBO0FBRUssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3Q0M7UUFyQ0csZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQTs7SUFrQzNCLENBQUM7SUEvQkcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDL0MsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUcsQ0FBQTtZQUMvRCxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNwQixZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7U0FDeEM7SUFDTCxDQUFDO0lBRUQsMEJBQU8sR0FBUDtJQUNBLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQVcsRUFBRSxHQUFHLElBQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGFBQWEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNsSSxDQUFDO0lBRUQsNkJBQVUsR0FBVjtJQUNBLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsQ0FBQztRQUNSLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFwQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdDNUI7SUFBRCxlQUFDO0NBeENELEFBd0NDLENBeENxQyxFQUFFLENBQUMsU0FBUyxHQXdDakQ7a0JBeENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGFiQ2ZnID0gW1xuICAgICfoo4XlpIcnLFxuICAgICfpgZPlhbcnLFxuICAgICflhajpg6gnLFxuICAgICfmjpLluo8nLFxuICAgICfliIbop6MnLFxuXVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3BhY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFiQ29udGVudDogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYkl0ZW06IGNjLk5vZGUgPSBudWxsXG5cbiAgICBjdXJyZW50VGFiSWR4OiBudW1iZXJcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbmVudGVyID0gdGhpcy5vbmVudGVyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiSWR4ID0gMFxuICAgICAgICB0aGlzLmNyZWF0ZVRhYnMoKVxuICAgICAgICB0aGlzLnVwZGF0ZVRhYkl0ZW0oKVxuICAgIH1cblxuICAgIGNyZWF0ZVRhYnMoKSB7XG4gICAgICAgIHRoaXMudGFiQ29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVGFiQ2ZnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2xvbmVUYWJJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy50YWJJdGVtKVxuICAgICAgICAgICAgY2xvbmVUYWJJdGVtLlBhdGhDaGlsZCgndmFsJywgY2MuTGFiZWwpLnN0cmluZyA9IGAke1RhYkNmZ1tpXX1gXG4gICAgICAgICAgICBjbG9uZVRhYkl0ZW0uaWR4ID0gaVxuICAgICAgICAgICAgY2xvbmVUYWJJdGVtLnBhcmVudCA9IHRoaXMudGFiQ29udGVudFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25lbnRlcigpIHtcbiAgICB9XG5cbiAgICB1cGRhdGVUYWJJdGVtKCkge1xuICAgICAgICB0aGlzLnRhYkNvbnRlbnQuRWFjaENoaWxkKChpdDogY2MuTm9kZSwgaWR4KSA9PiB7IGl0LmdldENvbXBvbmVudCgnTXVsdGlGcmFtZScpLlNldEZyYW1lKHRoaXMuY3VycmVudFRhYklkeCA9PSBpZHggPyAwIDogMSkgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVQYWdlKCkge1xuICAgIH1cblxuICAgIGJ0blRhYkl0ZW0oZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWJJZHggPSBlLnRhcmdldC5pZHhcbiAgICAgICAgdGhpcy51cGRhdGVUYWJJdGVtKClcbiAgICB9XG59XG4iXX0=