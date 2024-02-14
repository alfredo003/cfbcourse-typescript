"use strict";
var day;
(function (day) {
    day[day["Monday"] = 1] = "Monday";
    day[day["sunday"] = 2] = "sunday";
    day[day["Tuesday"] = 3] = "Tuesday";
})(day || (day = {}));
var colors;
(function (colors) {
    colors["write"] = "#fff";
    colors["black"] = "#000";
    colors["red"] = "#f00";
})(colors || (colors = {}));
let income = 1500;
if (income > 2500) {
    var tax = 500;
}
else {
    var tax = 200;
}
console.log(tax);
