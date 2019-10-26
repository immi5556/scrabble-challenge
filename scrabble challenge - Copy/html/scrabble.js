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

let board = [
    [3, 3, "M", ["P1"]],
    [3, 4, "O", ["P1"]],
    [3, 5, "M", ["P1"]],
    [3, 6, "M", ["P1", "P2"]],
    [3, 7, "A", ["P1"]],
    [4, 6, "E", ["P2"]],
    [5, 6, "R", ["P2", "P2"]],
    [6, 6, "C", ["P2"]],
    [7, 6, "Y", ["P2", "P1"]],
    [7, 1, "B", ["P1"]],
    [7, 2, "E", ["P1"]],
    [7, 3, "A", ["P1", "P2"]],
    [7, 4, "U", ["P1"]],
    [7, 5, "T", ["P1"]],
    [5, 5, "G", ["P2"]],
    [5, 7, "A", ["P2"]],
    [5, 8, "C", ["P2"]],
    [5, 9, "E", ["P2"]],
    [5, 10, "F", ["P2"]],
    [5, 11, "U", ["P2"]],
    [5, 12, "L", ["P2", "P1"]],
    [6, 12, "O", ["P2"]],
    [7, 12, "V", ["P2"]],
    [8, 12, "E", ["P2", "P1"]],
    [8, 3, "N", ["P2"]],
    [9, 3, "G", ["P2"]],
    [10, 3, "E", ["P2", "P1"]],
    [11, 3, "L", ["P2"]],
    [12, 3, "I", ["P2"]],
    [13, 3, "A", ["P2"]],
    [8, 11, "S", ["P1"]],
    [8, 10, "I", ["P1", "P2"]],
    [8, 9, "W", ["P1"]],
    [10, 1, "E", ["P2"]],
    [10, 2, "L", ["P2"]],
    [10, 4, "G", ["P2"]],
    [10, 5, "A", ["P2"]],
    [10, 6, "N", ["P2"]],
    [10, 7, "T", ["P2"]],
    [7, 10, "V", ["P1"]],
    [9, 10, "B", ["P1"]],
    [10, 10, "R", ["P1"]],
    [11, 10, "A", ["P1"]],
    [12, 10, "N", ["P1", "P2"]],
    [13, 10, "T", ["P1"]],
    [12, 9, "I", ["P2"]],
    [12, 11, "S", ["P2"]],
    [12, 12, "P", ["P2"]],
    [12, 13, "I", ["P2"]],
    [12, 14, "R", ["P2", "P1"]],
    [12, 15, "E", ["P2"]],
    [10, 14, "S", ["P1"]],
    [11, 14, "T", ["P1"]],
    [13, 14, "O", ["P1"]],
    [14, 14, "N", ["P1", "P2"]],
    [15, 14, "G", ["P1"]],
    [14, 12, "K", ["P2"]],
    [14, 13, "I", ["P2"]],
    [14, 15, "D", ["P2"]]
];

let letters = [
    { "value": 1, "letters": ["A", "E", "I", "O", "U", "L", "N", "S", "T", "R"] },
    { "value": 2, "letters": ["D", "G"] },
    { "value": 3, "letters": ["B", "C", "M", "P"] },
    { "value": 4, "letters": ["F", "H", "V", "W", "Y"] },
    { "value": 5, "letters": ["K"] },
    { "value": 8, "letters": ["J", "X"] },
    { "value": 10, "letters": ["Q", "Z"] }
];