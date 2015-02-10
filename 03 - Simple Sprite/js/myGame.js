//Created By: Sam Kristoff | www.samkristoff.com | BSD2 License

//Create A Phaser Game Object
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

//Create A Variable To Store The Sprite Object (We'll Create The Actually Object Below).
var mySprite;

//Create Our PreLoad Function To Load Game Assests
function preload()
{
	game.load.image('mySpriteImg', 'img/ship.png');
}

//Create Our Create Function Which Is Called Once When Our Game Is First Created.  We'll Use This To Do Some One Time Setup
function create()
{
	//Create A Sprite Object From Our Image
	mySprite = game.add.sprite(368, 268, 'mySpriteImg');
}

//Create Our Update Function Which Is Called Repeatedly And Updates All Of Our Game Logic
function update()
{
	//Nothing To Do Here Yet...
}