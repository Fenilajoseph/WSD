var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{bookname: "Lord of Rings",author:"J.R.R. Tolkien", price: 650, genre: "Fantasy Adventure",},
        {bookname: "Assasin's Apprentice",author:"Robin Hobb", price: 800, genre: "Fantasy"},
        {bookname: "The Notebook",author:"Nicolas Sparks", price: 850, genre: "Romance"},
        {bookname: "Jane Eyre",author:"Charlotte Bronte", price: 700, genre: "Novel"},
        {bookname: "Bird Box",author:"Josh Malerman", price: 680, genre: "Thriller"},
        {bookname: "The hunger games",author:"Suzanne Collins", price: 820, genre: "Action Fiction"}];

    this.limit = 9;
    this.sortProperty = 'bookname';
    this.reverseSort = false;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};

simpleController.prototype.sort = function (prop) {
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}


app.controller("simpleController", simpleController);