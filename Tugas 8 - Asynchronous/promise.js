function readBooksPromise(time, books){
    console.log(`saya mulai membaca ${books.name}`);
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            let sisaWaktu = time - books.timeSpent;
            if(sisaWaktu >=0 ){
                console.log(
                    `saya sudah selesai membaca ${books.name}, sisa waktu saya ${sisaWaktu}`,
        );
        resolve(sisaWaktu);
                }else{
                    console.log(`saya sudah tidak punya waktu untuk baca ${books.name}`);
                    reject(sisaWaktu);
                }
            }, books.timeSpent);
        });
}
module.exports = readBooksPromise;