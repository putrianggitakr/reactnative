// No 1
console.log('=====SOAL 1=====')
function range(startNum, finishNum) {
    var arr = [];
    
    if (startNum > finishNum){
        var rangeLength = startNum - finishNum + 1;
        for(var i = 0; i < rangeLength; i++){
            arr.push(startNum - i)
        } 
    } else if( startNum < finishNum){
        var rangeLength = finishNum - startNum + 1;
        for(var i = 0; i < rangeLength; i++){
            arr.push(startNum + i)

        }
    } else if (!startNum || !finishNum){
        return -1
     }
    return arr;
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

// No 2
console.log('=====SOAL 2=====')
// Jika parameter pertama lebih besar dibandingkan parameter kedua  maka angka-angka tersusun secara menurun (descending) dengan step sebesar parameter ketiga.
function rangeWithStep(startNum, finishNum, step = 1){
    if (!startNum || !finishNum){
        return -1;
    }
    else {
        var result = [];
        if(startNum < finishNum){
            for(var i = startNum; i <= finishNum; i += step){
                result.push(i);
            }
        } else {
            for(var i = startNum; i >= finishNum; i -= step){
                result.push(i)
            }
        }
    return result;    
    }
}
 
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

// 3
console.log('=====SOAL 3=====')
function sum(startNum, finishNum, step) {
    
    var arr = [];
    var distance;
    
    if (!step) {
        distance = 1;
    } else {
        distance = step;
    }
    
    if (startNum > finishNum) {
        var currentNum = startNum;
        for (var i = 0; currentNum >= finishNum; i++) {
            arr.push(currentNum)
            currentNum -= distance;
        }
    } else if(startNum < finishNum) {
        var currentNum = startNum;
        for (var i = 0; currentNum <= finishNum; i++) {
            arr.push(currentNum)
            currentNum += distance;
        }
    } else if(!startNum && !finishNum && !step){
        return 0;
         
    } else if (startNum){
        return startNum;
    }

    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total = total + arr[i];
    }

    return total;
    
}
  
  console.log(sum(1,10)) // 55
  console.log(sum(5, 50, 2)) // 621
  console.log(sum(15,10)) // 75
  console.log(sum(20, 10, 2)) // 90
  console.log(sum(1)) // 1
  console.log(sum()) // 0

// 4
console.log('=====SOAL 4=====')
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 
function dataHandling(input){
    var data='';
    for(var r=0; r < input.length; r++){
        data += 'Nomor ID: ' + input[r][0] + '\n' +
                'Nama Lengkap: ' + input[r][1] + '\n' +
                'TTL: ' + input[r].slice(2,4).join(' ')  + '\n' +
                'Hobi: ' + input[r][4] + '\n' + '\n'
    }
    return data;
}

console.log(dataHandling(input));

// 5
console.log('=====SOAL 5=====')
function balikKata(word){
    newWord = '';
    wordLength = word.length -1;
    for(var i = wordLength; i >= 0; i--){
        newWord += word[i];
    }

    return newWord;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

// 6
console.log('=====SOAL 6=====')
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2(input);

function dataHandling2(input){
    var newData = input;

    var newName = input[1] +  " Elsharawy";
    var newProvinsi = "Provinsi " + input[2];
    var jk = "Pria"
    var asalSekolah = "SMA Internasional Metro"
    
    newData.splice(1, 1, newName);
    newData.splice(2, 1, newProvinsi);
    newData.splice(4,1, jk, asalSekolah);

    console.log(newData)

    var angkaBulan = input[3].split("/");
    var namaBulan;

    switch(angkaBulan[1]){
            case '01' :
                namaBulan = "Januari";
                break;
            case '02' :
                namaBulan = "Februari";
                break;
            case '03' :
                namaBulan = "Maret";
                break;
            case '04' :
                namaBulan = "April";
                break;
            case '05' :
                namaBulan = "Mei";
                break;
            case '06' :
                namaBulan = "Juni";
                break;
            case '07' :
                namaBulan = "Juli";
                break;
            case '08' :
                namaBulan = "Agustus";
                break;
            case '09' :
                namaBulan = "September";
                break;
            case '10' :
                namaBulan = "Oktober";
                break;
            case '11' :
                namaBulan = "November";
                break;
            case '12' :
                namaBulan = "Desember";
                break;
            default :
                // namaBulan = ""
                // console.log("Salah memasukan bulan.")
        }

        console.log(namaBulan);
        angkaBulan.sort(function(a,b){ return a < b});
        console.log(angkaBulan);

        var tanggal = angkaBulan.join('-');
        console.log(tanggal);

        newData.splice(1,1, newName.split('').slice(0,14).join(''));
        console.log(newData[1])
        
    }

    // dataHandling2(input);


