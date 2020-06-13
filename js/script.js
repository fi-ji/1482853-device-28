// Модалка - Напишите Нам

var contactsLink = document.querySelector('.contacts__link');
var writeUsPopup = document.querySelector('.write-us');
var writeUsClose = writeUsPopup.querySelector('.modal-btn');
var writeUsForm = writeUsPopup.querySelector('.write-us__form');
var writeUsName = writeUsPopup.querySelector('#name-field');
var writeUsEmail = writeUsPopup.querySelector('#email-field');
var writeUsLetter = writeUsPopup.querySelector('#letter-field');
var inputs = writeUsPopup.querySelectorAll('.form-input');

// Проверяем поддержку localStorage браузером

var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('name');
} catch (err) {
	isStorageSupport = 'false';
}

// Кнопка открытия модального окна

contactsLink.addEventListener('click', function(event) {
	event.preventDefault();
	writeUsPopup.classList.add('modal-show');

	// Если в localStorage сохранены данные, то заполнить ими поля и установить фокус в поле с текстом
	if (storage) {
		writeUsName.value = storage;
		writeUsEmail.value = localStorage.getItem('email');
		writeUsLetter.focus();
	} else {
		// Если нет, то сместим фокус на поле ввода И.Ф.
		writeUsName.focus();
	}
});

// Кнопка закрытия модального окна

writeUsClose.addEventListener('click', function() {
	writeUsPopup.classList.remove('modal-show');
	writeUsPopup.classList.remove('modal-error');

	inputs.forEach((input) => {
		input.classList.remove('invalid');
	});
});

// Валидация формы

writeUsForm.addEventListener('submit', function(event) {
	// Если какое-то из полей не заполнено, то отменить отправку формы
	if (!writeUsName.value || !writeUsEmail.value || !writeUsLetter.value) {
		// Отменить отправку
		event.preventDefault();
		writeUsPopup.classList.remove('modal-error');
		writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
		writeUsPopup.classList.add('modal-error');

		inputs.forEach((input) => {
			if (!input.value) {
				input.classList.add('invalid');
			}
		});
	} else {
		// Если же заполнены, то сохранить данные в localStorage
		localStorage.setItem('name', writeUsName.value);
		localStorage.setItem('email', writeUsEmail.value);
	}
});

inputs.forEach((input) => {
	input.addEventListener('input', function() {
		input.classList.remove('invalid');
	});
});

// Кнопка Esc для закрытия модального окна

window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		// Проверяем если окно открыто
		if (writeUsPopup.classList.contains('modal-show')) {
			// Если кнопке Esc уже задано значение по умолчанию браузером, то отменить это значение
			event.preventDefault();
			writeUsPopup.classList.remove('modal-show');
			writeUsPopup.classList.remove('modal-error');

			inputs.forEach((input) => {
				input.classList.remove('invalid');
			});
		}
	}
});

// Модалка - Карта

var mapLink = document.querySelector('.contacts__map-link');
var mapPopup = document.querySelector('.map');
var mapClose = mapPopup.querySelector('.modal-btn');

mapLink.addEventListener('click', function(event) {
	event.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function() {
	mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains('modal-show')) {
			event.preventDefault();
			mapPopup.classList.remove('modal-show');
		}
	}
});

//Промо Слайдеры

var sliderControls = document.querySelectorAll('.slider__controls-btn');
var sliderItem = document.querySelectorAll('.slider__item');
var sliderControlsArr = Array.from(sliderControls);

function removeClassSliders() {
	sliderControls.forEach((btn) => {
		btn.classList.remove('slider__controls-btn--active');
	});
	sliderItem.forEach((item) => {
		item.classList.remove('slider__item--current');
	});
}

sliderControls.forEach((btn) => {
	btn.addEventListener('click', function() {
		removeClassSliders();
		this.classList.add('slider__controls-btn--active');
		sliderItem[sliderControlsArr.indexOf(this)].classList.add('slider__item--current');
	});
});

// Cервисы

var servicesControls = document.querySelectorAll('.services__controls-btn');
var servicesBlock = document.querySelectorAll('.services__block');
var servicesControlsArr = Array.from(servicesControls);

function removeClassServices() {
	servicesControls.forEach((btn) => {
		btn.classList.remove('services__controls-btn--active');
	});
	servicesBlock.forEach((item) => {
		item.classList.remove('services__block--current');
	});
}

servicesControls.forEach((btn) => {
	btn.addEventListener('click', function() {
		removeClassServices();
		this.classList.add('services__controls-btn--active');
		servicesBlock[servicesControlsArr.indexOf(this)].classList.add('services__block--current');
	});
});

// var servicesControls = document.querySelectorAll('.services__controls-btn');
// var servicesBlock = document.querySelectorAll('.services__block');
// var servicesControlsItem = document.querySelectorAll('.services__controls-item');
// var servicesControlsArr = Array.from(servicesControls);

// function removeClassServices() {
// 	servicesControlsItem.forEach((item) => {
// 		item.classList.remove('services__controls-item--active');
// 	});
// 	servicesBlock.forEach((item) => {
// 		item.classList.remove('services__block--current');
// 	});
// }

// servicesControlsArr.forEach((btn) => {
// 	btn.addEventListener('click', function() {
// 		removeClassServices();

// 		servicesControlsItem[servicesControlsArr.indexOf(this)].classList.add('services__controls-item--active');
// 		servicesBlock[servicesControlsArr.indexOf(this)].classList.add('services__block--current');
// 	});
// });
