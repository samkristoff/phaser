var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var block;


function preload()
{
	game.load.image('block', 'img/block.png');
}

function create()
{
	block = game.add.sprite(0, 0, 'block');
	
	input = game.input.keyboard.createCursorKeys();
}

function update()
{
	if(input.left.isDown)
	{
		block.x = block.x - 10;	
	}
	
	if(input.right.isDown)
	{
		block.x = block.x + 10;	
	}
	
	if(input.up.isDown)
	{
		block.y = block.y - 10;	
	}
	
	if(input.down.isDown)
	{
		block.y = block.y + 10;	
	}
	
}