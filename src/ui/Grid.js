function Grid(game) {
    var tiles = [];
    var figures = [new Figure([new Tile(TILE_TYPE.BLUE, {x: 0, y: 0}),
        new Tile(TILE_TYPE.BLUE, {x: 0, y: 1})], new Pos(2, 2))];
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
            var figureTouch = touch(figure);
            figure.position.set(size * f.pos.x, size * f.pos.y);
            figuresGroup.add(figure);

            game.input.onTap.add(figureTouch.tap, figure);
            game.input.onHold.add(figureTouch.move, figure);
            game.input.onUp.add(figureTouch.up, figure);
            game.input.onDown.add(figureTouch.down, figure);

            game.input.addMoveCallback(figureTouch.move, figure);

            /*figure.inputEnabled = true;
            figure.input.enableDrag();
            figure.input.enableSnap(size, size, false, true);*/
        });
    };

    function touch(figure) {
        return {
            tap: function () {
                console.log('tap');
            },
            move: function () {
                console.log('move');
                game.add.tween(figure).to({x: size, y: size * 2}, 200, Phaser.Easing.Linear.None, true);
            },
            up: function () {
                console.log('up');
            },
            down: function () {
                console.log('down');
            }
        };


        //game.add.tween(figure).to({x: size, y: size * 2}, 200, Phaser.Easing.Linear.None, true);
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
