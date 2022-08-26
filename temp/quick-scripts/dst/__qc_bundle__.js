
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/resources/config/AttributeCfg');
require('./assets/resources/define/AttributeDef');
require('./assets/resources/scene');
require('./assets/resources/script/Backpack/Backpack');
require('./assets/resources/script/Hall/Footbar');
require('./assets/resources/script/Hall/Hall');
require('./assets/resources/script/Hall/Topbar');
require('./assets/resources/script/Home/Home');
require('./assets/resources/script/Player/Player');
require('./assets/resources/script/Skill/Skill');
require('./assets/resources/tool/CCExtend');
require('./assets/resources/tool/EventManager');
require('./assets/resources/tool/MultiFrame');
require('./assets/resources/tool/UiManager');
require('./assets/resources/tool/WindowInit');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/script/Hall/Hall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '993771/FyNH9JsueP1zIAsF', 'Hall');
// resources/script/Hall/Hall.ts

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
var Hall = /** @class */ (function (_super) {
    __extends(Hall, _super);
    function Hall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hall.prototype.onLoad = function () {
        this.node.onenter = this.onenter.bind(this);
        UiMgr.show('Home');
    };
    Hall.prototype.onDestroy = function () {
    };
    Hall.prototype.onenter = function () {
    };
    Hall = __decorate([
        ccclass
    ], Hall);
    return Hall;
}(cc.Component));
exports.default = Hall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NyaXB0L0hhbGwvSGFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFhQSxDQUFDO0lBWGEscUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUzQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFUyx3QkFBUyxHQUFuQjtJQUNBLENBQUM7SUFFTSxzQkFBTyxHQUFkO0lBQ0EsQ0FBQztJQVpnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBYXhCO0lBQUQsV0FBQztDQWJELEFBYUMsQ0FiaUMsRUFBRSxDQUFDLFNBQVMsR0FhN0M7a0JBYm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub25lbnRlciA9IHRoaXMub25lbnRlci5iaW5kKHRoaXMpXG5cbiAgICAgICAgVWlNZ3Iuc2hvdygnSG9tZScpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25lbnRlcigpOiB2b2lkIHtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/config/AttributeCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e790aNRmJHHpIf1en8zyog', 'AttributeCfg');
// resources/config/AttributeCfg.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvY29uZmlnL0F0dHJpYnV0ZUNmZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/script/Skill/Skill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '336baU4CD1BNr14aOua6UJj', 'Skill');
// resources/script/Skill/Skill.ts

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
var SkillCfg = [
    { name: '重击', limit: 1, icon: 0, string: '对敌人造成150%伤害' },
    { name: '火炎弹', limit: 8, string: '发射一个火球造成130%伤害,对敌人造成60%烧伤伤害持续2回合', icon: 1 },
    { name: '狂怒', limit: 16, string: '对敌人造成100%伤害,降低敌人30%攻击,持续3回合', icon: 2 },
    { name: '旋风斩', limit: 24, string: '对敌人造成2次60%伤害使目标眩晕1回合', icon: 3 },
    { name: '魔法护盾', limit: 32, string: '防御提升30%,持续4回合', icon: 4 },
    { name: '雷暴', limit: 38, string: '召唤雷电打击敌人,造成150%伤害,使敌人受到90%电击伤害持续2回合', icon: 5 },
    { name: '嗜血', limit: 42, string: '对敌人造成200%伤害,吸收20%基础伤害转化为自己的生命', icon: 6 },
    { name: '重击(高级)', limit: 52, string: '对敌人造成240%伤害', icon: 0 },
    { name: '火炎弹(高级)', limit: 58, string: '发射一个火球造成200%伤害,对敌人造成70%烧伤伤害持续3回合', icon: 1 },
    { name: '狂怒(高级)', limit: 64, string: '对敌人造成220%伤害,降低敌人35%攻击,持续3回合', icon: 2 },
    { name: '旋风斩(高级)', limit: 74, string: '对敌人造成2次100%伤害使目标眩晕1回合', icon: 3 },
    { name: '魔法护盾(高级)', limit: 80, string: '防御提升50%,持续5回合', icon: 4 },
    { name: '雷暴(高级)', limit: 100, string: '召唤雷电打击敌人,造成230%伤害,使敌人受到110%电击伤害持续2回合', icon: 5 },
    { name: '嗜血(高级)', limit: 300, string: '对敌人造成240%伤害,吸收30%基础伤害转化为自己的生命', icon: 6 },
    { name: '重击(终级)', limit: 500, string: '对敌人造成300%伤害', icon: 0 },
    { name: '火炎弹(终级)', limit: 700, string: '发射一个火球造成240%伤害,对敌人造成90%烧伤伤害持续4回合', icon: 1 },
    { name: '狂怒(终级)', limit: 800, string: '对敌人造成260%伤害,降低敌人40%攻击,持续3回合', icon: 2 },
    { name: '旋风斩(终级)', limit: 1000, string: '对敌人造成2次120%伤害使目标眩晕1回合', icon: 3 },
    { name: '魔法护盾(终级)', limit: 1200, string: '防御提升60%,持续5回合', icon: 4 },
    { name: '雷暴(终级)', limit: 1400, string: '召唤雷电打击敌人,造成260%伤害,使敌人受到130%电击伤害持续2回合', icon: 5 },
];
var SkillColor = {
    Normol: '#ffdd8c',
    Forbid: '#ff0000',
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Skill = /** @class */ (function (_super) {
    __extends(Skill, _super);
    function Skill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.item = null;
        _this.info = [];
        return _this;
    }
    Skill.prototype.onLoad = function () {
        this.node.onenter = this.onenter.bind(this);
        this.info = GetLocalStorage('skill_info', []);
        this.createSkillItem();
    };
    Skill.prototype.createSkillItem = function () {
        this.content.removeAllChildren();
        for (var i = 0; i < SkillCfg.length; i++) {
            var d = SkillCfg[i];
            var cloneItem = cc.instantiate(this.item);
            var achieve = d.limit <= PlayerInfo.level;
            cloneItem.PathChild('icon', 'MultiFrame').SetFrame(d.icon);
            cloneItem.PathChild('skillname', cc.Label).string = "" + d.name;
            cloneItem.PathChild('limit', cc.Label).string = "\u7B49\u7EA7" + d.limit;
            cloneItem.PathChild('limit').color = achieve ? cc.color(255, 221, 140) : cc.color(255, 0, 0);
            cloneItem.PathChild('des', cc.Label).string = "" + d.string;
            cloneItem.PathChild('mask').active = !achieve;
            cloneItem.PathChild('select').active = achieve;
            cloneItem.PathChild('select', 'MultiFrame').SetFrame(this.info.indexOf(i) == -1 ? 0 : 1);
            cloneItem.idx = i;
            cloneItem.parent = this.content;
        }
    };
    Skill.prototype.onenter = function () {
    };
    Skill.prototype.updateSkillItem = function () {
        var _this = this;
        this.content.EachChild(function (it, idx) {
            it.PathChild('select', 'MultiFrame').SetFrame(_this.info.indexOf(idx) == -1 ? 0 : 1);
        });
    };
    Skill.prototype.clickItem = function (e) {
        var existIdx = this.info.indexOf(e.target.parent.idx);
        if (existIdx != -1) {
            this.info.splice(existIdx, 1);
            this.updateSkillItem();
            return;
        }
        if (this.info.length == 3) {
            return;
        }
        this.info.push(e.target.parent.idx);
        this.info.sort(function (a, b) { return a - b; });
        console.log(this.info);
        this.updateSkillItem();
    };
    __decorate([
        property(cc.Node)
    ], Skill.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], Skill.prototype, "item", void 0);
    Skill = __decorate([
        ccclass
    ], Skill);
    return Skill;
}(cc.Component));
exports.default = Skill;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvc2NyaXB0L1NraWxsL1NraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sUUFBUSxHQUFHO0lBQ2IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQzlFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ3pFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUM3RCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUscUNBQXFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUNqRixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUMzRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGtDQUFrQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7SUFDN0UsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7SUFDeEUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ2pFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ3ZGLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSwrQkFBK0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ2hGLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUM5RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUNwRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUM5RSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUMxRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLHNDQUFzQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7Q0FDM0YsQ0FBQTtBQUVELElBQU0sVUFBVSxHQUFHO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLFNBQVM7Q0FDcEIsQ0FBQTtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBNkRDO1FBMURHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQUcsRUFBRSxDQUFBOztJQXFEYixDQUFDO0lBcERHLHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUzQyxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFN0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFRCwrQkFBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBRWhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN6QyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUE7WUFDekMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxRCxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUcsQ0FBQyxDQUFDLElBQU0sQ0FBQTtZQUMvRCxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGlCQUFLLENBQUMsQ0FBQyxLQUFPLENBQUE7WUFDOUQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUM1RixTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUcsQ0FBQyxDQUFDLE1BQVEsQ0FBQTtZQUMzRCxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQTtZQUM3QyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7WUFDOUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3hGLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTtTQUNsQztJQUNMLENBQUM7SUFFRCx1QkFBTyxHQUFQO0lBQ0EsQ0FBQztJQUVELCtCQUFlLEdBQWY7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBRSxFQUFFLEdBQUc7WUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZGLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHlCQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1AsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckQsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUN0QixPQUFNO1NBQ1Q7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFNO1NBQ1Q7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNHO0lBTkosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTZEekI7SUFBRCxZQUFDO0NBN0RELEFBNkRDLENBN0RrQyxFQUFFLENBQUMsU0FBUyxHQTZEOUM7a0JBN0RvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2tpbGxDZmcgPSBbXG4gICAgeyBuYW1lOiAn6YeN5Ye7JywgbGltaXQ6IDEsIGljb246IDAsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDE1MCXkvKTlrrMnIH0sXG4gICAgeyBuYW1lOiAn54Gr54KO5by5JywgbGltaXQ6IDgsIHN0cmluZzogJ+WPkeWwhOS4gOS4queBq+eQg+mAoOaIkDEzMCXkvKTlrrMs5a+55pWM5Lq66YCg5oiQNjAl54On5Lyk5Lyk5a6z5oyB57utMuWbnuWQiCcsIGljb246IDEgfSxcbiAgICB7IG5hbWU6ICfni4LmgJInLCBsaW1pdDogMTYsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDEwMCXkvKTlrrMs6ZmN5L2O5pWM5Lq6MzAl5pS75Ye7LOaMgee7rTPlm57lkIgnLCBpY29uOiAyIH0sXG4gICAgeyBuYW1lOiAn5peL6aOO5papJywgbGltaXQ6IDI0LCBzdHJpbmc6ICflr7nmlYzkurrpgKDmiJAy5qyhNjAl5Lyk5a6z5L2/55uu5qCH55yp5pmVMeWbnuWQiCcsIGljb246IDMgfSxcbiAgICB7IG5hbWU6ICfprZTms5XmiqTnm74nLCBsaW1pdDogMzIsIHN0cmluZzogJ+mYsuW+oeaPkOWNhzMwJSzmjIHnu6005Zue5ZCIJywgaWNvbjogNCB9LFxuICAgIHsgbmFtZTogJ+mbt+aatCcsIGxpbWl0OiAzOCwgc3RyaW5nOiAn5Y+s5ZSk6Zu355S15omT5Ye75pWM5Lq6LOmAoOaIkDE1MCXkvKTlrrMs5L2/5pWM5Lq65Y+X5YiwOTAl55S15Ye75Lyk5a6z5oyB57utMuWbnuWQiCcsIGljb246IDUgfSxcbiAgICB7IG5hbWU6ICfll5zooYAnLCBsaW1pdDogNDIsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDIwMCXkvKTlrrMs5ZC45pS2MjAl5Z+656GA5Lyk5a6z6L2s5YyW5Li66Ieq5bex55qE55Sf5ZG9JywgaWNvbjogNiB9LFxuICAgIHsgbmFtZTogJ+mHjeWHuyjpq5jnuqcpJywgbGltaXQ6IDUyLCBzdHJpbmc6ICflr7nmlYzkurrpgKDmiJAyNDAl5Lyk5a6zJywgaWNvbjogMCB9LFxuICAgIHsgbmFtZTogJ+eBq+eCjuW8uSjpq5jnuqcpJywgbGltaXQ6IDU4LCBzdHJpbmc6ICflj5HlsITkuIDkuKrngavnkIPpgKDmiJAyMDAl5Lyk5a6zLOWvueaVjOS6uumAoOaIkDcwJeeDp+S8pOS8pOWus+aMgee7rTPlm57lkIgnLCBpY29uOiAxIH0sXG4gICAgeyBuYW1lOiAn54uC5oCSKOmrmOe6pyknLCBsaW1pdDogNjQsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDIyMCXkvKTlrrMs6ZmN5L2O5pWM5Lq6MzUl5pS75Ye7LOaMgee7rTPlm57lkIgnLCBpY29uOiAyIH0sXG4gICAgeyBuYW1lOiAn5peL6aOO5papKOmrmOe6pyknLCBsaW1pdDogNzQsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDLmrKExMDAl5Lyk5a6z5L2/55uu5qCH55yp5pmVMeWbnuWQiCcsIGljb246IDMgfSxcbiAgICB7IG5hbWU6ICfprZTms5XmiqTnm74o6auY57qnKScsIGxpbWl0OiA4MCwgc3RyaW5nOiAn6Ziy5b6h5o+Q5Y2HNTAlLOaMgee7rTXlm57lkIgnLCBpY29uOiA0IH0sXG4gICAgeyBuYW1lOiAn6Zu35pq0KOmrmOe6pyknLCBsaW1pdDogMTAwLCBzdHJpbmc6ICflj6zllKTpm7fnlLXmiZPlh7vmlYzkuros6YCg5oiQMjMwJeS8pOWusyzkvb/mlYzkurrlj5fliLAxMTAl55S15Ye75Lyk5a6z5oyB57utMuWbnuWQiCcsIGljb246IDUgfSxcbiAgICB7IG5hbWU6ICfll5zooYAo6auY57qnKScsIGxpbWl0OiAzMDAsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDI0MCXkvKTlrrMs5ZC45pS2MzAl5Z+656GA5Lyk5a6z6L2s5YyW5Li66Ieq5bex55qE55Sf5ZG9JywgaWNvbjogNiB9LFxuICAgIHsgbmFtZTogJ+mHjeWHuyjnu4jnuqcpJywgbGltaXQ6IDUwMCwgc3RyaW5nOiAn5a+55pWM5Lq66YCg5oiQMzAwJeS8pOWusycsIGljb246IDAgfSxcbiAgICB7IG5hbWU6ICfngavngo7lvLko57uI57qnKScsIGxpbWl0OiA3MDAsIHN0cmluZzogJ+WPkeWwhOS4gOS4queBq+eQg+mAoOaIkDI0MCXkvKTlrrMs5a+55pWM5Lq66YCg5oiQOTAl54On5Lyk5Lyk5a6z5oyB57utNOWbnuWQiCcsIGljb246IDEgfSxcbiAgICB7IG5hbWU6ICfni4LmgJIo57uI57qnKScsIGxpbWl0OiA4MDAsIHN0cmluZzogJ+WvueaVjOS6uumAoOaIkDI2MCXkvKTlrrMs6ZmN5L2O5pWM5Lq6NDAl5pS75Ye7LOaMgee7rTPlm57lkIgnLCBpY29uOiAyIH0sXG4gICAgeyBuYW1lOiAn5peL6aOO5papKOe7iOe6pyknLCBsaW1pdDogMTAwMCwgc3RyaW5nOiAn5a+55pWM5Lq66YCg5oiQMuasoTEyMCXkvKTlrrPkvb/nm67moIfnnKnmmZUx5Zue5ZCIJywgaWNvbjogMyB9LFxuICAgIHsgbmFtZTogJ+mtlOazleaKpOebvijnu4jnuqcpJywgbGltaXQ6IDEyMDAsIHN0cmluZzogJ+mYsuW+oeaPkOWNhzYwJSzmjIHnu6015Zue5ZCIJywgaWNvbjogNCB9LFxuICAgIHsgbmFtZTogJ+mbt+aatCjnu4jnuqcpJywgbGltaXQ6IDE0MDAsIHN0cmluZzogJ+WPrOWUpOmbt+eUteaJk+WHu+aVjOS6uizpgKDmiJAyNjAl5Lyk5a6zLOS9v+aVjOS6uuWPl+WIsDEzMCXnlLXlh7vkvKTlrrPmjIHnu60y5Zue5ZCIJywgaWNvbjogNSB9LFxuXVxuXG5jb25zdCBTa2lsbENvbG9yID0ge1xuICAgIE5vcm1vbDogJyNmZmRkOGMnLFxuICAgIEZvcmJpZDogJyNmZjAwMDAnLFxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGluZm8gPSBbXVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uZW50ZXIgPSB0aGlzLm9uZW50ZXIuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuaW5mbyA9IEdldExvY2FsU3RvcmFnZSgnc2tpbGxfaW5mbycsIFtdKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlU2tpbGxJdGVtKClcbiAgICB9XG5cbiAgICBjcmVhdGVTa2lsbEl0ZW0oKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTa2lsbENmZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGQgPSBTa2lsbENmZ1tpXVxuICAgICAgICAgICAgbGV0IGNsb25lSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcbiAgICAgICAgICAgIGxldCBhY2hpZXZlID0gZC5saW1pdCA8PSBQbGF5ZXJJbmZvLmxldmVsXG4gICAgICAgICAgICBjbG9uZUl0ZW0uUGF0aENoaWxkKCdpY29uJywgJ011bHRpRnJhbWUnKS5TZXRGcmFtZShkLmljb24pXG4gICAgICAgICAgICBjbG9uZUl0ZW0uUGF0aENoaWxkKCdza2lsbG5hbWUnLCBjYy5MYWJlbCkuc3RyaW5nID0gYCR7ZC5uYW1lfWBcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ2xpbWl0JywgY2MuTGFiZWwpLnN0cmluZyA9IGDnrYnnuqcke2QubGltaXR9YFxuICAgICAgICAgICAgY2xvbmVJdGVtLlBhdGhDaGlsZCgnbGltaXQnKS5jb2xvciA9IGFjaGlldmUgPyBjYy5jb2xvcigyNTUsIDIyMSwgMTQwKSA6IGNjLmNvbG9yKDI1NSwgMCwgMClcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ2RlcycsIGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtkLnN0cmluZ31gXG4gICAgICAgICAgICBjbG9uZUl0ZW0uUGF0aENoaWxkKCdtYXNrJykuYWN0aXZlID0gIWFjaGlldmVcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ3NlbGVjdCcpLmFjdGl2ZSA9IGFjaGlldmVcbiAgICAgICAgICAgIGNsb25lSXRlbS5QYXRoQ2hpbGQoJ3NlbGVjdCcsICdNdWx0aUZyYW1lJykuU2V0RnJhbWUodGhpcy5pbmZvLmluZGV4T2YoaSkgPT0gLTEgPyAwIDogMSlcbiAgICAgICAgICAgIGNsb25lSXRlbS5pZHggPSBpXG4gICAgICAgICAgICBjbG9uZUl0ZW0ucGFyZW50ID0gdGhpcy5jb250ZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmVudGVyKCkge1xuICAgIH1cblxuICAgIHVwZGF0ZVNraWxsSXRlbSgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LkVhY2hDaGlsZCgoaXQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaXQuUGF0aENoaWxkKCdzZWxlY3QnLCAnTXVsdGlGcmFtZScpLlNldEZyYW1lKHRoaXMuaW5mby5pbmRleE9mKGlkeCkgPT0gLTEgPyAwIDogMSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbGlja0l0ZW0oZSkge1xuICAgICAgICBsZXQgZXhpc3RJZHggPSB0aGlzLmluZm8uaW5kZXhPZihlLnRhcmdldC5wYXJlbnQuaWR4KVxuICAgICAgICBpZiAoZXhpc3RJZHggIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5mby5zcGxpY2UoZXhpc3RJZHgsIDEpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNraWxsSXRlbSgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbmZvLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZm8ucHVzaChlLnRhcmdldC5wYXJlbnQuaWR4KVxuICAgICAgICB0aGlzLmluZm8uc29ydCgoYSwgYikgPT4geyByZXR1cm4gYSAtIGIgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmZvKVxuICAgICAgICB0aGlzLnVwZGF0ZVNraWxsSXRlbSgpXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/tool/CCExtend.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d308v2KFNBPb2gIoGPCpiJ', 'CCExtend');
// resources/tool/CCExtend.ts

cc.Node.prototype.PathChild = function (path, componentName) {
    var names = path.split('/');
    var node = null;
    for (var i = 0; i < names.length; i++) {
        if (node) {
            node = node.getChildByName(names[i]);
        }
        else {
            node = this.getChildByName(names[i]);
        }
    }
    if (!node) {
        return cc.error("node is not exist(" + path + ")");
    }
    if (componentName) {
        return node.getComponent(componentName);
    }
    return node;
};
cc.Node.prototype.EachChild = function (cb) {
    this.children.forEach(function (child, idx) {
        cb(child, idx);
    });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvdG9vbC9DQ0V4dGVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxJQUFJLEVBQUUsYUFBYztJQUN4RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDdkM7YUFBTTtZQUNILElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3ZDO0tBQ0o7SUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1AsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUFxQixJQUFJLE1BQUcsQ0FBQyxDQUFBO0tBQ2hEO0lBQ0QsSUFBSSxhQUFhLEVBQUU7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUE7S0FDMUM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQTtBQUVELEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLEVBQUU7SUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztRQUM3QixFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2xCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuTm9kZS5wcm90b3R5cGUuUGF0aENoaWxkID0gZnVuY3Rpb24gKHBhdGgsIGNvbXBvbmVudE5hbWU/KSB7XG4gICAgbGV0IG5hbWVzID0gcGF0aC5zcGxpdCgnLycpXG5cbiAgICBsZXQgbm9kZSA9IG51bGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShuYW1lc1tpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmdldENoaWxkQnlOYW1lKG5hbWVzW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm4gY2MuZXJyb3IoYG5vZGUgaXMgbm90IGV4aXN0KCR7cGF0aH0pYClcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2V0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG59XG5cbmNjLk5vZGUucHJvdG90eXBlLkVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGlkeCkgPT4ge1xuICAgICAgICBjYihjaGlsZCwgaWR4KVxuICAgIH0pXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/tool/UiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1afady4EtBuYi5GMPLivj1', 'UiManager');
// resources/tool/UiManager.ts

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
exports.UiManager = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiManager = /** @class */ (function (_super) {
    __extends(UiManager, _super);
    function UiManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiLayer = null;
        _this.propLayer = null;
        return _this;
    }
    UiManager.prototype.onLoad = function () {
        window.UiMgr = this;
        this.uiPrefabCache = {};
        this.propPrefabCache = {};
    };
    UiManager.prototype.show = function (name, args) {
        var _this = this;
        cc.log("show prefab: " + name);
        var pb = this.uiPrefabCache[name];
        if (pb) {
            pb.active = true;
            pb.onenter && pb.onenter(args);
        }
        else {
            cc.resources.load("prefab/" + name, cc.Prefab, function (err, prefab) {
                if (err) {
                    return cc.error(err);
                }
                pb = cc.instantiate(prefab);
                pb.parent = _this.node;
                _this.uiPrefabCache[name] = pb;
                pb.active = true;
                pb.onenter && pb.onenter(args);
            });
        }
    };
    UiManager.prototype.close = function (args) {
        var name = args;
        if (typeof args == 'object') {
            name = args.node.name;
        }
        cc.log("close prefab: " + name);
        var panel = this.uiPrefabCache[name];
        if (panel) {
            panel.onleave && panel.onleave();
            panel.active = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], UiManager.prototype, "uiLayer", void 0);
    __decorate([
        property(cc.Node)
    ], UiManager.prototype, "propLayer", void 0);
    UiManager = __decorate([
        ccclass
    ], UiManager);
    return UiManager;
}(cc.Component));
exports.UiManager = UiManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvdG9vbC9VaU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBa0RDO1FBL0NHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUE0QzlCLENBQUM7SUF4Q0csMEJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCx3QkFBSSxHQUFKLFVBQUssSUFBSSxFQUFFLElBQUs7UUFBaEIsaUJBa0JDO1FBakJHLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWdCLElBQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxFQUFFLEVBQUU7WUFDSixFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQixFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVUsSUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtnQkFDdkQsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUwsVUFBTSxJQUFJO1FBQ04sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN6QjtRQUVELEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQWlCLElBQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxLQUFLLEVBQUU7WUFDUCxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNMLENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBTmpCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FrRHJCO0lBQUQsZ0JBQUM7Q0FsREQsQUFrREMsQ0FsRDhCLEVBQUUsQ0FBQyxTQUFTLEdBa0QxQztBQWxEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVWlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJvcExheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHVpUHJlZmFiQ2FjaGU6IE9iamVjdFxuICAgIHByb3BQcmVmYWJDYWNoZTogT2JqZWN0XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB3aW5kb3cuVWlNZ3IgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudWlQcmVmYWJDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnByb3BQcmVmYWJDYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIHNob3cobmFtZSwgYXJncz8pIHtcbiAgICAgICAgY2MubG9nKGBzaG93IHByZWZhYjogJHtuYW1lfWApO1xuICAgICAgICBsZXQgcGIgPSB0aGlzLnVpUHJlZmFiQ2FjaGVbbmFtZV07XG4gICAgICAgIGlmIChwYikge1xuICAgICAgICAgICAgcGIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBiLm9uZW50ZXIgJiYgcGIub25lbnRlcihhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGBwcmVmYWIvJHtuYW1lfWAsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHBiLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpUHJlZmFiQ2FjaGVbbmFtZV0gPSBwYjtcbiAgICAgICAgICAgICAgICBwYi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBiLm9uZW50ZXIgJiYgcGIub25lbnRlcihhcmdzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZShhcmdzKSB7XG4gICAgICAgIGxldCBuYW1lID0gYXJncztcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBuYW1lID0gYXJncy5ub2RlLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYGNsb3NlIHByZWZhYjogJHtuYW1lfWApO1xuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLnVpUHJlZmFiQ2FjaGVbbmFtZV07XG4gICAgICAgIGlmIChwYW5lbCkge1xuICAgICAgICAgICAgcGFuZWwub25sZWF2ZSAmJiBwYW5lbC5vbmxlYXZlKCk7XG4gICAgICAgICAgICBwYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/define/AttributeDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cb7cXB6kZH45a3cyehM/VC', 'AttributeDef');
// resources/define/AttributeDef.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeDef = void 0;
var AttributeDef = /** @class */ (function () {
    function AttributeDef() {
    }
    return AttributeDef;
}());
exports.AttributeDef = AttributeDef;
window.AttributeDef = new AttributeDef();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvZGVmaW5lL0F0dHJpYnV0ZURlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBYUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxvQ0FBWTtBQWV6QixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXR0cmlidXRlRGVmIHtcbiAgICAvKiDnlJ/lkb0gKi9ocDogbnVtYmVyXG4gICAgLyog5pS75Ye7ICovYXR0YWNrOiBudW1iZXJcbiAgICAvKiDpmLLlvqEgKi9kZWZlbnNlOiBudW1iZXJcbiAgICAvKiDlkb3kuK0gKi9oaXQ6IG51bWJlclxuICAgIC8qIOmXqumBvyAqL2RvZGdlOiBudW1iZXJcbiAgICAvKiDmmrTlh7sgKi9jcml0OiBudW1iZXJcbiAgICAvKiDmmrTlh7vkvKTlrrMgKi9jcml0SHVydDogbnVtYmVyXG4gICAgLyog6LSf6Z2i5oqX5oCnICovaG9sZG91dDogbnVtYmVyXG4gICAgLyog55Sf5ZG95oGi5aSNICovaHBCYWNrOiBudW1iZXJcbiAgICAvKiDnianlk4HmjonokL0gKi9tYXRlcmlhbERyb3A6IG51bWJlclxuICAgIC8qIOmHkeW4geaOieiQvSAqL2dvbGREcm9wOiBudW1iZXJcbiAgICAvKiDnu4/pqozliqDlsYIgKi9leHBQbHVzOiBudW1iZXJcbn1cblxud2luZG93LkF0dHJpYnV0ZURlZiA9IG5ldyBBdHRyaWJ1dGVEZWYoKVxuIl19
//------QC-SOURCE-SPLIT------
