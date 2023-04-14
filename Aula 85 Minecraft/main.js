var canvas = new fabric.Canvas("myCanvas");
blockImageWidth = 30;
blockImageHeigth = 30;
playerX = 10;
playerY = 10;
var playerObject

function playerUpdate()
{
   fabric.Image.fromURL("player.png"), function(img){
   playerObject = img;

   PlayerObject.scaleTowWidth(150);
   playerObject.scaleToHeight(140);
   playerObject.set({
    top:playerY,
    left:playerX
   });
   canvas.add(playerObject);

  };
}
fabric.Image.fromURL("player.png", function(img)) {

} 