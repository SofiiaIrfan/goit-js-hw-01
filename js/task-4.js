const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let totalAmount;

const question = prompt('Сколько дроидов Вы хотите приобрести?');

if (question === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (pricePerDroid * question > credits) {
  message = 'Не достаточно средств на счету!';
  console.log(message);
} else {
  totalPrice = question * pricePerDroid;
  totalAmount = credits - totalPrice;
  console.log(
    `Вы приобрели ${question} дроидов на сумму ${totalPrice} кредитов, на счету осталось ${totalAmount} кредитов`,
  );
}
