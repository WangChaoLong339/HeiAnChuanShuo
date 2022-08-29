const HomeCfg = [
    { name: '黑市', pfb: '', levelLimit: 5, },
    { name: '铁匠铺', pfb: '', levelLimit: 8, },
    { name: '成就', pfb: '', levelLimit: 0, },
    { name: '冒险', pfb: 'Adventure', levelLimit: 0, },
    { name: '副本', pfb: '', levelLimit: 10, },
    { name: '深渊', pfb: '', levelLimit: 30, },
]

const { ccclass, property } = cc._decorator;

@ccclass
export default class Home extends cc.Component {

    @property(cc.Node)
    root: cc.Node = null;

    @property(cc.Node)
    item: cc.Node = null;

    protected onLoad(): void {
        this.node.onenter = this.onenter.bind(this);
        this.node.onleave = this.onleave.bind(this);
        this.createHomeItem();
        EventManager.on('player_upgrade', this, this.updateItemLock.bind(this))
    }

    protected onDestroy(): void {
        EventManager.off('player_upgrade', this)
    }

    public onenter(): void {
        this.updateItemLock()
    }

    public onleave(): void {
    }

    private createHomeItem(): void {
        this.root.removeAllChildren()
        let viewSize: cc.Rect = GetViewSize();
        for (let i = 0; i < HomeCfg.length; i++) {
            let cloneItem = cc.instantiate(this.item)
            cloneItem.PathChild('val', cc.Label).string = `${HomeCfg[i].name}`
            cloneItem.getComponent('MultiFrame').SetFrame(i)
            cloneItem.idx = i
            cloneItem.parent = this.root
            cloneItem.x = (i % 3 - 1) * (viewSize.width / 3 - 20)
            cloneItem.y = (1 - Math.floor(i / 3) + 0.5) * this.item.height + (1 - Math.floor(i / 3)) * 40
        }
    }

    private updateItemLock(): void {
        this.root.EachChild((it, idx) => {
            it.PathChild('lock').active = HomeCfg[idx].levelLimit > PlayerInfo.level
        })
    }

    clickItem(e) {
        let idx = e.target.idx

        let d = HomeCfg[idx]

        if (d.levelLimit > PlayerInfo.level) { return }

        UiMgr.show(d.pfb)
    }
}
