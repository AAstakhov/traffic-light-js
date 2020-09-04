'use strict'

//зеленый сигнал
function showLightG(){
	let trafficLight1 = prompt('Введите указанный цвет светофора в строку!', 'зеленый');
	if(trafficLight1 == 'зеленый'){
		alert('Начало движения');

	let trafficLightG = 1;
		while (trafficLightG < 11){
			console.log(trafficLightG)
			trafficLightG++
	}
	console.log('Количество автомобилей проехавших на зеленый свет');


	}else if(trafficLight1 == 'желтый'){
		alert('для этого сигнала еще рано');
	}
	else if(trafficLight1 == 'красный'){
		alert('для этого сигнала уже поздно');
	}else{
		alert('error');
	}

}
showLightG();

//желтый сигнал
function showLightY(){
	let trafficLight2 = prompt('Введите указанный цвет светофора в строку!', 'желтый');
	if(trafficLight2 == 'желтый'){
		alert('Предупреждение о прекращении движения');
		console.log('Несколько автомобилей проскочили');
		let trafficLightY = 1;
			while (trafficLightY < 4){
				console.log(trafficLightY)
				trafficLightY++
			}
	}else if(trafficLight2 == 'красный'){
		alert('для этого сигнала еще рано');
	}else if(trafficLight2 == 'зеленый'){
		alert('для этого сигнала уже поздно');
	}else{
		alert('error');
	}
}
showLightY();

//красный сигнал
function showLightR(){
	let trafficLight3 = prompt ('Введите указанный цвет светофора в строку!', 'красный');
	if(trafficLight3 == 'красный'){
		alert('Движение прекратилось');
		console.log('Несколько автомобилей проеахли нарушив правила');

		let trafficLightR = 1;
		while (trafficLightR < 3){
			console.log(trafficLightR)
			trafficLightR++
		}
	}else if(trafficLight3 == 'зеленый'){
		alert('для этого сигнала еще рано');
	}else if(trafficLight3 == 'желтый'){
		alert('для этого сигнала уже поздно')
	}else{
		alert('error');
	}
}
showLightR()

//Сколько автомобилей проехало за цикл работы светофора
console.log('количество автомобилей проехавших перекресток за один цикл светофора');
function showResult(g,y,r){
		return(g+y+r)

}
console.log(showResult(10,3,2));

