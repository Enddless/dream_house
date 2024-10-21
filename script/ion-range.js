$(document).ready(function () {
  const basePrices = {
    elite: 35000, // цена за 1 м²
    vip: 55000,
    extra: 75000
  };

  const minSize = 30; // Минимальный размер в м²
  const maxSize = 150; // Максимальный размер в м²

  function updatePrice() {
    const sliderValue = $('#demo_0').data('ionRangeSlider').result.from;

    let selectedService = $('input[name="service"]:checked').attr('id');
    let servicePrice = 0;

    if (selectedService) {
      servicePrice =
        basePrices[
          selectedService === 'check1'
            ? 'elite'
            : selectedService === 'check2'
            ? 'vip'
            : 'extra'
        ];
    }

    const totalPrice = servicePrice * sliderValue; // Общая цена = цена за м² * площадь

    $('#price').text(totalPrice.toFixed(0) + ' ₽'); // Обновляем цену
    $('#view').text(
      selectedService === 'check1'
        ? 'Elite'
        : selectedService === 'check2'
        ? 'VIP'
        : 'Extra'
    ); // Обновляем выводимый вид
  }

  $('#demo_0').ionRangeSlider({
    min: minSize,
    max: maxSize,
    from: minSize,
    step: 10,
    onChange: function () {
      $('#length').text($('#demo_0').data('ionRangeSlider').result.from + ' м');
      updatePrice(); // Обновляем цену при изменении слайдера
    }
  });

  // Инициализация значений в output
  const defaultSize = 30; // По умолчанию 30 м
  $('#length').text(defaultSize + ' м');
  $('#view').text('Elite'); // Устанавливаем выбранный вид по умолчанию

  // Рассчитываем цену по умолчанию
  const defaultPrice = basePrices.elite * defaultSize; // Цена элитной услуги * 30 м²
  $('#price').text(defaultPrice + ' ₽'); // Устанавливаем цену по умолчанию

  // Обработчик для радиокнопок
  $('input[name="service"]').on('change', function () {
    updatePrice(); // Обновляем цену при изменении радиокнопок
  });

  // Обновляем цену при загрузке страницы
  updatePrice();
});
