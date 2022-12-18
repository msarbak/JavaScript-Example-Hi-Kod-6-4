const brands = ["msi", "asus", "dell", "hp"]; 
//brands isimli diziyi olusturduk

brands.pop(); //en sondakini siler

brands.push("apple");
// apple' i diziye dahil ettik (sona ekler)

brands.reverse(); // komple yer degisti tam tersi oldu sirasi

function diziYazdir(){ // yazdirma fonksiyonu olusturduk. cagrildigi zaman calisir

    document.querySelector("#dizi").innerHTML +=  "<br><br>"; // en üste 2 bosluk atar

    for(let i = 0; i < brands.length; i++){// i isimli bir counter'imiz var her turda sayac 1 artar ve dizi uzunlugu kadar devam eder

        //yazdirma operasyonlari
        //document.querySelector(".domates").innerHTML += brands[i] + "<br>";
        document.querySelector("#dizi").innerHTML += brands[i] + " ";
    }
    document.querySelector("#dizi").innerHTML +=  "<br>"; //en alta 1 bosluk atar
    //document.querySelector(".domates").innerHTML = brands[2];
}

let favoriteCar = {brand: "Mazda", model: "RX-7", year: 1997, color: "Red"}
//obje olusturduk

function objeYazdir(){ //obje yazdirmak icin func.
    document.querySelector("#obje").innerHTML +=  "<br><br>"; // en üste 2 bosluk atar
    
    document.querySelector("#obje").innerHTML += favoriteCar.brand + " "; // += yerine = dersek en son dedigimizi sadece goruruz
    document.querySelector("#obje").innerHTML += favoriteCar.model + " ";
    document.querySelector("#obje").innerHTML += favoriteCar.year + " ";
    document.querySelector("#obje").innerHTML += favoriteCar.color + " ";

    document.querySelector("#obje").innerHTML +=  "<br>"; //en alta 1 bosluk atar
}

function maviyeBoya(){
    favoriteCar.color = "blue"; // ozellik degisimi

    document.querySelector("#boyaci").innerHTML +=  "<br><br>"; // en üste 2 bosluk atar

    document.querySelector("#boyaci").innerHTML += favoriteCar.brand + " ";
    document.querySelector("#boyaci").innerHTML += favoriteCar.model + " ";
    document.querySelector("#boyaci").innerHTML += favoriteCar.year + " ";
    document.querySelector("#boyaci").innerHTML += favoriteCar.color + " ";

    document.querySelector("#boyaci").innerHTML +=  "<br>"; // en alta 1 bosluk atar
}