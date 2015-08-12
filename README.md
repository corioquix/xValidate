# xValidate
####[ Version: 2.1, License: MIT License ]
It is a small script in JavaScript to validate forms and his events.
To include xValidate you only need to call external code file. With xValidate you can validate different types [text, number, email, date and url].

##.options() Event
Customize the color of valid or invalid fields, as their different messages.

```javascript
xValidate.options({
  //css color fields
  errorColor: 'red', 
  successColor: 'green',
  //error menssages
  textError: 'Text error',
  numberError: 'Number error',
  emailError: 'E-mail error',
  dateError: 'Date error',
  urlError: 'Web link error'
});
```
##.try() Event

Validate a field unique.

```javascript
// some input type email with id#mail
xValidate.try({
  element: '#mail',
  type: 'text',
  onSuccess: function(){
    console.log('{"field": "valid"}');
  }
});
```

##.tryArray() Event

Validate an array with different fields.

```html
  <input type="text" id="name" value="Juan" />
  <input type="number" id="age" value="26" />
  <input type="email" id="mail" value="juan@mail.com" />
```

```javascript
// array with elements id and types
var arrElem = ['#name', '#age', '#mail'],
    arrTypes = ['text', 'number', 'email'];
    
xValidate.tryArray({
  elemArray: arrElem,
  typeArray: arrTypes,
  onSuccess: function(){
    console.log('{"fields": "valid"}');
  }
});
```
[See example](http://jsfiddle.net/7q750av3/])
