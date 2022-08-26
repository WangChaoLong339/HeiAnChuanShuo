const { ccclass, property } = cc._decorator;

@ccclass
export default class Topbar extends cc.Component {

    @property(cc.Node)
    info: cc.Node = null;

    player: any
    protected onLoad(): void {
        // 升级监听
        EventManager.on('player_upgrade', this, () => { this.info.PathChild('level/val', cc.Label).string = `${PlayerInfo.level}`; })
        // 金币监听
        EventManager.on('player_gold', this, () => { this.info.PathChild('gold', cc.Label).string = `${PlayerInfo.gold}`; })
        // 魔石监听
        EventManager.on('player_diam', this, () => { this.info.PathChild('diam', cc.Label).string = `${PlayerInfo.diam}`; })
        // 经验监听
        EventManager.on('player_exp', this, () => {
            this.info.PathChild('exp/mask').width = PlayerInfo.exp / this.getNextLevelExp(PlayerInfo.level) * this.info.PathChild('exp').width;
            this.info.PathChild('exp/val', cc.Label).string = `${PlayerInfo.exp}/${this.getNextLevelExp(PlayerInfo.level)}`;
        })
    }

    protected onDisable(): void {
        EventManager.off('player_upgrade', this)
        EventManager.off('player_gold', this)
        EventManager.off('player_diam', this)
        EventManager.off('player_exp', this)
    }

    protected onEnable(): void {
        // 称号
        this.info.PathChild('title/val', cc.Label).string = `${this.getTitle(PlayerInfo.title)}`;
        // 等级
        this.info.PathChild('level/val', cc.Label).string = `${PlayerInfo.level}`;
        // 昵称
        this.info.PathChild('nickname', cc.Label).string = `${PlayerInfo.nickname}`;
        // 金币
        this.info.PathChild('gold', cc.Label).string = `${PlayerInfo.gold}`;
        // 魔石
        this.info.PathChild('diam', cc.Label).string = `${PlayerInfo.diam}`;
        // ID
        this.info.PathChild('id', cc.Label).string = `ID:${PlayerInfo.id}`;
        // 经验
        this.info.PathChild('exp/mask').width = PlayerInfo.exp / this.getNextLevelExp(PlayerInfo.level) * this.info.PathChild('exp').width;
        this.info.PathChild('exp/val', cc.Label).string = `${PlayerInfo.exp}/${this.getNextLevelExp(PlayerInfo.level)}`;
    }

    private getNextLevelExp(lv: number) {
        return 1000;
    }

    private getTitle(val: number) {
        return '无';
    }
}
