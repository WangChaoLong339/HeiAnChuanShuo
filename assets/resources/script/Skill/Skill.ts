const SkillCfg = [
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
]

const SkillColor = {
    Normol: '#ffdd8c',
    Forbid: '#ff0000',
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class Skill extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    item: cc.Node = null;

    info = []
    onLoad() {
        this.node.onenter = this.onenter.bind(this)

        this.info = GetLocalStorage('skill_info', [])

        this.createSkillItem()
    }

    createSkillItem() {
        this.content.removeAllChildren()

        for (let i = 0; i < SkillCfg.length; i++) {
            let d = SkillCfg[i]
            let cloneItem = cc.instantiate(this.item)
            let achieve = d.limit <= PlayerInfo.level
            cloneItem.PathChild('icon', 'MultiFrame').SetFrame(d.icon)
            cloneItem.PathChild('skillname', cc.Label).string = `${d.name}`
            cloneItem.PathChild('limit', cc.Label).string = `等级${d.limit}`
            cloneItem.PathChild('limit').color = achieve ? cc.color(255, 221, 140) : cc.color(255, 0, 0)
            cloneItem.PathChild('des', cc.Label).string = `${d.string}`
            cloneItem.PathChild('mask').active = !achieve
            cloneItem.PathChild('select').active = achieve
            cloneItem.PathChild('select', 'MultiFrame').SetFrame(this.info.indexOf(i) == -1 ? 0 : 1)
            cloneItem.idx = i
            cloneItem.parent = this.content
        }
    }

    onenter() {
    }

    updateSkillItem() {
        this.content.EachChild((it, idx) => {
            it.PathChild('select', 'MultiFrame').SetFrame(this.info.indexOf(idx) == -1 ? 0 : 1)
        })
    }

    clickItem(e) {
        let existIdx = this.info.indexOf(e.target.parent.idx)
        if (existIdx != -1) {
            this.info.splice(existIdx, 1)
            this.updateSkillItem()
            return
        }
        if (this.info.length == 3) {
            return
        }
        this.info.push(e.target.parent.idx)
        this.info.sort((a, b) => { return a - b })
        console.log(this.info)
        this.updateSkillItem()
    }
}
