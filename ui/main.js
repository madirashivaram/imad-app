//Counter code
var button = document.getElementById('counter');
var coumter = 0;

button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.tostring();
};
