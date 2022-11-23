const getTheTitles = function(books) {
    book_titles = []
    for (i = 0; i<books.length; i++) {
        book_titles.push(books[i].title)
    }
    return book_titles
};

// Do not edit below this line
module.exports = getTheTitles;
