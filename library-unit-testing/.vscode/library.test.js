const library = require('./library');
let {assert, expect} = require('chai');
const { findBook, arrangeTheBooks } = require('./library');

describe('All tests', () => {
    describe('Test functionnallity calcPriceOfBook' , () => {
       it('Throw an error if nameBook is not a string', () => {
           let nameBook = 5;
           let year = 2020;
           expect(() => library.calcPriceOfBook(nameBook, year)).to.throw('Invalid input')
       });
       it('Should throw an error if year is a string', () => {
           let nameBook = 'Book';
           let year = '2365';
           expect(() => library.calcPriceOfBook(nameBook, year)).to.throw('Invalid input')
       });
       it('Should throw an error if year is not an integer', () => {
           let nameBook = 'Book';
           let year = 2.36;
           expect(() => library.calcPriceOfBook(nameBook, year)).to.throw('Invalid input')
       });
       it('Should return price 20 if year is bigger than 1980', () => {
           let nameBook = 'Book';
           let year = 1981;
           expect(library.calcPriceOfBook(nameBook, year)).to.be.equal('Price of Book is 20.00')
       });
       it('Should have a 50% discount if year is less than 1980', () => {
           let nameBook = 'Book';
           let year = 1979;
           expect(library.calcPriceOfBook(nameBook, year)).to.be.equal('Price of Book is 10.00')
       });
       it('Should have a discount if year is equal to 1980', () => {
           let nameBook = 'Friend';
           let year = 1980;
           expect(library.calcPriceOfBook(nameBook, year)).to.be.equal('Price of Friend is 10.00')
       })
    });
    describe('Test functionnallity findBook', () => {
      it('Should throw an error if an array is enmpty', () => {
          let booksArr = [];
          let desiredBook = 'Troy';
          expect(() => library.findBook(booksArr, desiredBook)).to.throw('No books currently available')
      });
      it('Should return the wanted book if its found', () => {
          let bookArr = ['Troy', 'Life Style', 'Torronto'];
          let desiredBook = 'Troy';
          expect(library.findBook(bookArr, desiredBook)).to.be.deep.equal('We found the book you want.')
      });
      it('Should return a message if the wantedBook is not found', () => {
        let booksArr = ['Troy', 'Life Style', 'Torronto'];
        let desiredBook = 'Friend';
        expect(library.findBook(booksArr, desiredBook)).to.be.deep.equal('The book you are looking for is not here!')
      })
    });
    describe('Test functionnallity arrangeTheBooks', () => {
     it('Should throw an error if number is not an integer', () => {
         let count = 2.2;
         expect(() => library.arrangeTheBooks(count)).to.throw('Invalid input')
     });
     it('Should throw an error if less than 0', () => {
         let count = -1;
         expect(() => library.arrangeTheBooks(count)).to.throw('Invalid input')
     });
     it('Should return a message if all books are ranged', () => {
         let count = 39;
         let availableSpace = 40;
         expect(library.arrangeTheBooks(count)).to.be.equal('Great job, the books are arranged.')
     });
     it('Should return a message if not all books', () => {
         let count = 41;
         let availableSpace = 40;
         expect(library.arrangeTheBooks(count)).to.be.equal('Insufficient space, more shelves need to be purchased.')
     });
     it('Should return a message if count is equal to 40', () => {
         let count = 40;
         let availableSpace = 40;
         expect(library.arrangeTheBooks(count)).to.be.equal('Great job, the books are arranged.')
     })
    })
}) 