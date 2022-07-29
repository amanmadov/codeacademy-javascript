class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        return this._ratings.reduce((p, c, _, a) => p + c / a.length, 0);
    }
    addRating(rating) {
        if (rating >= 1 && rating <= 5) this._ratings.push(rating);
    }
    set isCheckedOut(val) {
        this._isCheckedOut = val;
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, author, genre, releaseYear, songs) {
        super(title);
        this._author = author;
        this._genre = genre;
        this._releaseYear = releaseYear;
        this._songs = songs;
    }
    shuffle() {
        return [...this._songs]
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }
}

class Catalog {
    constructor() {
        this._mediaList = [];
    }
    get mediaList() {
        return this._mediaList;
    }
    addMedia(mediaItem) {
        if (mediaItem instanceof Media) {
            this._mediaList.push(mediaItem);
        } else {
            console.log('Item must be of type Media.');
        }
    }
}

// Book item
const historyOfEverything = new Book("A Short History of Nearl", "Bill Bryson", 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Movie item
const speed = new Movie("Speed", "Jan de Bont", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

// CD item
const myFavCd = new CD('İnandığın Masallar', 'Pinhani', 'Rock', 2006, ['Hele Bir Gel', 'Istanbulda', 'Beni Al', 'Dön Bak Dünyaya', 'Unutuldular']);
console.log(myFavCd.shuffle())

// Catalog to store all above
const myCatalog = new Catalog();
myCatalog.addMedia(speed);
myCatalog.addMedia(historyOfEverything);
myCatalog.addMedia(myFavCd);

console.log(myCatalog)







