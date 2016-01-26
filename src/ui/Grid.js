function Grid(game) {
    var tiles = [];
    var figures = [new Figure([new Tile(TILE_TYPE.BLUE, new Pos(0, 0)), new Tile(TILE_TYPE.BLUE, new Pos(0, 1))], new Pos(2, 2))];
    var size = 64;
    var width = 4;
    var height = 4;
    var tilesGroup = game.add.group();
    tilesGroup.position.set(100, 100);
    tilesGroup.scale.set(2, 2);

    var figuresGroup = game.add.group();
    figuresGroup.position.set(100, 100);
    figuresGroup.scale.set(2, 2);

    this.drawTiles = function () {
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                tilesGroup.create(i * size, j * size, getRandomTile());
            }
        }
    };

    this.drawFigures = function () {
        figures.forEach(function (f) {
            var figure = drawFigure(f);
            figure.position.set(size * f.pos.x, size * f.pos.y);
            game.input.onTap.add(move(figure), figure);
            figuresGroup.add(figure);
        });
    };

    function move(figure) {
        return function () {
            figure.position.set(0, 0);
        }
    }

    function drawFigure(figure) {
        var figureGroup = game.add.group();
        figure.tiles.forEach(function (t) {
            figureGroup.create(size * t.pos.x, size * t.pos.y, 'grey');
        });
        return figureGroup;

    }

    function getRandomTile() {
        var tileTypes = Object.keys(TILE_TYPE);
        return TILE_TYPE[tileTypes[Math.floor(Math.random() * tileTypes.length)]].image;
    }


}
