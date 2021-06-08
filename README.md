Write tests for the function `checkPassword`, which takes the string` password` and returns `true` for the valid password, and` false` for invalide.  

Rules for the valid password:
- accepts only letters of the Latin alphabet `Aa-Zz`;
- at least 8 characters inclusive;
- maximum 16 characters inclusive;
- contains at least 1 digit, 1 special character, 1 uppercase letter.

Examples:
```js
checkPassword('Password1!') === true
getHumanAge('qwerty') === false
getHumanAge('Str@ng') === false
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)