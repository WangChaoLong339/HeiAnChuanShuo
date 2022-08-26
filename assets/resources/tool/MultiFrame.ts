const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiFrame extends cc.Component {

    @property(cc.SpriteFrame)
    multiFrame: cc.SpriteFrame[] = [];

    protected onLoad(): void {

    }

    public SetFrame(idx: number): void {
        if (idx >= this.multiFrame.length) {
            return cc.error(`Cross the border ${idx}/${this.multiFrame.length}`);
        }

        this.node.getComponent(cc.Sprite).spriteFrame = this.multiFrame[idx];
    }
}
