const AttributeCfg = [
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
]

const EquipCfg = [
    { helmet: '头盔' },
    { necklace: '项链' },
    { clothing: '衣服' },
    { glove: '手套' },
    { pants: '裤子' },
    { ring: '戒子' },
    { weapon: '武器' },
    { shoe: '鞋子' },
]

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null

    @property(cc.Node)
    item: cc.Node = null

    info = {
        /* 生命 */hp: 100,
        /* 攻击 */attack: 20,
        /* 防御 */defense: 8,
        /* 命中 */hit: 35,
        /* 闪避 */dodge: 3,
        /* 暴击 */crit: 56,
        /* 暴击伤害 */critHurt: 88,
        /* 负面抗性 */holdout: 70,
        /* 生命恢复 */hpBack: 20,
        /* 物品掉落 */materialDrop: 150,
        /* 物品掉落 */goldDrop: 150,
        /* 经验加层 */expPlus: 230,
    }
    onLoad() {
        this.node.onenter = this.onenter.bind(this)

        this.createAttribute()
    }

    createAttribute() {
        this.content.removeAllChildren()
        for (let i = 0; i < AttributeCfg.length / 2; i++) {
            let cloneItem = cc.instantiate(this.item)
            cloneItem.parent = this.content
        }
    }

    onenter() {
        this.updateAttribute()
        this.updateEquip()
    }

    getDataByIdx(idx) {
        let data = []
        for (let i in AttributeCfg[idx]) {
            let d = { title: AttributeCfg[idx][i], val: this.info[i] }
            data.push(d)
        }
        for (let i in AttributeCfg[idx + AttributeCfg.length / 2]) {
            let d = { title: AttributeCfg[idx + AttributeCfg.length / 2][i], val: this.info[i] }
            if (idx > 2) { d.val += '%' }
            data.push(d)
        }
        return data
    }

    updateAttribute() {
        this.content.EachChild((item: cc.Node, index) => {
            let data = this.getDataByIdx(index)
            item.EachChild((it, idx) => {
                it.getComponent(cc.Label).string = `${data[idx].title}: ${data[idx].val}`
            })
        })
    }

    updateEquip() {
    }
}
