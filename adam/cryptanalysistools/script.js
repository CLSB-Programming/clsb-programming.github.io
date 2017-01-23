function textTransform() {
    var ctext = document.getElementById("textTransformText").value;
    var transformation = document.getElementById("textTransformTransformation").value;
    var output = "";

    switch (transformation) {
        case "uppercase":
            output = ctext.toUpperCase();
            break;
        case "lowercase":
            output = ctext.toLowerCase();
            break;
        case "removeSpaces":
            output = ctext.replace(/\s+/g, '');
            break;
        case "reverse":
            output = ctext.split("").reverse().join("");
            break;
        case "toNumbersZero":
            ctextUppercase = ctext.toUpperCase()
            for (var i = 0; i < ctext.length; i++) {
                if (ctextUppercase.charCodeAt(i) >= 65 && ctextUppercase.charCodeAt(i) <= 90) {
                    output += ctextUppercase.charCodeAt(i) - 65 + " ";
                } else if (ctextUppercase[i] != " ") {
                    output += ctextUppercase[i] + " ";
                }
            }
            output = output.trim();
            break;
        case "toNumbersOne":
            ctextUppercase = ctext.toUpperCase()
            for (var i = 0; i < ctext.length; i++) {
                if (ctextUppercase.charCodeAt(i) >= 65 && ctextUppercase.charCodeAt(i) <= 90) {
                    output += ctextUppercase.charCodeAt(i) - 64 + " ";
                } else if (ctextUppercase[i] != " ") {
                    output += ctextUppercase[i] + " ";
                }
            }
            output = output.trim();
            break;
        default:
            output = "Error in transformation - Invalid textTransformTransformation selection"
            console.error("Invalid textTransformTransformation selection");
    }
    document.getElementById("textTransformText").value = output;
}

function frequencyAnalysis() {
    var ctext = document.getElementById("frequencyAnalysisText").value;
    var frequencies = [];

    var e = document.getElementById("freqNumber");
    var f = document.getElementById("freqPercent");
    var g = document.getElementById("freqRank");
    e.innerHTML = "<th># Frequency</th>";
    f.innerHTML = "<th>% Frequency</th>";
    g.innerHTML = "<th>Rank</th>";

    if (ctext.length == 0) {
        return;
    }

    // Calculate frequencies in an array
    for (var i = 0; i < ctext.length; i++) {
        var c = ctext.toUpperCase().charCodeAt(i) - 65;
        if (frequencies[c]) {
            frequencies[c]++;
        } else {
            frequencies[c] = 1;
        }
    }

    // Display frequencies
    for (var i = 0; i < 26; i++) {
        if (!frequencies[i]) {
            frequencies[i] = 0
        }

        var percentage = Math.round(frequencies[i] / ctext.length * 1000) / 10;

        var td = document.createElement("TD");
        td.appendChild(document.createTextNode(frequencies[i]));
        e.appendChild(td);

        var td = document.createElement("TD");
        td.appendChild(document.createTextNode(percentage));
        f.appendChild(td);
    }

    // Calculate rank
    var sorted = frequencies.slice().sort(function(a, b) {
        return b - a
    })
    var ranks = frequencies.slice().map(function(v) {
        return sorted.indexOf(v) + 1
    });

    for (var i = 0; i < 26; i++) {
        var td = document.createElement("TD");
        td.appendChild(document.createTextNode(ranks[i]));
        g.appendChild(td);
    }
}
