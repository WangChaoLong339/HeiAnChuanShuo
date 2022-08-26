export class EventManager {

    private events = {}
    latestMessages: any

    clear(name) {
        let list = this.events[name] || []
        list.length = 0
    }

    on(name, target, cb) {
        this.events[name] = this.events[name] || []
        this.events[name].push({
            target: target,
            cb: cb,
        })
    }

    off(name, target) {
        let list = this.events[name] || []

        for (let i = 0; i < list.length; i++) {
            if (list[i] && list[i].target == target) {
                list[i] = null
            }
        }
    }

    emit(name, ...args: any[]) {
        let list = this.events[name] || []
        let trim = false

        cc.log("eventMgr.emit", name, list.length, JSON.stringify(args))

        for (let i = 0; i < list.length; i++) {
            if (list[i]) {
                list[i].cb.apply(null, args)
            } else {
                trim = true
            }
        }

        if (trim) {
            let cnt = 0
            for (let i = 0; i < list.length; i++) {
                if (list[i]) {
                    list[cnt++] = list[i]
                }
            }
            list.length = cnt
            cc.log('EventManager trim', name, list.length, cnt)
        }
    }
}

window.EventManager = new EventManager()
