function titleCase(string) {
    var split_words = string.split(" ");
    var word_list = [];

    for (var i = 0; i < split_words.length; i += 1) {

        if (split_words[i] === "the" || split_words[i] === "a" || split_words[i] === "an" || split_words[i] === "with" || split_words[i] === "and") {
            word_list.push(split_words[i]);
        }

        else {
            var word = split_words[i].charAt(0).toUpperCase() + split_words[i].slice(1) ;
            word_list.push(word);
        }
    }

    var title_cased_string = word_list.join(" ");

    var final_string = title_cased_string.charAt(0).toUpperCase() + title_cased_string.slice(1);

    return final_string;
};

var string = "the the cat an a cat hat with and";
console.log(titleCase(string));
