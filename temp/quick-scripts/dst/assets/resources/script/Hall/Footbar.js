
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/script/Hall/Footbar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NyaXB0L0hhbGwvRm9vdGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRztJQUNaLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQzNCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO0lBQzdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFO0lBQy9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO0lBQzVCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO0NBQy9CLENBQUE7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVDQztRQXBDRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBaUN6QixDQUFDO0lBOUJHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3pDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBTSxDQUFBO1lBQ2xFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtTQUNqQztJQUNMLENBQUM7SUFFUywrQkFBYSxHQUF2QjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLEdBQUc7WUFDakMsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsMkJBQVMsR0FBVCxVQUFVLENBQUM7UUFDUCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFBRSxPQUFNO1NBQUU7UUFDaEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUssQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFuQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNHO0lBTkosT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXVDM0I7SUFBRCxjQUFDO0NBdkNELEFBdUNDLENBdkNvQyxFQUFFLENBQUMsU0FBUyxHQXVDaEQ7a0JBdkNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSGFsbENmZyA9IFtcbiAgICB7IG5hbWU6ICfkuLvpobUnLCBwZmI6ICdIb21lJyB9LFxuICAgIHsgbmFtZTogJ+inkuiJsicsIHBmYjogJ1BsYXllcicgfSxcbiAgICB7IG5hbWU6ICfog4zljIUnLCBwZmI6ICdCYWNrcGFjaycgfSxcbiAgICB7IG5hbWU6ICfmioDog70nLCBwZmI6ICdTa2lsbCcgfSxcbiAgICB7IG5hbWU6ICflhbbku5YnLCBwZmI6ICdPdGhlcicgfSxcbl1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RiYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgY3VyclBhZ2VJZHg6IG51bWJlclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyUGFnZUlkeCA9IDA7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgpXG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xuICAgIH1cblxuICAgIGNyZWF0ZUl0ZW0oKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnJlbW92ZUFsbENoaWxkcmVuKClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBIYWxsQ2ZnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2xvbmVJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKVxuICAgICAgICAgICAgY2xvbmVJdGVtLlBhdGhDaGlsZCgndmFsJywgY2MuTGFiZWwpLnN0cmluZyA9IGAke0hhbGxDZmdbaV0ubmFtZX1gXG4gICAgICAgICAgICBjbG9uZUl0ZW0uaWR4ID0gaVxuICAgICAgICAgICAgY2xvbmVJdGVtLnBhcmVudCA9IHRoaXMubGF5b3V0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgoaXQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaXQuZ2V0Q29tcG9uZW50KCdNdWx0aUZyYW1lJykuU2V0RnJhbWUoaWR4ID09IHRoaXMuY3VyclBhZ2VJZHggPyAxIDogMCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xpY2tJdGVtKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VyclBhZ2VJZHggPT0gZS50YXJnZXQuaWR4KSB7IHJldHVybiB9XG4gICAgICAgIFVpTWdyLmNsb3NlKEhhbGxDZmdbdGhpcy5jdXJyUGFnZUlkeF0ucGZiKVxuICAgICAgICB0aGlzLmN1cnJQYWdlSWR4ID0gZS50YXJnZXQuaWR4O1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcblxuICAgICAgICBVaU1nci5zaG93KGAke0hhbGxDZmdbdGhpcy5jdXJyUGFnZUlkeF0ucGZifWApXG4gICAgfVxufVxuIl19