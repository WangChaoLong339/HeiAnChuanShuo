
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/tool/WindowInit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a98eTPvuNMwbZfU95f8c4v', 'WindowInit');
// resources/tool/WindowInit.ts

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
var WindowInit = /** @class */ (function (_super) {
    __extends(WindowInit, _super);
    function WindowInit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowInit.prototype.onLoad = function () {
        // 记录一个进入游戏的时间
        window.EnterGameTime = new Date().getTime() / 1000;
        window.GetViewSize = function () { return cc.view.getCanvasSize(); };
        window.SetLocalStorage = function (key, data) {
            cc.sys.localStorage.setItem(key, JSON.stringify(data));
        };
        window.GetLocalStorage = function (key, def) {
            var data = cc.sys.localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
            if (def) {
                return def;
            }
            return null;
        };
        window.RegisterGlobal = function (k, v) {
            if (window[k]) {
                return;
            }
            window[k] = v;
        };
        window.UnRegisterGlobal = function (k) {
            if (!window[k]) {
                return;
            }
            window[k] = null;
        };
        window.Clone = function (obj) {
            return JSON.parse(JSON.stringify(obj));
        };
        // 随机一个左闭右开的数字
        window.RandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        window.IsEmpty = function (obj) {
            for (var i in obj) {
                return false;
            }
            return true;
        };
        window.SetSpriteFrame = function (path, sprite) {
            if (!path) {
                sprite.spriteFrame = null;
                return;
            }
            cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) {
                if (err) {
                    console.log(err);
                    return;
                }
                sprite.spriteFrame = spriteFrame;
            });
        };
        /*--------------------------------------------------分割线-------------------------------------------------*/
        /*
                                                       分割线以上是常用方法
                                                       分割线以下是扩展方法
        */
        /*--------------------------------------------------分割线-------------------------------------------------*/
        cc.Node.prototype.PathChild = function (path, componentName) {
            var names = path.split('/');
            var nd = null;
            for (var i = 0; i < names.length; i++) {
                if (nd) {
                    nd = nd.getChildByName(names[i]);
                }
                else {
                    nd = this.getChildByName(names[i]);
                }
            }
            if (componentName) {
                return nd.getComponent(componentName);
            }
            else {
                return nd;
            }
        };
        Date.prototype.Format = (function () {
            var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
            var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
            var timezoneClip = /[^-+\dA-Z]/g;
            var masks = {
                'default': 'ddd mmm dd yyyy HH:MM:ss',
                'shortDate': 'm/d/yy',
                'mediumDate': 'mmm d, yyyy',
                'longDate': 'mmmm d, yyyy',
                'fullDate': 'dddd, mmmm d, yyyy',
                'shortTime': 'h:MM TT',
                'mediumTime': 'h:MM:ss TT',
                'longTime': 'h:MM:ss TT Z',
                'isoDate': 'yyyy-mm-dd',
                'isoTime': 'HH:MM:ss',
                'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
                'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
                'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
            };
            // Internationalization strings
            var i18n = {
                dayNames: [
                    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
                    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
                ],
                monthNames: [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
                ]
            };
            var pad = function (val, len) {
                val = String(val);
                len = len || 2;
                while (val.length < len) {
                    val = '0' + val;
                }
                return val;
            };
            /**
             * Get the ISO 8601 week number
             * Based on comments from
             * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
             *
             * @param  {Object} `date`
             * @return {Number}
             */
            var getWeek = function (date) {
                // Remove time components of date
                var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                // Change date to Thursday same week
                targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);
                // Take January 4th as it is always in week 1 (see ISO 8601)
                var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
                // Change date to Thursday same week
                firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);
                // Check if daylight-saving-time-switch occured and correct for it
                var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
                targetThursday.setHours(targetThursday.getHours() - ds);
                // Number of weeks between target Thursday and first Thursday
                var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
                return 1 + Math.floor(weekDiff);
            };
            /**
             * Get ISO-8601 numeric representation of the day of the week
             * 1 (for Monday) through 7 (for Sunday)
             *
             * @param  {Object} `date`
             * @return {Number}
             */
            var getDayOfWeek = function (date) {
                var dow = date.getDay();
                if (dow === 0) {
                    dow = 7;
                }
                return dow;
            };
            /**
             * kind-of shortcut
             * @param  {*} val
             * @return {String}
             */
            var kindOf = function (val) {
                if (val === null) {
                    return 'null';
                }
                if (val === undefined) {
                    return 'undefined';
                }
                if (typeof val !== 'object') {
                    return typeof val;
                }
                if (Array.isArray(val)) {
                    return 'array';
                }
                return {}.toString.call(val)
                    .slice(8, -1).toLowerCase();
            };
            // Regexes and supporting functions are cached through closure
            return function (mask, utc, gmt) {
                var date = this;
                // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
                if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
                    mask = date;
                    date = undefined;
                }
                date = date || new Date;
                if (!(date instanceof Date)) {
                    date = new Date(date);
                }
                if (isNaN(date)) {
                    throw TypeError('Invalid date');
                }
                mask = String(masks[mask] || mask || masks['default']);
                // Allow setting the utc/gmt argument via the mask
                var maskSlice = mask.slice(0, 4);
                if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
                    mask = mask.slice(4);
                    utc = true;
                    if (maskSlice === 'GMT:') {
                        gmt = true;
                    }
                }
                var _ = utc ? 'getUTC' : 'get';
                var d = date[_ + 'Date']();
                var D = date[_ + 'Day']();
                var m = date[_ + 'Month']();
                var y = date[_ + 'FullYear']();
                var H = date[_ + 'Hours']();
                var M = date[_ + 'Minutes']();
                var s = date[_ + 'Seconds']();
                var L = date[_ + 'Milliseconds']();
                var o = utc ? 0 : date.getTimezoneOffset();
                var W = getWeek(date);
                var N = getDayOfWeek(date);
                var flags = {
                    d: d,
                    dd: pad(d),
                    ddd: i18n.dayNames[D],
                    dddd: i18n.dayNames[D + 7],
                    m: m + 1,
                    mm: pad(m + 1),
                    mmm: i18n.monthNames[m],
                    mmmm: i18n.monthNames[m + 12],
                    yy: String(y).slice(2),
                    yyyy: y,
                    h: H % 12 || 12,
                    hh: pad(H % 12 || 12),
                    H: H,
                    HH: pad(H),
                    M: M,
                    MM: pad(M),
                    s: s,
                    ss: pad(s),
                    l: pad(L, 3),
                    L: pad(Math.round(L / 10)),
                    t: H < 12 ? 'a' : 'p',
                    tt: H < 12 ? 'am' : 'pm',
                    T: H < 12 ? 'A' : 'P',
                    TT: H < 12 ? 'AM' : 'PM',
                    Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
                    o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                    // S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
                    W: W,
                    N: N
                };
                return mask.replace(token, function (match) {
                    if (match in flags) {
                        return flags[match];
                    }
                    return match.slice(1, match.length - 1);
                });
            };
        })();
    };
    WindowInit = __decorate([
        ccclass
    ], WindowInit);
    return WindowInit;
}(cc.Component));
exports.default = WindowInit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvdG9vbC9XaW5kb3dJbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQWtTQSxDQUFDO0lBaFNHLDJCQUFNLEdBQU47UUFDSSxjQUFjO1FBQ2QsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQTtRQUVsRCxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQVEsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFBO1FBRTdELE1BQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxHQUFHLEVBQUUsSUFBSTtZQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUMxRCxDQUFDLENBQUE7UUFFRCxNQUFNLENBQUMsZUFBZSxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUc7WUFDdkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNDLElBQUksSUFBSSxFQUFFO2dCQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUMxQjtZQUNELElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sR0FBRyxDQUFBO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQTtRQUNmLENBQUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNsQyxJQUFJLE1B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LEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksRUFBRSxDQUFDO29CQUNQLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7b0JBQ2YsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDckIsQ0FBQyxFQUFFLENBQUM7b0JBQ0osRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1YsQ0FBQyxFQUFFLENBQUM7b0JBQ0osRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1YsQ0FBQyxFQUFFLENBQUM7b0JBQ0osRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNaLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQzFCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7b0JBQ3JCLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3hCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7b0JBQ3JCLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7b0JBQ3JHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN0RixtRkFBbUY7b0JBQ25GLENBQUMsRUFBRSxDQUFDO29CQUNKLENBQUMsRUFBRSxDQUFDO2lCQUNQLENBQUM7Z0JBRUYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEtBQUs7b0JBQ3RDLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTt3QkFDaEIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3ZCO29CQUNELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsRUFBRSxDQUFBO0lBQ1IsQ0FBQztJQWpTZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWtTOUI7SUFBRCxpQkFBQztDQWxTRCxBQWtTQyxDQWxTdUMsRUFBRSxDQUFDLFNBQVMsR0FrU25EO2tCQWxTb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dJbml0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g6K6w5b2V5LiA5Liq6L+b5YWl5ri45oiP55qE5pe26Ze0XG4gICAgICAgIHdpbmRvdy5FbnRlckdhbWVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG5cbiAgICAgICAgd2luZG93LkdldFZpZXdTaXplID0gKCkgPT4geyByZXR1cm4gY2Mudmlldy5nZXRDYW52YXNTaXplKCkgfVxuXG4gICAgICAgIHdpbmRvdy5TZXRMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoa2V5LCBkYXRhKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5HZXRMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoa2V5LCBkZWYpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LlJlZ2lzdGVyR2xvYmFsID0gZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3dba10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvd1trXSA9IHZcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5VblJlZ2lzdGVyR2xvYmFsID0gZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIGlmICghd2luZG93W2tdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3dba10gPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuQ2xvbmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65LiA5Liq5bem6Zet5Y+z5byA55qE5pWw5a2XXG4gICAgICAgIHdpbmRvdy5SYW5kb21JbnQgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5Jc0VtcHR5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuU2V0U3ByaXRlRnJhbWUgPSBmdW5jdGlvbiAocGF0aCwgc3ByaXRlKSB7XG4gICAgICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhwYXRoLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cblxuICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YiG5Ymy57q/LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YiG5Ymy57q/5Lul5LiK5piv5bi455So5pa55rOVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YiG5Ymy57q/5Lul5LiL5piv5omp5bGV5pa55rOVXG4gICAgICAgICovXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3liIblibLnur8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gICAgICAgIGNjLk5vZGUucHJvdG90eXBlLlBhdGhDaGlsZCA9IGZ1bmN0aW9uIChwYXRoLCBjb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICBsZXQgbmFtZXMgPSBwYXRoLnNwbGl0KCcvJylcbiAgICAgICAgICAgIGxldCBuZCA9IG51bGxcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChuZCkge1xuICAgICAgICAgICAgICAgICAgICBuZCA9IG5kLmdldENoaWxkQnlOYW1lKG5hbWVzW2ldKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5kID0gdGhpcy5nZXRDaGlsZEJ5TmFtZShuYW1lc1tpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5kLmdldENvbXBvbmVudChjb21wb25lbnROYW1lKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIERhdGUucHJvdG90eXBlLkZvcm1hdCA9ICgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSAvZHsxLDR9fG17MSw0fXx5eSg/Onl5KT98KFtIaE1zVHRdKVxcMT98W0xsb1NaV05dfCdbXiddKid8J1teJ10qJy9nO1xuICAgICAgICAgICAgdmFyIHRpbWV6b25lID0gL1xcYig/OltQTUNFQV1bU0RQXVR8KD86UGFjaWZpY3xNb3VudGFpbnxDZW50cmFsfEVhc3Rlcm58QXRsYW50aWMpICg/OlN0YW5kYXJkfERheWxpZ2h0fFByZXZhaWxpbmcpIFRpbWV8KD86R01UfFVUQykoPzpbLStdXFxkezR9KT8pXFxiL2c7XG4gICAgICAgICAgICB2YXIgdGltZXpvbmVDbGlwID0gL1teLStcXGRBLVpdL2c7XG5cbiAgICAgICAgICAgIHZhciBtYXNrcyA9IHtcbiAgICAgICAgICAgICAgICAnZGVmYXVsdCc6ICdkZGQgbW1tIGRkIHl5eXkgSEg6TU06c3MnLFxuICAgICAgICAgICAgICAgICdzaG9ydERhdGUnOiAnbS9kL3l5JyxcbiAgICAgICAgICAgICAgICAnbWVkaXVtRGF0ZSc6ICdtbW0gZCwgeXl5eScsXG4gICAgICAgICAgICAgICAgJ2xvbmdEYXRlJzogJ21tbW0gZCwgeXl5eScsXG4gICAgICAgICAgICAgICAgJ2Z1bGxEYXRlJzogJ2RkZGQsIG1tbW0gZCwgeXl5eScsXG4gICAgICAgICAgICAgICAgJ3Nob3J0VGltZSc6ICdoOk1NIFRUJyxcbiAgICAgICAgICAgICAgICAnbWVkaXVtVGltZSc6ICdoOk1NOnNzIFRUJyxcbiAgICAgICAgICAgICAgICAnbG9uZ1RpbWUnOiAnaDpNTTpzcyBUVCBaJyxcbiAgICAgICAgICAgICAgICAnaXNvRGF0ZSc6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgICAgICAnaXNvVGltZSc6ICdISDpNTTpzcycsXG4gICAgICAgICAgICAgICAgJ2lzb0RhdGVUaW1lJzogJ3l5eXktbW0tZGRcXCdUXFwnSEg6TU06c3NvJyxcbiAgICAgICAgICAgICAgICAnaXNvVXRjRGF0ZVRpbWUnOiAnVVRDOnl5eXktbW0tZGRcXCdUXFwnSEg6TU06c3NcXCdaXFwnJyxcbiAgICAgICAgICAgICAgICAnZXhwaXJlc0hlYWRlckZvcm1hdCc6ICdkZGQsIGRkIG1tbSB5eXl5IEhIOk1NOnNzIFonXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBJbnRlcm5hdGlvbmFsaXphdGlvbiBzdHJpbmdzXG4gICAgICAgICAgICB2YXIgaTE4biA9IHtcbiAgICAgICAgICAgICAgICBkYXlOYW1lczogW1xuICAgICAgICAgICAgICAgICAgICAnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JyxcbiAgICAgICAgICAgICAgICAgICAgJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgbW9udGhOYW1lczogW1xuICAgICAgICAgICAgICAgICAgICAnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnLFxuICAgICAgICAgICAgICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHBhZCA9ICh2YWwsIGxlbj8pID0+IHtcbiAgICAgICAgICAgICAgICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgICAgICAgICAgICAgICBsZW4gPSBsZW4gfHwgMjtcbiAgICAgICAgICAgICAgICB3aGlsZSAodmFsLmxlbmd0aCA8IGxlbikge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAnMCcgKyB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSBJU08gODYwMSB3ZWVrIG51bWJlclxuICAgICAgICAgICAgICogQmFzZWQgb24gY29tbWVudHMgZnJvbVxuICAgICAgICAgICAgICogaHR0cDovL3RlY2hibG9nLnByb2N1cmlvcy5ubC9rL242MTgvbmV3cy92aWV3LzMzNzk2LzE0ODYzL0NhbGN1bGF0ZS1JU08tODYwMS13ZWVrLWFuZC15ZWFyLWluLWphdmFzY3JpcHQuaHRtbFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdH0gYGRhdGVgXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBnZXRXZWVrID0gKGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGltZSBjb21wb25lbnRzIG9mIGRhdGVcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VGh1cnNkYXk6IGFueSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZGF0ZSB0byBUaHVyc2RheSBzYW1lIHdlZWtcbiAgICAgICAgICAgICAgICB0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKSAtICgodGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMyk7XG5cbiAgICAgICAgICAgICAgICAvLyBUYWtlIEphbnVhcnkgNHRoIGFzIGl0IGlzIGFsd2F5cyBpbiB3ZWVrIDEgKHNlZSBJU08gODYwMSlcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RUaHVyc2RheTogYW55ID0gbmV3IERhdGUodGFyZ2V0VGh1cnNkYXkuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZGF0ZSB0byBUaHVyc2RheSBzYW1lIHdlZWtcbiAgICAgICAgICAgICAgICBmaXJzdFRodXJzZGF5LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgLSAoKGZpcnN0VGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMyk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBkYXlsaWdodC1zYXZpbmctdGltZS1zd2l0Y2ggb2NjdXJlZCBhbmQgY29ycmVjdCBmb3IgaXRcbiAgICAgICAgICAgICAgICB2YXIgZHMgPSB0YXJnZXRUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpIC0gZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICAgICAgICAgIHRhcmdldFRodXJzZGF5LnNldEhvdXJzKHRhcmdldFRodXJzZGF5LmdldEhvdXJzKCkgLSBkcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2Ygd2Vla3MgYmV0d2VlbiB0YXJnZXQgVGh1cnNkYXkgYW5kIGZpcnN0IFRodXJzZGF5XG4gICAgICAgICAgICAgICAgdmFyIHdlZWtEaWZmID0gKHRhcmdldFRodXJzZGF5IC0gZmlyc3RUaHVyc2RheSkgLyAoODY0MDAwMDAgKiA3KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMSArIE1hdGguZmxvb3Iod2Vla0RpZmYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBJU08tODYwMSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgICAqIDEgKGZvciBNb25kYXkpIHRocm91Z2ggNyAoZm9yIFN1bmRheSlcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBgZGF0ZWBcbiAgICAgICAgICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGdldERheU9mV2VlayA9IChkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGRvdyA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgICAgICAgICAgaWYgKGRvdyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb3cgPSA3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZG93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGtpbmQtb2Ygc2hvcnRjdXRcbiAgICAgICAgICAgICAqIEBwYXJhbSAgeyp9IHZhbFxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIga2luZE9mID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXJyYXknO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbClcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIFJlZ2V4ZXMgYW5kIHN1cHBvcnRpbmcgZnVuY3Rpb25zIGFyZSBjYWNoZWQgdGhyb3VnaCBjbG9zdXJlXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1hc2ssIHV0YywgZ210KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSB0aGlzXG4gICAgICAgICAgICAgICAgLy8gWW91IGNhbid0IHByb3ZpZGUgdXRjIGlmIHlvdSBza2lwIG90aGVyIGFyZ3MgKHVzZSB0aGUgJ1VUQzonIG1hc2sgcHJlZml4KVxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGtpbmRPZihkYXRlKSA9PT0gJ3N0cmluZycgJiYgIS9cXGQvLnRlc3QoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzayA9IGRhdGU7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0ZSA9IGRhdGUgfHwgbmV3IERhdGU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc05hTihkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgZGF0ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hc2sgPSBTdHJpbmcobWFza3NbbWFza10gfHwgbWFzayB8fCBtYXNrc1snZGVmYXVsdCddKTtcblxuICAgICAgICAgICAgICAgIC8vIEFsbG93IHNldHRpbmcgdGhlIHV0Yy9nbXQgYXJndW1lbnQgdmlhIHRoZSBtYXNrXG4gICAgICAgICAgICAgICAgdmFyIG1hc2tTbGljZSA9IG1hc2suc2xpY2UoMCwgNCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2tTbGljZSA9PT0gJ1VUQzonIHx8IG1hc2tTbGljZSA9PT0gJ0dNVDonKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2sgPSBtYXNrLnNsaWNlKDQpO1xuICAgICAgICAgICAgICAgICAgICB1dGMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFza1NsaWNlID09PSAnR01UOicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdtdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgXyA9IHV0YyA/ICdnZXRVVEMnIDogJ2dldCc7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBkYXRlW18gKyAnRGF0ZSddKCk7XG4gICAgICAgICAgICAgICAgdmFyIEQgPSBkYXRlW18gKyAnRGF5J10oKTtcbiAgICAgICAgICAgICAgICB2YXIgbSA9IGRhdGVbXyArICdNb250aCddKCk7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBkYXRlW18gKyAnRnVsbFllYXInXSgpO1xuICAgICAgICAgICAgICAgIHZhciBIID0gZGF0ZVtfICsgJ0hvdXJzJ10oKTtcbiAgICAgICAgICAgICAgICB2YXIgTSA9IGRhdGVbXyArICdNaW51dGVzJ10oKTtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IGRhdGVbXyArICdTZWNvbmRzJ10oKTtcbiAgICAgICAgICAgICAgICB2YXIgTCA9IGRhdGVbXyArICdNaWxsaXNlY29uZHMnXSgpO1xuICAgICAgICAgICAgICAgIHZhciBvID0gdXRjID8gMCA6IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgVyA9IGdldFdlZWsoZGF0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIE4gPSBnZXREYXlPZldlZWsoZGF0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZsYWdzID0ge1xuICAgICAgICAgICAgICAgICAgICBkOiBkLFxuICAgICAgICAgICAgICAgICAgICBkZDogcGFkKGQpLFxuICAgICAgICAgICAgICAgICAgICBkZGQ6IGkxOG4uZGF5TmFtZXNbRF0sXG4gICAgICAgICAgICAgICAgICAgIGRkZGQ6IGkxOG4uZGF5TmFtZXNbRCArIDddLFxuICAgICAgICAgICAgICAgICAgICBtOiBtICsgMSxcbiAgICAgICAgICAgICAgICAgICAgbW06IHBhZChtICsgMSksXG4gICAgICAgICAgICAgICAgICAgIG1tbTogaTE4bi5tb250aE5hbWVzW21dLFxuICAgICAgICAgICAgICAgICAgICBtbW1tOiBpMThuLm1vbnRoTmFtZXNbbSArIDEyXSxcbiAgICAgICAgICAgICAgICAgICAgeXk6IFN0cmluZyh5KS5zbGljZSgyKSxcbiAgICAgICAgICAgICAgICAgICAgeXl5eTogeSxcbiAgICAgICAgICAgICAgICAgICAgaDogSCAlIDEyIHx8IDEyLFxuICAgICAgICAgICAgICAgICAgICBoaDogcGFkKEggJSAxMiB8fCAxMiksXG4gICAgICAgICAgICAgICAgICAgIEg6IEgsXG4gICAgICAgICAgICAgICAgICAgIEhIOiBwYWQoSCksXG4gICAgICAgICAgICAgICAgICAgIE06IE0sXG4gICAgICAgICAgICAgICAgICAgIE1NOiBwYWQoTSksXG4gICAgICAgICAgICAgICAgICAgIHM6IHMsXG4gICAgICAgICAgICAgICAgICAgIHNzOiBwYWQocyksXG4gICAgICAgICAgICAgICAgICAgIGw6IHBhZChMLCAzKSxcbiAgICAgICAgICAgICAgICAgICAgTDogcGFkKE1hdGgucm91bmQoTCAvIDEwKSksXG4gICAgICAgICAgICAgICAgICAgIHQ6IEggPCAxMiA/ICdhJyA6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgdHQ6IEggPCAxMiA/ICdhbScgOiAncG0nLFxuICAgICAgICAgICAgICAgICAgICBUOiBIIDwgMTIgPyAnQScgOiAnUCcsXG4gICAgICAgICAgICAgICAgICAgIFRUOiBIIDwgMTIgPyAnQU0nIDogJ1BNJyxcbiAgICAgICAgICAgICAgICAgICAgWjogZ210ID8gJ0dNVCcgOiB1dGMgPyAnVVRDJyA6IChTdHJpbmcoZGF0ZSkubWF0Y2godGltZXpvbmUpIHx8IFsnJ10pLnBvcCgpLnJlcGxhY2UodGltZXpvbmVDbGlwLCAnJyksXG4gICAgICAgICAgICAgICAgICAgIG86IChvID4gMCA/ICctJyA6ICcrJykgKyBwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhvKSAvIDYwKSAqIDEwMCArIE1hdGguYWJzKG8pICUgNjAsIDQpLFxuICAgICAgICAgICAgICAgICAgICAvLyBTOiBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11bZCAlIDEwID4gMyA/IDAgOiAoZCAlIDEwMCAtIGQgJSAxMCAhPSAxMCkgKiBkICUgMTBdLFxuICAgICAgICAgICAgICAgICAgICBXOiBXLFxuICAgICAgICAgICAgICAgICAgICBOOiBOXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtYXNrLnJlcGxhY2UodG9rZW4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggaW4gZmxhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmbGFnc1ttYXRjaF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnNsaWNlKDEsIG1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKVxuICAgIH1cbn1cbiJdfQ==