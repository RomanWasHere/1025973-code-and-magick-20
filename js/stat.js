'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 40;
var BAR_WIDTH = 150;
var GAP_BAR = 50;

// Создание облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Постройка колонок
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// Вывод статистики
window.renderStatistics = function (ctx, players, times) {
  // Отрисовка тени и облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Вывод текста
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 150, 25);
  ctx.fillText('Список результатов:', 150, 45);

  // Количество колонок
  var maxTime = getMaxElement(times);

  // Цикл на отрисовку имен победителей
  for (var i = 0; i <= players.length - 1; i++) {
    ctx.fillStyle = 'black ';
    ctx.fillText(players[i], CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i, CLOUD_HEIGHT - 2 * GAP);
  }

  // Функция для окрашивания колонок
  var getMaxNumber = function (min, max) {
    var saturation = Math.floor(Math.random() * (max - min) + min);
    ctx.fillStyle = 'rgba(0, 0, ' + saturation + ', 1)';
  };

  // Отрисовка колонок
  for (i = 0; i <= players.length - 1; i++) {

    // Генерация цвета для колонок
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      getMaxNumber(50, 250);
    }

    // Отрисовка колонок для каждого игрока
    ctx.fillRect(CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i, CLOUD_HEIGHT - 3 * GAP, BAR_HEIGHT, -BAR_WIDTH * times[i] / maxTime);

    // Отрисовка значений для каждого игрока
    ctx.fillStyle = 'green';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * i, BAR_WIDTH + GAP_BAR + 2 * GAP - (BAR_WIDTH * times[i] / maxTime));
  }
};
