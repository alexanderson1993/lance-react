import DynamicObject from "lance-gg/es5/serialize/DynamicObject";

export default class PlayerAvatar extends DynamicObject {
  static get netScheme() {
    return Object.assign(
      {
        // add serializable properties here
      },
      super.netScheme
    );
  }

  constructor(gameEngine, options, props) {
    super(gameEngine, options, props);
    this.class = PlayerAvatar;
  }
}
