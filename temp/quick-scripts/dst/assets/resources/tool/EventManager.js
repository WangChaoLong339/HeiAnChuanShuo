
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/tool/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb2e4qx2YZFWZr/8eDt+MI0', 'EventManager');
// resources/tool/EventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.events = {};
    }
    EventManager.prototype.clear = function (name) {
        var list = this.events[name] || [];
        list.length = 0;
    };
    EventManager.prototype.on = function (name, target, cb) {
        this.events[name] = this.events[name] || [];
        this.events[name].push({
            target: target,
            cb: cb,
        });
    };
    EventManager.prototype.off = function (name, target) {
        var list = this.events[name] || [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] && list[i].target == target) {
                list[i] = null;
            }
        }
    };
    EventManager.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var list = this.events[name] || [];
        var trim = false;
        cc.log("eventMgr.emit", name, list.length, JSON.stringify(args));
        for (var i = 0; i < list.length; i++) {
            if (list[i]) {
                list[i].cb.apply(null, args);
            }
            else {
                trim = true;
            }
        }
        if (trim) {
            var cnt = 0;
            for (var i = 0; i < list.length; i++) {
                if (list[i]) {
                    list[cnt++] = list[i];
                }
            }
            list.length = cnt;
            cc.log('EventManager trim', name, list.length, cnt);
        }
    };
    return EventManager;
}());
exports.EventManager = EventManager;
window.EventManager = new EventManager();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvdG9vbC9FdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUVZLFdBQU0sR0FBRyxFQUFFLENBQUE7SUFtRHZCLENBQUM7SUFoREcsNEJBQUssR0FBTCxVQUFNLElBQUk7UUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUNuQixDQUFDO0lBRUQseUJBQUUsR0FBRixVQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsTUFBTSxFQUFFLE1BQU07WUFDZCxFQUFFLEVBQUUsRUFBRTtTQUNULENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUVsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRTtnQkFDckMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTthQUNqQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxJQUFJO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFBO1FBRWhCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUVoRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDL0I7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQTthQUNkO1NBQ0o7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ3hCO2FBQ0o7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtZQUNqQixFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ3REO0lBQ0wsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQXJEWSxvQ0FBWTtBQXVEekIsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XG5cbiAgICBwcml2YXRlIGV2ZW50cyA9IHt9XG4gICAgbGF0ZXN0TWVzc2FnZXM6IGFueVxuXG4gICAgY2xlYXIobmFtZSkge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuZXZlbnRzW25hbWVdIHx8IFtdXG4gICAgICAgIGxpc3QubGVuZ3RoID0gMFxuICAgIH1cblxuICAgIG9uKG5hbWUsIHRhcmdldCwgY2IpIHtcbiAgICAgICAgdGhpcy5ldmVudHNbbmFtZV0gPSB0aGlzLmV2ZW50c1tuYW1lXSB8fCBbXVxuICAgICAgICB0aGlzLmV2ZW50c1tuYW1lXS5wdXNoKHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgY2I6IGNiLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9mZihuYW1lLCB0YXJnZXQpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmV2ZW50c1tuYW1lXSB8fCBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXS50YXJnZXQgPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgbGlzdFtpXSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVtaXQobmFtZSwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmV2ZW50c1tuYW1lXSB8fCBbXVxuICAgICAgICBsZXQgdHJpbSA9IGZhbHNlXG5cbiAgICAgICAgY2MubG9nKFwiZXZlbnRNZ3IuZW1pdFwiLCBuYW1lLCBsaXN0Lmxlbmd0aCwgSlNPTi5zdHJpbmdpZnkoYXJncykpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGlzdFtpXSkge1xuICAgICAgICAgICAgICAgIGxpc3RbaV0uY2IuYXBwbHkobnVsbCwgYXJncylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJpbSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmltKSB7XG4gICAgICAgICAgICBsZXQgY250ID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdFtjbnQrK10gPSBsaXN0W2ldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdC5sZW5ndGggPSBjbnRcbiAgICAgICAgICAgIGNjLmxvZygnRXZlbnRNYW5hZ2VyIHRyaW0nLCBuYW1lLCBsaXN0Lmxlbmd0aCwgY250KVxuICAgICAgICB9XG4gICAgfVxufVxuXG53aW5kb3cuRXZlbnRNYW5hZ2VyID0gbmV3IEV2ZW50TWFuYWdlcigpXG4iXX0=