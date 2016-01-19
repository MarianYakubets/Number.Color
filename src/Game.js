BasicGame.Game = function (game) {
    this.game; //	a reference to the currently running game
    this.add; //	used to add sprites, text, groups, etc
    this.camera; //	a reference to the game camera
    this.cache; //	the game cache
    this.input; //	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load; //	for preloading assets
    this.math; //	lots of useful common math operations
    this.sound; //	the sound manager - add a sound, play one, set-up markers, etc
    this.stage; //	the game stage
    this.time; //	the clock
    this.tweens; //	the tween manager
    this.world; //	the game world
    this.particles; //	the particle manager
    this.physics; //	the physics manager
    this.rnd; //	the repeatable random number generator

};

BasicGame.Game.prototype = {

    create: function () {
        this.game.add.sprite(750, 550, TILE.BLUE.image);
        this.game.add.sprite(750, 100, TILE.GREEN.image);
        this.game.add.sprite(100, 550, TILE.GREY.image);
        this.game.add.sprite(0, 550, TILE.YELLOW.image);

    },

    update: function () {

        //	Do some nice funky main menu effect here

    },


};
