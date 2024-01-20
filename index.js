const hero = "Naru"
let xpinicial = 0
//b = bonus
let b1 = 200
//ch = challange
let ch1 = 800
let ch2 = 1800
let ch3 = 3200
let ch4 = 5100
let ch5 = 7100
let ch6 = 8500
let ch7 = 10500
// lv = level
let lv1 = "Ferro"
let lv2 = "Bronze"
let lv3 = "Prata"
let lv4 = "Ouro"
let lv5 = "Platina"
let lv6 = "Ascendente"
let lv7 = "Radiante"
let xp = " pontos de experiência"

console.log("Nosso herói " + hero + " começa a aventura com " + xpinicial + xp)
console.log(hero + " encontra itens para combate ") + xpinicial + b1 
console.log(hero + " batalhou com um Kobold")
if(xpinicial + ch1 < 1000){ 
    console.log("Parabéns " + hero + ", você está no nível " + lv1 + "!") }
console.log(hero + " batalhou com um Homem Lagarto")
console.log(hero + " encontrou uma Lança")
if(xpinicial + ch2 < 2000){ 
    console.log("Parabéns " + hero + ", você está no nível " + lv2 + "!") }
console.log(hero + " batalhou com uma Dríade")
console.log(hero + " encontrou uma Cota de Malha")
if(xpinicial + ch3 < 5000){
    console.log("Parabéns " + hero + ", você está no nível " + lv3 + "!") }
console.log(hero + " batalhou com um Troll")
console.log(hero + " encontrou uma Espada")
if(xpinicial + ch4 < 7000){
    console.log("Parabéns " + hero + ", você está no nível " + lv4 + "!") }
console.log(hero + " batalhou com um Grifo")
console.log(hero + " encontrou um Anel Mágico")
if(xpinicial + ch5 < 8000){
    console.log("Parabéns " + hero + ", você está no nível " + lv5 + "!") }
console.log(hero + " batalhou com um Dragonete")
if(xpinicial + ch6 < 9000){
    console.log("Parabéns " + hero + ", você está no nível " + lv6 + "!") }
console.log(hero + " batalhou com um Dragão")
if(xpinicial + ch7 > 10000){
    console.log("Parabéns " + hero + ", você está no nível " + lv7 + "!") }