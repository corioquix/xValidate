/*
    * xValidate is open sourced under the MIT license.
    * 2015 Josue Marin - josue.marin.ch@gmail.com
    * http://github.com/corioquix
    * v.2.1
*/

var xValidate = {
    conf: {
        text: /^./,
        email: /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,
        number: /^(?:\+|-)?\d+$/,
        date: /\d{4}-\d{1,2}-\d{1,2}/,
        url: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        textError: "Insert a text",
        emailError: "Insert an email",
        numberError: "Insert a number",
        dateError: "Insert a date",
        urlError: "Insert a web link",
        onErrorColor: "#FA5858",
        onSuccessColor: "#FFFFFF"
    },
    options: function(b) {
        this.conf.onErrorColor = b.errorColor || this.conf.onErrorColor;
        this.conf.onSuccessColor =
            b.successColor || this.conf.onSuccessColor;
        this.conf.textError = b.textError || this.conf.textError;
        this.conf.emailError = b.emailError || this.conf.emailError;
        this.conf.numberError = b.numberError || this.conf.numberError;
        this.conf.dateError = b.dateError || this.conf.dateError;
        this.conf.urlError = b.urlError || this.conf.urlError
    },
    onValidate: function(b) {
        var c = document.querySelector(b.element);
        if (c.value.match(b.type) && "" != c.value) return c.style["background-color"] = this.conf.onSuccessColor, 101;
        alert(b.men);
        c.focus();
        c.style["background-color"] = this.conf.onErrorColor;
        return 102
    },
    "try": function(b) {
        var c;
        switch (b.type) {
            case "text":
                c = this.onValidate({
                    element: b.element,
                    type: this.conf.text,
                    men: this.conf.textError
                });
                break;
            case "email":
                c = this.onValidate({
                    element: b.element,
                    type: this.conf.email,
                    men: this.conf.emailError
                });
                break;
            case "number":
                c = this.onValidate({
                    element: b.element,
                    type: this.conf.number,
                    men: this.conf.numberError
                });
                break;
            case "date":
                c = this.onValidate({
                    element: b.element,
                    type: this.conf.date,
                    men: b["this"].conf.dateError
                });
                break;
            case "url":
                c = this.onValidate({
                    element: b.element,
                    type: this.conf.url,
                    men: this.conf.urlError
                });
                break;
            default:
                console.warn(".try()-> error type")
        }
        if (101 == c) b.onSuccess()
    },
    tryArray: function(b) {
        var c, d = 0;
        for (a in b.elemArray) switch (c = a, b.typeArray[c]) {
            case "text":
                d += this.onValidate({
                    element: b.elemArray[a],
                    type: this.conf.text,
                    men: this.conf.textError
                });
                break;
            case "email":
                d += this.onValidate({
                    element: b.elemArray[a],
                    type: this.conf.email,
                    men: this.conf.emailError
                });
                break;
            case "number":
                d += this.onValidate({
                    element: b.elemArray[a],
                    type: this.conf.number,
                    men: this.conf.numberError
                });
                break;
            case "date":
                d += this.onValidate({
                    element: b.elemArray[a],
                    type: this.conf.date,
                    men: this.conf.dateError
                });
                break;
            case "url":
                d += this.onValidate({
                    element: b.elemArray[a],
                    type: this.conf.url,
                    men: this.conf.urlError
                });
                break;
            default:
                console.warn(".tryArray()-> error type")
        }
        c = b.elemArray.length;
        if (d == 101 * c) b.onSuccess()
    }
};
