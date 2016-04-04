'use strict';

function getMessage(a, b) {
	var message,
			square = 0,
			sum = 0,
			i;
	if ((typeof a) === 'boolean') {
		if (a === true) {
			message = 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
		} else {
			message = 'Переданное GIF-изображение не анимировано';
		}		
	} else if ((typeof a) === 'number') {
		message = 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' аттрибутов';
	} else if (Array.isArray(a) && Array.isArray(b)) {
		for (i = 0; i < a.length && i < b.length; i++) {
			square += (a[i] * b[i]);			
		} message = 'Общая площадь артефактов сжатия: ' + square + ' пикселей';
	} else if (Array.isArray(a)) {
		for (i = 0; i < a.length; i++) {
			sum += a[i];
		} message = 'Количество красных точек во всех строчках изображения: ' + sum;
	}	return message;
}
