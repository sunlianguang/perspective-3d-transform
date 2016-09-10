var addEvent = function (el, type, fn) {
    if (el.addEventListener) {
        el.addEventListener(type, fn, false);
    } else {
        el["e" + fn] = function () {
            fn.call(el, window.event);
        }
        el.attachEvent("on" + type, el["e"+fn]);
    }
}

window.onload = function () {
    var box = document.querySelector(".box"),
        container = document.querySelector(".container");

    addEvent(container, 'mousemove', function (e) {
        e = e || window.event;
        var rotate_x = parseInt(((e.clientX - this.offsetLeft) / this.clientWidth * 2 - 1) * 10);
        var rotate_y = parseInt(((e.clientY - this.offsetTop) / this.clientHeight * 2 - 1) * -10);
        container.style.transform = "rotateX(" + rotate_y + "deg) rotateY(" + rotate_x + "deg)";
        console.log(rotate_x);
        console.log(rotate_y);
    })

    addEvent(container, 'mouseout', function () {
        container.style.transform = "rotateX(0deg) rotateY(0deg)";

    })
}