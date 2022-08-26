"use strict";
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