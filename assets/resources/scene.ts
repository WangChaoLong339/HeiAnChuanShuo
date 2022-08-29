const { ccclass, property } = cc._decorator;

@ccclass
export default class scene extends cc.Component {

    onLoad() {
        PlayerInfo = {
            id: 10086,
            nickname: '勇士001',
            title: 0,
            gold: 1000,
            diam: 888,
            level: 8,
            exp: 100,
        }
    }

    start() {
        UiMgr.show('Home')
    }
}
