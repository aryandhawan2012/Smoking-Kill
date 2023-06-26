function preload() {
    window.location = "index.html";
}

function wrong1() {
    window.location = "wrong1.html";
}

function correct1() {
    window.location = "correct1.html";
}

function correct2() {
    window.location = "correct2.html";
}

function wrong2() {
    window.location = "wrong2.html";
}

function correct3() {
    window.location = "correct3.html";
}

function wrong3() {
    window.location = "wrong3.html";
}

function correct4() {
    window.location = "correct4.html";
}

function wrong4() {
    window.location = "wrong4.html";
}

function correct5() {
    window.location = "correct5.html";
}

function wrong5() {
    window.location = "wrong5.html";
}

function correct6() {
    window.location = "correct6.html";
}

function wrong6() {
    window.location = "wrong6.html";
}

function send() {
    number = document.getElementById("number").value;
    smoked = document.getElementById("smoked").value;

    nicotine_day = number * 1.8;
    nicotine_year = nicotine_day * 365;
    shorten = number * 11;
    shortenyear = (shorten * 365 * smoked)/(60 * 24 * 365);
    moneyday = number * 1.75;   
    moneyear = moneyday * 365;
    totalmoney = moneyear * smoked;
    new_nicotine_day = nicotine_day;
    new_nicotine_year = parseInt(nicotine_year);
    new_shorten = parseInt(shorten);
    new_moneyday = parseInt(moneyday);
    new_moneyear = parseInt(moneyear);
    new_totalmoney = parseInt(totalmoney)
    console.log(number);
    console.log(nicotine_day);
    console.log(nicotine_year);
    console.log(shorten);
    console.log(moneyday);
    console.log(moneyear);
    console.log(totalmoney);
    console.log(new_nicotine_day);
    console.log(new_nicotine_year);
    console.log(new_shorten);
    console.log(new_moneyday);
    console.log(new_moneyear);
    console.log(new_totalmoney);
    document.getElementById("nicotineday").innerHTML = "Nicotine inhaled per day is " + new_nicotine_day + " mg.";
    document.getElementById("nicoyear").innerHTML = "Nicotine inhaled per year is " + new_nicotine_year + " mg.";
 document.getElementById("short").innerHTML = "Your life is shortened per day by " + new_shorten + " minutes by smoking " + number + " cigarettes in a day.";
    document.getElementById("short365").innerHTML = "Your average life expectancy reduced by " + shortenyear + " years if you smoke " + number + " cigarettes daily for " + smoked + " years.";   
    document.getElementById("money1").innerHTML = "Money spend by you per day on smoking is $" + new_moneyday + ".";
    document.getElementById("money365").innerHTML = "Money spend by you in a year on smoking is $" + new_moneyear + ".";
    document.getElementById("moneyspend").innerHTML = "Total money spend by you so far is $" + new_totalmoney;
}

function startquiz() {
    window.location = "quiz1.html";
}

function onetwonext() {
    window.location = "quiz2.html";
}

function twothreenext() {
    window.location = "quiz3.html";
}

function threefournext() {
    window.location = "quiz4.html";
}

function fourfivenext() {
    window.location = "quiz5.html";
}

function fivesixnext() {
    window.location = "quiz6.html";
}

function goback() {
    window.location = "quiz.html";
}
