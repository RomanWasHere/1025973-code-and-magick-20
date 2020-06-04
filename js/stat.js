'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // Стандартный отступ
var GAP_BAR = 50; // Отступ для колонок
var BAR_HEIGHT = 40;
var BAR_WIDTH = 150;

// Создание тени
var renderCloudShadow = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x + GAP, y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Создание облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color; // Строка
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Создание текста результатов
var renderTextResult = function (ctx, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 150, 25);
  ctx.fillText('Список результатов:', 150, 45);
};

// Отрисовка имени игрока
var renderPlayerNames = function (ctx, playerArray, player, color) {
  ctx.fillStyle = color; // Строка
  ctx.fillText(playerArray[player], CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * player, CLOUD_HEIGHT - 2 * GAP);
};

// Окрашивание колонки
var colorPlayerColumn = function (ctx, playerArray, player) {
  if (playerArray[player] === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    var saturation = Math.floor(Math.random() * (250 - 50));
    ctx.fillStyle = 'rgba(0, 0, ' + saturation + ', 1)';
  }
};

// Отрисовка потраченного времени
var renderPlayerTime = function (ctx, player, time, maxTime, color) {
  ctx.fillStyle = color; // Строка
  ctx.fillText(Math.round(time[player]), CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * player, BAR_WIDTH + GAP_BAR + 2 * GAP - (BAR_WIDTH * time[player] / maxTime));
};

// Отрисовка колонки
var renderPlayerColumn = function (ctx, player, time, maxTimes) {
  ctx.fillRect(CLOUD_X + GAP_BAR + (GAP_BAR + BAR_HEIGHT) * player, CLOUD_HEIGHT - 3 * GAP, BAR_HEIGHT, -BAR_WIDTH * time[player] / maxTimes);
};

// Поиск количества всех результатов
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
window.renderStatistics = function (ctx, playersArray, times) {

  // Отрисовка тени облака
  renderCloudShadow(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');

  // Отрисовка облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  // Отрисовка текста с результатами
  renderTextResult(ctx, 'black');

  // Максимальное количество результатов
  var maxTimes = getMaxElement(times);

  // Отрисовка колонок и данных
  for (var playerIndex = 0; playerIndex <= playersArray.length - 1; playerIndex++) {

    // Отрисовка имен игроков
    renderPlayerNames(ctx, playersArray, playerIndex, 'black');

    // Окрашивание колонок игроков
    colorPlayerColumn(ctx, playersArray, playerIndex);

    // Отрисовка колонок игроков
    renderPlayerColumn(ctx, playerIndex, times, maxTimes);

    // Отрисовка времени игроков
    renderPlayerTime(ctx, playerIndex, times, maxTimes, 'green');
  }
};
