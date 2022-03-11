const readBooks = require('./callback.js')
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function baca(time, books, i){
    if (i < books.length){
        readBooks(time, books[i], function(sisa){
            if (sisa > 0){
                i += 1;
                baca(sisa,books,i);
            }
        })
    }
}
baca(10000, books,0)