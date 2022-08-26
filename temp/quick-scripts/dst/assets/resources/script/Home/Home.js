
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/script/Home/Home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NyaXB0L0hvbWUvSG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRztJQUNaLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUc7SUFDdkMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsR0FBRztJQUN4QyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxHQUFHO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUc7SUFDaEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsR0FBRztJQUN4QyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxHQUFHO0NBQzNDLENBQUE7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWlEQztRQTlDRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBMkN6QixDQUFDO0lBekNhLHFCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLFlBQVksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUVTLHdCQUFTLEdBQW5CO1FBQ0ksWUFBWSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBRU0sc0JBQU8sR0FBZDtJQUNBLENBQUM7SUFFTyw2QkFBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUM3QixJQUFJLFFBQVEsR0FBWSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN6QyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQU0sQ0FBQTtZQUNsRSxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNoRCxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNqQixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDNUIsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtZQUNyRCxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1NBQ2hHO0lBQ0wsQ0FBQztJQUVPLDZCQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFFLEVBQUUsR0FBRztZQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUE7UUFDNUUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsd0JBQVMsR0FBVCxVQUFVLENBQUM7UUFDUCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQTtJQUMxQixDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDRztJQU5KLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FpRHhCO0lBQUQsV0FBQztDQWpERCxBQWlEQyxDQWpEaUMsRUFBRSxDQUFDLFNBQVMsR0FpRDdDO2tCQWpEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhvbWVDZmcgPSBbXG4gICAgeyBuYW1lOiAn6buR5biCJywgcGZiOiAnJywgbGV2ZWxMaW1pdDogNSwgfSxcbiAgICB7IG5hbWU6ICfpk4HljKDpk7onLCBwZmI6ICcnLCBsZXZlbExpbWl0OiA4LCB9LFxuICAgIHsgbmFtZTogJ+aIkOWwsScsIHBmYjogJycsIGxldmVsTGltaXQ6IDAsIH0sXG4gICAgeyBuYW1lOiAn5YaS6ZmpJywgcGZiOiAnQWR2ZW50dXJlJywgbGV2ZWxMaW1pdDogMCwgfSxcbiAgICB7IG5hbWU6ICflia/mnKwnLCBwZmI6ICcnLCBsZXZlbExpbWl0OiAxMCwgfSxcbiAgICB7IG5hbWU6ICfmt7HmuIonLCBwZmI6ICcnLCBsZXZlbExpbWl0OiAzMCwgfSxcbl1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcm9vdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vbmVudGVyID0gdGhpcy5vbmVudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbmxlYXZlID0gdGhpcy5vbmxlYXZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSG9tZUl0ZW0oKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uKCdwbGF5ZXJfdXBncmFkZScsIHRoaXMsIHRoaXMudXBkYXRlSXRlbUxvY2suYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBFdmVudE1hbmFnZXIub2ZmKCdwbGF5ZXJfdXBncmFkZScsIHRoaXMpXG4gICAgfVxuXG4gICAgcHVibGljIG9uZW50ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbUxvY2soKVxuICAgIH1cblxuICAgIHB1YmxpYyBvbmxlYXZlKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSG9tZUl0ZW0oKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm9vdC5yZW1vdmVBbGxDaGlsZHJlbigpXG4gICAgICAgIGxldCB2aWV3U2l6ZTogY2MuUmVjdCA9IEdldFZpZXdTaXplKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSG9tZUNmZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNsb25lSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ3ZhbCcsIGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtIb21lQ2ZnW2ldLm5hbWV9YFxuICAgICAgICAgICAgY2xvbmVJdGVtLmdldENvbXBvbmVudCgnTXVsdGlGcmFtZScpLlNldEZyYW1lKGkpXG4gICAgICAgICAgICBjbG9uZUl0ZW0uaWR4ID0gaVxuICAgICAgICAgICAgY2xvbmVJdGVtLnBhcmVudCA9IHRoaXMucm9vdFxuICAgICAgICAgICAgY2xvbmVJdGVtLnggPSAoaSAlIDMgLSAxKSAqICh2aWV3U2l6ZS53aWR0aCAvIDMgLSAyMClcbiAgICAgICAgICAgIGNsb25lSXRlbS55ID0gKDEgLSBNYXRoLmZsb29yKGkgLyAzKSArIDAuNSkgKiB0aGlzLml0ZW0uaGVpZ2h0ICsgKDEgLSBNYXRoLmZsb29yKGkgLyAzKSkgKiA0MFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtTG9jaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb290LkVhY2hDaGlsZCgoaXQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaXQuUGF0aENoaWxkKCdsb2NrJykuYWN0aXZlID0gSG9tZUNmZ1tpZHhdLmxldmVsTGltaXQgPiBQbGF5ZXJJbmZvLmxldmVsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xpY2tJdGVtKGUpIHtcbiAgICAgICAgbGV0IGlkeCA9IGUudGFyZ2V0LmlkeFxuICAgIH1cbn1cbiJdfQ==