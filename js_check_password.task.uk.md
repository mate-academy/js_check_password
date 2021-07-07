Напиши тести для функції `checkPassword`, яка приймає рядок `password` і повертає `true` - якщо пароль валідний, та `false` - якщо ні.  

Валідним вважається пароль, який відповідає всім вимогам:
- приймає лише літери латинського алфавіту `Aa-Zz`;
- мінімум 8 символів включно;
- максимум 16 символів включно;
- містить щонайменше 1 цифру, 1 спеціяльний символ, 1 букву у верхньому регістрі.  

Приклади:
```js
checkPassword('Password1!') === true
checkPassword('qwerty') === false
checkPassword('Str@ng') === false
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)
