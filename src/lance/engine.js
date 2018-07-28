import ClientEngine from "lance-gg/es5/ClientEngine";
import KeyboardControls from "lance-gg/es5/controls/KeyboardControls";
import MyRenderer from "./renderer";

export default class MyClientEngine extends ClientEngine {
  constructor(gameEngine, options) {
    super(gameEngine, options, MyRenderer);

    this.controls = new KeyboardControls(this);
    this.controls.bindKey("up", "up", { repeat: true });
    this.controls.bindKey("down", "down", { repeat: true });
  }
  start = params => {
    if (this.started) return;
    super.start(params);
    this.started = true;
  };
}
