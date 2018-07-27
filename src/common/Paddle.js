import DynamicObject from "lance-gg/es5/serialize/DynamicObject";

export default class Paddle extends DynamicObject {
  constructor(gameEngine, options, props) {
    super(gameEngine, options, props);
    if (props && props.playerId) this.playerId = props.playerId;
    this.class = Paddle;
  }

  onAddToWorld(gameEngine) {
    if (gameEngine.renderer) {
      gameEngine.renderer.addSprite(this, "paddle");
    }
  }
}
