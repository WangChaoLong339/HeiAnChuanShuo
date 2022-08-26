const TabCfg = [
    '装备',
    '道具',
    '全部',
    '排序',
    '分解',
]

const { ccclass, property } = cc._decorator;

@ccclass
export default class Backpack extends cc.Component {

    @property(cc.Node)
    tabContent: cc.Node = null

    @property(cc.Node)
    tabItem: cc.Node = null

    currentTabIdx: number
    onLoad() {
        this.node.onenter = this.onenter.bind(this)
        this.currentTabIdx = 0
        this.createTabs()
        this.updateTabItem()
    }

    createTabs() {
        this.tabContent.removeAllChildren()
        for (let i = 0; i < TabCfg.length; i++) {
            let cloneTabItem = cc.instantiate(this.tabItem)
            cloneTabItem.PathChild('val', cc.Label).string = `${TabCfg[i]}`
            cloneTabItem.idx = i
            cloneTabItem.parent = this.tabContent
        }
    }

    onenter() {
    }

    updateTabItem() {
        this.tabContent.EachChild((it: cc.Node, idx) => { it.getComponent('MultiFrame').SetFrame(this.currentTabIdx == idx ? 0 : 1) })
    }

    updatePage() {
    }

    btnTabItem(e) {
        this.currentTabIdx = e.target.idx
        this.updateTabItem()
    }
}
