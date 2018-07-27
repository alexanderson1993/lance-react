import Renderer from "lance-gg/es5/render/Renderer";
import gql from "graphql-tag";
import client from "../data/graphqlClient";
import serializeDynamicObject from "./helpers/serializeDynamicObject";
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
    const UPDATE_GAME_OBJECTS = gql`
      mutation updateLanceObjects($objects: World) {
        updateLanceObjects(objects: $objects) @client
      }
    `;
    client.mutate({
      mutation: UPDATE_GAME_OBJECTS,
      variables: { objects: serializedObjects }
    });
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
