
// Background Image
document.getElementById("bg").style.background = `url("assets/images/${Math.floor(Math.random() * 2) + 1}.jpg") no-repeat center center/cover`;
// Form Drag    
let el = document.getElementById('formbox')
el.addEventListener('mousedown', function (e) {
    var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

    function mouseMoveHandler(e) {
        el.style.top = (e.clientY - offsetY) + 'px';
        el.style.left = (e.clientX - offsetX) + 'px';
    }

    function reset() {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', reset);
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', reset);
});
// Form Submit
document.getElementById("form").onsubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
}
