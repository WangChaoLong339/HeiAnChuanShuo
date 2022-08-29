const { ccclass, property } = cc._decorator;

@ccclass
export class UiManager extends cc.Component {

    @property(cc.Node)
    uiLayer: cc.Node = null;

    @property(cc.Node)
    propLayer: cc.Node = null;

    uiPrefabCache: Object
    propPrefabCache: Object
    lastPrefab: any
    onLoad() {
        window.UiMgr = this;

        this.uiPrefabCache = {};
        this.propPrefabCache = {};
        this.lastPrefab = null;
    }

    show(name, args?) {
        cc.log(`show prefab: ${name}`);
        let pb = this.uiPrefabCache[name];
        if (pb) {
            if (this.lastPrefab) { this.lastPrefab.setSiblingIndex(0) }
            pb.setSiblingIndex(this.node.childrenCount)
            pb.active = true;
            pb.onenter && pb.onenter(args);
        } else {
            cc.resources.load(`prefab/${name}`, cc.Prefab, (err, prefab) => {
                if (err) {
                    return cc.error(err);
                }
                pb = cc.instantiate(prefab);
                pb.parent = this.node;
                this.uiPrefabCache[name] = pb;
                pb.active = true;
                pb.onenter && pb.onenter(args);
            })
        }
    }

    close(args) {
        let name = args;
        if (typeof args == 'object') {
            name = args.node.name;
        }

        cc.log(`close prefab: ${name}`);
        let panel = this.uiPrefabCache[name];
        if (panel) {
            panel.onleave && panel.onleave();
            panel.active = false;
        }
    }
}