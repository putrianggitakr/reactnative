const readBooksPromise = require('./promise.js')
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
function baca(time, books, i){
    if (i < books.length){
        readBooksPromise(time, books[i], function(sisa){
            if (sisa > 0){
                i += 1;
                baca(sisa,books,i);
            }
        })
    }
}
baca(10000, books,0)