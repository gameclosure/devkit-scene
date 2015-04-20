/**
  * This is a very simple game: There is a ball on screen, it falls down.
  * Touch the ball to juggle it.
  * @requires scene 0.0.1
  */
import scene, art;

scene.splash(function() {
  scene.addText('Juggle bird: Tap to start!');
  scene.addBackground(art('starscape_2');
});

scene(function() {
  var bg = scene.addBackgroundLayer(art('starcape_1'), { scroll: 0.5 });
  var actor = scene.addActor(art('pixelman_angry');
  scene.showScore(10, 10);

  // Tap the player to juggle
  actor.onTouch(function() {
    scene.addScore(1);
    actor.vx = randRange(20, 40, true);
    actor.vy = randRange(-80, -40);
  });
  scene.onCollision(actor, [scene.screen.left, scene.screen.right], scene.screen.bounceOff);

  // Gravity
  actor.ay = 9.8;
  scene.onCollision(actor, [scene.screen.bottom, scene.screen.top], scene.gameOver);
});