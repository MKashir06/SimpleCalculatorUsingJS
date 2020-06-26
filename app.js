function getNumValue(num) {
    var result = document.getElementById("resultShow");
    result.value += num;
}

function clearNumValue(num) {
    var result = document.getElementById("resultShow");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("resultShow");
    result.value = eval(result.value);
}

function backSpace() {
    var result = document.getElementById("resultShow");
    result.value = result.value.slice(0, result.value.length - 1);
}