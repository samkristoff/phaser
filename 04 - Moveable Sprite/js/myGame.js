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
	
	//Create An Input Object To Get Key Presses
	input = game.input.keyboard.createCursorKeys();
}

//Create Our Update Function Which Is Called Repeatedly And Updates All Of Our Game Logic
function update()
{
	//If Left Key Is Pressed Decrease X (Move Left)
	if(input.left.isDown)
	{
		mySprite.x = mySprite.x - 10;	
	}
	
	//If Right Key Is Pressed Increase X (Move Right)
	if(input.right.isDown)
	{
		mySprite.x = mySprite.x + 10;	
	}
	
	//If Up Key Is Pressed Decrease Y (Move Up)
	if(input.up.isDown)
	{
		mySprite.y = mySprite.y - 10;	
	}
	
	//If Down Key Is Pressed Increase Y (Move Down)
	if(input.down.isDown)
	{
		mySprite.y = mySprite.y + 10;	 
	}
}