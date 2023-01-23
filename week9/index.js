let zpUborchika = 40000;
let zpPedagog =22000;
console.log(zpPedagog+zpUborchika);

let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} градуса по Фаренгейту — это ${celsius} градуса по Цельсию.`)

function showX(x)
{ 
	return x;
}
console.log(showX(28));

function sum(x, y=0) {
    return x+y;
  } 
  console.log(sum(5));