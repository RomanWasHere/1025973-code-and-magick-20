'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['rgb(0,0,0)', 'rgb(255,0,0)', '(0,0,255)', 'rgb(255,255,0)', 'rgb(0,128,0)']; // Переконвертировал исходные значения в RGB чтобы генерировать

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

// Волшебники
var wizards = [
  {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizadEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizadEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizadEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizadEyesColor()
  }
];

// Отрисовка волшебника
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// Добавляем волшебников в шаблон
for (var i = 0; i < wizards.length; i++) {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(renderWizard(wizards[i]));
  similarListElement.appendChild(fragment);
}


// Показываем и скрываем окно с настройками при клике на аватарку
var showSetupModal = function () {
  setupOpenButton.addEventListener('click', function () {
    setupModal.classList.toggle('hidden');
    setupModal.querySelector('.setup-similar').classList.toggle('hidden');
  });
};
showSetupModal();

// Скрывыем окно с настройками при клике на 'X'
var hideSetupModal = function () {
  setupCloseButton.addEventListener('click', function () {
    setupModal.classList.toggle('hidden');
    setupModal.querySelector('.setup-similar').classList.toggle('hidden');
  });
};
hideSetupModal();
