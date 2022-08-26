// 手动
import { AttributeDef } from "./assets/resources/define/AttributeDef"
import { EventManager } from "./assets/resources/tool/EventManager"
import { UiManager } from "./assets/resources/tool/UiManager"

declare global {
    export var UiMgr: UiManager
    export var EventManager: EventManager
    export var EnterGameTime: number
    export var SetLocalStorage: Function
    export var GetLocalStorage: Function
    export var RegisterGlobal: Function
    export var UnRegisterGlobal: Function
    export var Clone: Function
    export var RandomInt: Function
    export var IsEmpty: Function
    export var SetSpriteFrame: Function
    export var GetViewSize: Function
    export var PlayerInfo: {
        id: number
        nickname: string
        title: number
        gold: number
        diam: number
        level: number
        exp: number
    }

    export var AttributeDef: AttributeDef

    namespace cc {
        export interface Node {
            // node active change to true
            onenter: Function,
            // node active change to false
            onleave: Function,

            PathChild: Function,
            EachChild: Function,

            // child node index in parent
            idx: number,
        }
    }

    export interface Date {
        Format: Function
    }
}