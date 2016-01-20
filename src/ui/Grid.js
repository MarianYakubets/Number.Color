function Grid(game) {
    var tiles = [];
    var size = 64;
    var width = 4;
    var height = 4;
    var group = game.add.group();
    group.position.set(100,100);
    group.scale.set(2,2);

    this.draw = function () {
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                group.create(i * size, j * size, getRandomTile());
            }
        }
    }

    function getRandomTile() {
        var tileTypes = Object.keys(TILE);
        return TILE[tileTypes[Math.floor(Math.random() * tileTypes.length)]].image;
    }

};
