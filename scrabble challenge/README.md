# Metry AB Interview!

## Steps to run
##Perquisite
1. docker 

##Build Steps

3. Clone the repo
4. Run below commands from terminal
5. cmd> docker-compose build
6. cmd> docker-compose up

## Output

View Board: http://localhost:8080/scrabble_v1.html

Unit test: http://localhost:8080/scrabble_test.html

unit test: xUnit

please use below variable declaration with full data
````javascript
let board = [
    [3, 3, "M", ["P1"]],
    [3, 4, "O", ["P1"]],
    ............
];

let letters = [
    { "value": 1, "letters": ["A", "E", "I", "O", "U", "L", "N", "S", "T", "R"] },
    ......
];
````
this is the class which renders the board & data..
```javascript
class Scrabble {
    constructor(w, l) {
        this.width = w;
        this.length = l;
        this.score = {};
        this.player = {};
        this.flattenLettersToScore();
        this.contain = document.getElementById("container");
    }
    flattenLettersToScore() {
        this.scores = letters.forEach(t => {
            t.letters.forEach(t1 => {
                this.score[t1] = t.value;
            });
        });
    }
    buildBoard() {
        let tbl = document.createElement("table");
        for (let i = 0; i < this.length; i++) {
            let tr = document.createElement("tr");
            tbl.appendChild(tr);
            for (let j = 0; j < this.width; j++) {
                let td = document.createElement("td");
                td.innerHTML = this.getLetter(i, j);
                tr.appendChild(td);
            }
        }
        this.contain.appendChild(tbl);
        var dv = document.createElement("div");
        dv.innerHTML += "<p>Player 1 Score: " + this.player["P1"] + " </p>";
        dv.innerHTML += "<p>Player 2 Score: " + this.player["P2"] + " </p>";
        this.contain.appendChild(dv);
    }
    getLetter(i, j) {
        var html = '';
        var ltr = board.find(t => t[0] == i + 1 && t[1] == j + 1);
        if (ltr) {
            html = ltr[2] + "<br />";
            (ltr[3] || []).forEach(t1 => {
                if ((t1 || '').toLowerCase() == "p1") {
                    html += ' <span class="sit-in-the-corner">P1</span>';
                    this.player[t1] = (this.player[t1] || 0) + this.calculateScore(ltr[2]);
                }
                if ((t1 || '').toLowerCase() == "p2") {
                    html += ' <span class="sit-in-the-right">P2</span>';
                    var tg = parseInt(this.calculateScore(ltr[2]));
                    this.player[t1] = (this.player[t1] || 0) + tg;
                }
            });
        }
        return html;
    }
    calculateScore(ltr) {
        return this.score[ltr];
    }
}
```

Usage:

```javascript
	var scrabble = new Scrabble(15, 15);
    scrabble.buildBoard();
```