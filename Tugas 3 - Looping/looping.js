//NO 1 Looping While
//LOOPING PERTAMA
var flag1 = 2;
while(flag1 <= 20) {
  console.log(flag1+' - I love coding'); 
  flag1+= 2; 
}
//LOOPING KEDUA
var flag2 = 20;
while(flag2 > 2) {
  console.log(flag2+' - I will become a mobile developer'); 
  flag2-= 2; 
}

//NO 2 Looping menggunakan for 

for(var i = 1; i <= 20; i++){
    if(i%2 !=1){
        console.log(i+" - Berkualitas");
    }else if(i%3==0){
        console.log(i+" - I Love Coding");
    }else {
        console.log(i+" - Santai");
    }
}

//No 3 Membuat persegi panjang

    var hasil = '';
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 8; j++) {
            hasil += '#';
        }
        hasil += '\n';
    }
   console.log(hasil)

//No 4 Membuat tangga
var hasil = '';
for (var i = 0; i < 7; i++) {
    for (var j = 0; j <= i; j++) {
        hasil += '#';
    }
    hasil += '\n';
}
console.log(hasil)

//No 5 membuat papan catur
i = 1;
j = 1;
var panjang = 8;
var lebar = 8;
var papan = "";

for(j=1; j<=lebar; j++){
    if(j%2 == 1){
        for(i=1;i<=panjang;i++){
            if(i%2==1){
                papan += " "
            }else{
                papan += "#"
            }
        }
    }else{
        for(i=1;i<=panjang;i++){
           if(i%2==1){
               papan += "#"
           } else{
               papan += " "
           }
        }
    }
    console.log(papan);
    papan = " ";
}

