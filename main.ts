scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(1, 160), randint(1, 160))
    info.changeScoreBy(1)
    mySprite.say("Yay", 1000)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ......ffffff......
    .....ff7777ff.....
    ....ff777777ff....
    ...ff77777777ff...
    ...f7f555555f7f...
    ...ff55555555ff...
    ..ff55f5555f55ff..
    ffff5f5555fff5ffff
    fddff5555ffdf5fddf
    .ffff55fffddf5fff.
    ..f5fffffdffff5f..
    ..f5f181dd181f5f..
    ...ffd81dd18dfff..
    ...fffddddddfff...
    ....ffffffffff....
    ...f7f777777f7f...
    ..f77f777777f77f..
    .fddff777777ffddf.
    .ffdf7ff55ff7fdff.
    ..fff77f55f77fff..
    ....fff7777fff....
    ...feeeffffeeef...
    ...feeff..ffeef...
    ....fff....fff....
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
mySprite2 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Food)
mySprite.say("Help Me Escape", 1000)
mySprite2.setPosition(20, 50)
game.splash("Help Link Escape")
