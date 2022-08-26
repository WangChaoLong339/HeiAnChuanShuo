const { ccclass, property } = cc._decorator;

@ccclass
export default class Hall extends cc.Component {

    protected onLoad(): void {
        this.node.onenter = this.onenter.bind(this)

        UiMgr.show('Home')
    }

    protected onDestroy(): void {
    }

    public onenter(): void {
    }
}