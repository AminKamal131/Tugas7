// nested array

function panggil(){
    var data = [["AK","AC","AB"],   // <== ini index ke 0
                ["bola","bola1","bola2"], // <== ini index ke 1 
                ["dibawah","adalah","loping array"] // <== dan seterusnya...
]
console.log(data.length)
console.log(data[2])
}

panggil()

// loping array

var angka = ["10.  loping array mulai dari sini"  ,9,8,7,6,5,4,3,2,"1.  berakhir disini & dibawah adalah for-of array"];
for(var i=0;i<angka.length;i++){
    console.log(angka[i])
}

// for- of array

var amin = ["0.   For-Of Array dimulai dari sini",1,2,3,4,5,6,7,8,9,"10.   Dan berakhir disini"];
for(let x of amin){
    console.log(x);
}