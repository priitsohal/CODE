function calcWordFrequencies() {
    var words = prompt().split(" ");

    var frequencies = {};
    for (var i = 0; i < words.length; i++) {
        if (frequencies[words[i]] === undefined)
            frequencies[words[i]] = 0;
        frequencies[words[i]]++;
    }

    for (var word in frequencies) {
        console.log(word + " " + frequencies[word]);
    }
}