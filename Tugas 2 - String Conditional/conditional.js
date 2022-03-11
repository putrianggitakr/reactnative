//Nomor 1
var nama="John";
var peran="";

if (nama == ""){
    console.log("Nama harus diisi!");
}else if(nama && peran == ""){
    console.log("Halo John, Pilih peranmu untuk memulai game!");
}else if(nama == "Jane" && peran == "Penyihir"){
    console.log("Selamat datang di Dunia Werewolf, Jane \nHalo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");
}else if(nama == "Jenita" && peran == "Guard"){
    console.log("Selamat datang di Dunia Werewolf, Jenita \nHalo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.");
}else if(nama == "Junaedi" && peran == "Werewolf"){
    console.log("Selamat datang di Dunia Werewolf, Junaedi \nHalo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!");
}

//Nomor 2
var hari = 21; 
var bulan = 1; 
var tahun = 1945;
var bulanNama;

if(hari >= 1 && hari <=31){
    if(bulan >= 1 && bulan <=12){
        if(tahun >=1 && tahun <=22000){
            switch(bulan){
                case 1:
                    bulanNama = "Januari";
                    break;
                case 2:
                    bulanNama = "Februari";
                    break;
                case 3:    
                    bulanNama = "Maret";
                    break;
                case 4:
                    bulanNama = "April";
                    break;
                case 5:
                    bulanNama = "Mei";
                    break;
                case 6:
                    bulanNama = "Juni";
                    break;
                case 7:
                    bulanNama = "Juli";
                    break;
                case 8:
                    bulanNama = "Agustus";
                    break;
                case 9:
                    bulanNama = "September";
                    break;
                case 10:
                    bulanNama = "Oktober";
                    break;
                case 11:
                    bulanNama = "November";
                    break;
                case 12:
                    bulanNama = "Desember";
                    break;
            }
            console.log(hari +" "+bulanNama+" "+tahun);
        }else{
            console.log("Masukkan tahun diantara (1900-2200)");
        }
        }else{
            console.log("Masukkan bulan diantara (1-12)");
        }
        }else{
            console.log("Masukkan tanggal diantara (1-31)");
}




//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 