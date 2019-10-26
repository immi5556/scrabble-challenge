QUnit.test("Instance Creation", function (assert) {
    var scrabble = new Scrabble(15, 15);
    assert.ok(1 == "1", "Instance created succesful");
});

QUnit.test("Score Check", function (assert) {
    var scrabble = new Scrabble(15, 15);
    assert.ok(3 == scrabble.calculateScore('M'), "Score check Passed");
});

QUnit.test('Fatten Result validate', function (assert) {
    var scrabble = new Scrabble(15, 15);
    scrabble.flattenLettersToScore();
    assert.ok(scrabble.score["A"] == 1, "Flat result validate");
});

//QUnit.test('container first td', function (assert) {
//    var scrabble = new Scrabble(15, 15);
//    scrabble.buildBoard();
//    assert.dom('#container table tr td').hasText('');
//});