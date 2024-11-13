/*Exercice 1:
Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie :
"Poussin" de 6 à 7 ans
"Pupille" de 8 à 9 ans
"Minime" de 10 à 11 ans
"Cadet" après 12 ans (modifié)*/



let iAge = parseInt(prompt("Entrer l'âge de votre enfant"));
let age = 0;
if (age+iAge >=6 && age+iAge<=7 ) {
console.log("Vous êtes Poussin");
alert("Vous êtes Poussin");
}
else if (age+iAge >=8 && age+iAge<=9){
  console.log("Vous êtes Pupille");
alert("Vous êtes Pupille");
}
else if (age+iAge >=10 && age+iAge<=11){
  console.log("Vous êtes Pupille");
alert("Vous êtes Pupille");
}
else if (age+iAge >=13){
  console.log("Vous Cadet");
alert("Vous êtes Cadet");
}
else  {
  console.log("Vous êtes pas de cette catégorie");
  alert("Vous êtes pas de cette catégorie");
};
