//No 1
console.log("===SOAL 1===");
function replaceCharacter(sentence,findCharacter, replaceCharacter){
   
    var result = "";

    var subtituteCharacter =replaceCharacter;
    if (!replaceCharacter){
        subtituteCharacter="";
    }
   for (var index=0; index < sentence.length ;index++){
       const character = sentence[index];

       if(character.toLowerCase() === findCharacter.toLowerCase()){
           result+=subtituteCharacter; 
            continue;
        }

        result += character;

   }
     return result;
}
var sentence = "Pada Hari Minggu ku turut ayah ke kota";
var result =replaceCharacter(sentence, "a","o");
console.log(result);


//No 2
// Format Data [absen, nama, nilai]
console.log("===SOAL 2===");
var studentData = [
	[2, "John Duro", 60],
	[4, "Robin Ackerman", 100],
	[1, "Jaeger Marimo", 60],
	[6, "Zoro", 80],
	[5, "Zenitsu", 80],
	[3, "Patrick Zala", 90],
];
studentData.sort(function (a,b) {
    var sortedData = b[2] - a[2] === 0;
    if (sortedData){
    return a[0] - b[0];
}
    return b[2]-a[2];
});
console.log(studentData);
// Output
// [
// 	[4, "Robin Ackerman", 100],
// 	[3, "Patrick Zala", 90],
// 	[5, "Zenitsu", 80],
// 	[6, "Zoro", 80],
// 	[1, "Jaeger Marimo", 60],
// 	[2, "John Duro", 60],
// ];