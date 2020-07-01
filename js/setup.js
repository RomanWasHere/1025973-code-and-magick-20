'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

// Переконвертировал исходные значения в RGB чтобы генерировать
var WIZARD_EYES_COLORS = [
  'rgb(0,0,0)',
  'rgb(255,0,0)',
  '(0,0,255)',
  'rgb(255,255,0)',
  'rgb(0,128,0)'
];

var setupModal = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open-icon');
var setupCloseButton = document.querySelector('.setup-close');
var similarListElement = setupModal.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Получаем случайное имя и фамилию
var getWizardName = function () {
  var nameGenerate = Math.floor(Math.random() * WIZARD_NAMES.length);
  var surnameGenerate = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  return (WIZARD_NAMES[nameGenerate]) + ' ' + (WIZARD_SURNAMES[surnameGenerate]);
};

// Получаем случайный цвет плаща
var getWizardCoatColor = function () {
  var coatRandom = Math.floor(Math.random() * WIZARD_COAT_COLORS.length);
  return (WIZARD_COAT_COLORS[coatRandom]);
};

// Получаем случайный цвет глаз
var getWizadEyesColor = function () {
  var eyesRandom = Math.floor(Math.random() * WIZARD_EYES_COLORS.length);
  return (WIZARD_EYES_COLORS[eyesRandom]);
};

// Отрисовка волшебника
var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


// Добавляем волшебников на страницу
var renderWizard = function (number) {

  // Рендерим нужное количество волшебников
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards.push({
      name: getWizardName(),
      coatColor: getWizardCoatColor(),
      eyesColor: getWizadEyesColor()
    });

    // Выводим волшебников на страницу
    var fragment = document.createDocumentFragment();
    fragment.appendChild(createWizard(wizards[i]));
    similarListElement.appendChild(fragment);
  }
};
renderWizard(4);

// Показываем и скрываем окно с настройками при клике на аватарку
var showSetupModal = function () {
  setupOpenButton.addEventListener('click', function () {
    setupModal.classList.toggle('hidden');
    setupModal.querySelector('.setup-similar').classList.toggle('hidden');
  });
};
showSetupModal();

// Скрывыем окно с настройками при клике на 'X'(закрыть)
var hideSetupModal = function () {
  setupCloseButton.addEventListener('click', function () {
    setupModal.classList.toggle('hidden');
    setupModal.querySelector('.setup-similar').classList.toggle('hidden');
  });
};
hideSetupModal();
