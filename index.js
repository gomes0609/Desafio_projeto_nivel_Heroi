let nomeHeroi = "Jc";
let xp = 9001;
let nivel;

if(xp < 1000){
    nivel="Prata";
}else if (xp <= 4000){
    nivel="Ouro";
}else if (xp <= 5000){
    nivel="Ametista";
}else if (xp <=7000){
    nivel="Platina";
}else if (xp <= 8000){
    nivel="Ascendente";
}else if (xp <= 9000){
    nivel="Imortal";
} else {
    nivel="Radiante";
}

console.log(`O heroi de nome ${nomeHeroi} está no nivel ${nivel} ${xp}xp`);