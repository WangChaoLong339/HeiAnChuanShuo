const HallCfg = [
    { name: '主页', pfb: 'Home' },
    { name: '角色', pfb: 'Player' },
    { name: '背包', pfb: 'Backpack' },
    { name: '技能', pfb: 'Skill' },
    { name: '其他', pfb: 'Other' },
]

const { ccclass, property } = cc._decorator;

@ccclass
export default class Footbar extends cc.Component {

    @property(cc.Node)
    layout: cc.Node = null;

    @property(cc.Node)
    item: cc.Node = null;

    currPageIdx: number
    onLoad(): void {
        this.currPageIdx = 0;
        this.createItem()
        this.updateButtons();
    }

    createItem() {
        this.layout.removeAllChildren()
        for (let i = 0; i < HallCfg.length; i++) {
            let cloneItem = cc.instantiate(this.item)
            cloneItem.PathChild('val', cc.Label).string = `${HallCfg[i].name}`
            cloneItem.idx = i
            cloneItem.parent = this.layout
        }
    }

    protected updateButtons(): void {
        this.layout.children.forEach((it, idx) => {
            it.getComponent('MultiFrame').SetFrame(idx == this.currPageIdx ? 1 : 0);
        })
    }

    clickItem(e) {
        // if (this.currPageIdx == e.target.idx) { return }
        // UiMgr.close(HallCfg[this.currPageIdx].pfb)
        this.currPageIdx = e.target.idx;
        this.updateButtons();

        UiMgr.show(`${HallCfg[this.currPageIdx].pfb}`)
    }
}
