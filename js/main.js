let elem3 = document.getElementById('elem-three');
let elem4 = document.getElementById('elem-four');

elem3.addEventListener('mouseover', function (event) {
    document.querySelector('.flex-container_element-three').classList.add('active');
    elem4.style.opacity = 0;
    elem4.style.zIndex = -1;
    document.getElementById('elem-three-desc').style.visibility = 'visible';
});

elem3.addEventListener('mouseout', function (event) {
    document.querySelector('.flex-container_element-three').classList.remove('active');
    elem4.style.opacity = 100;
    elem4.style.zIndex = 1;
    document.getElementById('elem-three-desc').style.visibility = 'hidden';
});

elem4.addEventListener('mouseover', function (event) {
    document.querySelector('.flex-container_element-four').classList.add('active');
    elem3.style.opacity = 0;
    elem3.style.zIndex = -1;
    document.getElementById('elem-four-desc').style.visibility = 'visible';
});

elem4.addEventListener('mouseout', function (event) {
    document.querySelector('.flex-container_element-four').classList.remove('active');
    elem3.style.opacity = 100;
    elem3.style.zIndex = 1;
    document.getElementById('elem-four-desc').style.visibility = 'hidden';
});