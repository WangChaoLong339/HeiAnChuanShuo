
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '886a4Q9gkNCOY7/D6lfmXm4', 'scene');
// resources/scene.ts

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
var scene = /** @class */ (function (_super) {
    __extends(scene, _super);
    function scene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    scene.prototype.onLoad = function () {
        PlayerInfo = {
            id: 10086,
            nickname: '勇士001',
            title: 0,
            gold: 1000,
            diam: 888,
            level: 8,
            exp: 100,
        };
    };
    scene.prototype.start = function () {
        UiMgr.show('Hall');
    };
    scene = __decorate([
        ccclass
    ], scene);
    return scene;
}(cc.Component));
exports.default = scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7O0lBaUJBLENBQUM7SUFmRyxzQkFBTSxHQUFOO1FBQ0ksVUFBVSxHQUFHO1lBQ1QsRUFBRSxFQUFFLEtBQUs7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLEdBQUc7WUFDVCxLQUFLLEVBQUUsQ0FBQztZQUNSLEdBQUcsRUFBRSxHQUFHO1NBQ1gsQ0FBQTtJQUNMLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBaEJnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBaUJ6QjtJQUFELFlBQUM7Q0FqQkQsQUFpQkMsQ0FqQmtDLEVBQUUsQ0FBQyxTQUFTLEdBaUI5QztrQkFqQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBQbGF5ZXJJbmZvID0ge1xuICAgICAgICAgICAgaWQ6IDEwMDg2LFxuICAgICAgICAgICAgbmlja25hbWU6ICfli4flo6swMDEnLFxuICAgICAgICAgICAgdGl0bGU6IDAsXG4gICAgICAgICAgICBnb2xkOiAxMDAwLFxuICAgICAgICAgICAgZGlhbTogODg4LFxuICAgICAgICAgICAgbGV2ZWw6IDgsXG4gICAgICAgICAgICBleHA6IDEwMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBVaU1nci5zaG93KCdIYWxsJylcbiAgICB9XG59XG4iXX0=