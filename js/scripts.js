function titleCase(string) {
    var split_words = string.toLowerCase().split(" ");
    var word_list = [];

    for (var i = 0; i < split_words.length; i += 1) {

        if (split_words[i] === "the" || split_words[i] === "a" || split_words[i] === "an" || split_words[i] === "with" || split_words[i] === "and" || split_words[i] === "but" || split_words[i] === "for" || split_words[i] === "in"
         || split_words[i] === "of" || split_words[i] === "at" || split_words[i] === "to" || split_words[i] === "on") {
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
