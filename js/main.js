
function validateName() {
    var jslist = document.getElementsByClassName("name");
    var i;
    for (i = 0; i < jslist.length; i++) {
        jsname = jslist[i].value;
        jscapname = jsname.charAt(0).toUpperCase() + jsname.slice(1);
        jslist[i].setAttribute("value", jscapname);
    }
}

function getBirthdate() {
    var jsyear = document.getElementById("year"),
        jsmonth = document.getElementById("month"),
        jsday = document.getElementById("day");

    var d = new Date();
    var g = d.getFullYear();
    for (var i = g; i >= 1900; i--) {
        var opt = new Option();
        opt.value = opt.text = i;
        jsyear.add(opt);
    }
    jsyear.addEventListener("change", validate_date);
    jsmonth.addEventListener("change", validate_date);
    validate_date(jsyear, jsmonth, jsday);
}

function validate_date(jsyear, jsmonth, jsday) {
    var y = jsyear.value,
     m = jsmonth.value,
     d = jsday.value;
     console.log(y);
    if (m === "2")
        var mlength = 28 + (!(y & 3) && ((y % 100) !== 0 || !(y & 15)));
    else var mlength = [31, 28, 31, 30, 31, 30, 30, 31, 30, 31, 30, 31][m - 1];
    jsday.length = 0;
    for (var i = 1; i <= mlength; i++) {
        var opt = new Option();
        opt.value = opt.text = i;
        if (i == d) opt.selected = true;
        jsday.add(opt);
    }
}

function validate_email() {
    var jsemail = document.getElementById("email");
    var jsfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!jsfilter.test(jsemail.value)) {
        jsemail.focus;
        jsemail.classList.add('notValid');
    }
    else {
        jsemail.classList.remove('notValid');
    }

}
function validate_pnum() {
    var jsnum = document.getElementById("phoneNumber");
    var jsfilter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!jsfilter.test(jsnum.value)) {
        jsnum.focus;
        jsnum.classList.add('notValid');
    }
    else {
        jsnum.classList.remove('notValid');
    }

}
function submitForm() {
    var http = new XMLHttpRequest();
    http.open("POST", "", true);
    http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var jsfname = document.getElementById("firstname");
    var jslname = document.getElementById("lastname");
    var params = "firstname=" + jsfname + "lastname=" + jslname; // probably use document.getElementById(...).value
    http.send(params);
    http.onload = function() { 
        insertBanner();
        document.getElementById("banner").style.display = "inline";
        document.getElementById("subButton").disabled = true;  
    }
}
function insertBanner() {
    var ban = document.createElement("div");
    var t = document.createTextNode("Check network tab for POST submit, sorry this form doesn't submit anywhere. Have a great day!");
    ban.appendChild(t);
    document.getElementById("banner").appendChild(ban);
}

function onSubmit() {
    var x = document.getElementsByClassName("notValid").length;
    if (x > 0) {
    }
    else {
        submitForm();
    }

}

