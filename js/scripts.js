function titleCase(string) {
    var split_words = string.split(" ");
    var word_list = [];

    for (var i = 0; i < split_words.length; i += 1) {
        var word = split_words[i].charAt(0).toUpperCase() + split_words[i].slice(1) ;
        word_list.push(word);
    }
    //return word_list ??

    var titleCasedString = word_list.join(" ");
    return titleCasedString;
};
