
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