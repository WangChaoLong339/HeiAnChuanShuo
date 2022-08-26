
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/tool/MultiFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '539d0ADpMBI1o9DLRikfhv4', 'MultiFrame');
// resources/tool/MultiFrame.ts

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
var MultiFrame = /** @class */ (function (_super) {
    __extends(MultiFrame, _super);
    function MultiFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.multiFrame = [];
        return _this;
    }
    MultiFrame.prototype.onLoad = function () {
    };
    MultiFrame.prototype.SetFrame = function (idx) {
        if (idx >= this.multiFrame.length) {
            return cc.error("Cross the border " + idx + "/" + this.multiFrame.length);
        }
        this.node.getComponent(cc.Sprite).spriteFrame = this.multiFrame[idx];
    };
    __decorate([
        property(cc.SpriteFrame)
    ], MultiFrame.prototype, "multiFrame", void 0);
    MultiFrame = __decorate([
        ccclass
    ], MultiFrame);
    return MultiFrame;
}(cc.Component));
exports.default = MultiFrame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvdG9vbC9NdWx0aUZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZ0JDO1FBYkcsZ0JBQVUsR0FBcUIsRUFBRSxDQUFDOztJQWF0QyxDQUFDO0lBWGEsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRU0sNkJBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3ZCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBb0IsR0FBRyxTQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBUSxDQUFDLENBQUM7U0FDeEU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQVpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ1M7SUFIakIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdCOUI7SUFBRCxpQkFBQztDQWhCRCxBQWdCQyxDQWhCdUMsRUFBRSxDQUFDLFNBQVMsR0FnQm5EO2tCQWhCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aUZyYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBtdWx0aUZyYW1lOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgcHVibGljIFNldEZyYW1lKGlkeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChpZHggPj0gdGhpcy5tdWx0aUZyYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKGBDcm9zcyB0aGUgYm9yZGVyICR7aWR4fS8ke3RoaXMubXVsdGlGcmFtZS5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm11bHRpRnJhbWVbaWR4XTtcbiAgICB9XG59XG4iXX0=