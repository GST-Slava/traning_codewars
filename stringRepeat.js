//mdn string repeat documentation https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

function repeatStr(n, s) {
    return s.repeat(n);
}//solutions codewars

//other 

function repeatStr(n, s) {
    var str = "";
    for (var i = 0; i < n; i++)
        str += s;
    return str;
}//1


const repeatStr = (n, s) => s.repeat(n);//2