let question = prompt('Введите страну назначения');
question = question.toLowerCase();
let price;
let country;

switch (question) {
  case 'китай':
    price = 100;
    country = 'Китай';
    console.log(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  case 'чили':
    price = 250;
    country = 'Чили';
    console.log(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  case 'австралия':
    price = 170;
    country = 'Австралию';
    console.log(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  case 'индия':
    price = 80;
    country = 'Индию';
    console.log(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  case 'ямайка':
    price = 120;
    country = 'Ямайку';
    console.log(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  default:
    alert('В Вашу страну доставка не доступна');
}

