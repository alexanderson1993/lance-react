import Renderer from "lance-gg/es5/render/Renderer";
import serializeDynamicObject from "./helpers/serializeDynamicObject";
import ObjectsContainer from "../containers/objects";

export default class MyRenderer extends Renderer {
  constructor(gameEngine, clientEngine) {
    super(gameEngine, clientEngine);
    this.sprites = {};
  }

  draw(t, dt) {
    super.draw(t, dt);
    const serializedObjects = Object.values(this.gameEngine.world.objects).map(
      serializeDynamicObject
    );
    const paddle1 = serializedObjects[0];
    const paddle2 = serializedObjects[1];
    const ball = serializedObjects[2];
    ObjectsContainer.setState({ paddle1, paddle2, ball });
    // debugger;
    // console.log("Drawing!", { t, dt });
    // for (let objId of Object.keys(this.sprites)) {
    //   if (this.sprites[objId].el) {
    //     this.sprites[objId].el.style.top =
    //       this.gameEngine.world.objects[objId].position.y + "px";
    //     this.sprites[objId].el.style.left =
    //       this.gameEngine.world.objects[objId].position.x + "px";
    //   }
    // }
  }

  addSprite(obj, objName) {
    console.log("Adding Sprite!", { obj, objName });
    // if (objName === "paddle") objName += obj.playerId;
    // this.sprites[obj.id] = {
    //   el: document.querySelector("." + objName)
    // };
  }
}
