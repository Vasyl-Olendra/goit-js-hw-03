const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
console.log('mood: ', user.mood);
user.hobby = 'skydiving';
console.log('hobby: ', user.hobby);
user.premium = false;
console.log('premium: ', user.premium);

const keys = Object.keys(user);

for (const key of keys) {
  console.log('Key: ', key);
  console.log('Value: ', user[key]);
}

//   Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
