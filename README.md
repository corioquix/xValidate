# xValidate
####[ Version: 2.2, License: MIT License ]
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
##.required() Event
Validate multiple fields, with the same parent container and using the tag "data-required"
```html
  <!-- The attr data-required receives its type -->
  <form id="f_parent">
    <input type="text" data-required="text" value="Juan" />
    <input type="number"data-required="number" value="26" />
    <input type="email" data-required="email" value="juan@mail.com" />
  </form>
```
```javascript
xValidate.required({
    parentId: 'f_parent',
    onSuccess: function(e){
      //is received parameter(e) with an array of field values
      console.log(e); //["Juan", "26", "juan@mail.com"]
      console.log("Name: "+e[0]+", age: "+e[1]+", email: "+e[2]);
      //Name: Juan, age: 26, email: juan@mail.com
    }
  });
```
[See example](https://jsfiddle.net/upvqpa7c/)

##.try() Event

Validate a field unique.

```javascript
// some input type email with id#mail
xValidate.try({
  element: '#mail',
  type: 'email',
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
[See example](http://jsfiddle.net/7q750av3/)
