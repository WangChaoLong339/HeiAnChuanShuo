import { MapCfg } from "../../config/MapCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Adventure extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    item: cc.Node = null;

    protected onLoad(): void {
        this.node.onenter = this.onenter.bind(this);
        this.node.onleave = this.onleave.bind(this);

        this.creatMapItem()
    }

    public onenter(): void {
    }

    public onleave(): void {
    }

    creatMapItem() {
        this.content.removeAllChildren();

        for (let i = 0; i < MapCfg.length; i++) {
            let cloneItem = cc.instantiate(this.item)
            cloneItem.PathChild('mapFrame', 'MultiFrame').SetFrame(i)
            cloneItem.PathChild('mapNameVal', cc.Label).string = `${MapCfg[i].name}`
            cloneItem.PathChild('mapLimitVal', cc.Label).string = `${MapCfg[i].level}`
            cloneItem.idx = i
            cloneItem.parent = this.content
        }
    }

    btnItem(e) {
        cc.error(MapCfg[e.target.idx].name)
    }
}
