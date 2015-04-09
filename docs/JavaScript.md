# Cheetsheet
### [Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
The bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

### [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

# L10n
`new Date().getTimezoneOffset();`
`var timeOffsetInHours = -(new Date()).getTimezoneOffset()/60  //Note that daylight savings time is factored into the result `

* [http://momentjs.com](http://momentjs.com)
* [https://github.com/mde/timezone-js](https://github.com/mde/timezone-js)
* [https://github.com/jquery/globalize](https://github.com/jquery/globalize)

# FAQ
### How to beautify JSON Using JavaScript
`JSON.stringify(jsObj, null, "\t"); // stringify with tabs inserted at each level`
`JSON.stringify(jsObj, null, 4);    // stringify with 4 spaces at each level`

### what is the reason behind passing undefined as one of the parameter to anonymous function?

### Object.indexOf is not supported in IE8

### [What is the !! (not not) operator in JavaScript?](http://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript)

### string.replace(/xxx/g,"yyy");

### How to split a string on the first occurrence of one of multiple substrings in JavaScript?
`str.replace(/foo|bar/,"\x034").split("\x034")`
idea is replace the first occurrence with a special(invisible) String, and then split against this string.

```javascript
function getQueryVariable(query) {
    var vars = query.split('&'),
	     res = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
        res[decodeURIComponent(pair[0]) ] = decodeURIComponent(pair[1]) ;
    }
    console.log('Query variable %s not found', variable);
}
```

