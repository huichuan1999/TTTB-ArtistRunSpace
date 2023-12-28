function openModal() {
    document.getElementById("aboutUsModal").style.display = "block";
}

function closeModal() {
    document.getElementById("aboutUsModal").style.display = "none";
}

// 点击窗口外部关闭弹窗
window.onclick = function (event) {
    var modal = document.getElementById("aboutUsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.getElementById('text1').addEventListener('mouseenter', function () {
    document.getElementById('img1').src = '../Assets/members/1-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text1').addEventListener('mouseleave', function () {
    document.getElementById('img1').src = '../Assets/members/1.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text2').addEventListener('mouseenter', function () {
    document.getElementById('img2').src = '../Assets/members/2-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text2').addEventListener('mouseleave', function () {
    document.getElementById('img2').src = '../Assets/members/2.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text3').addEventListener('mouseenter', function () {
    document.getElementById('img3').src = '../Assets/members/3-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text3').addEventListener('mouseleave', function () {
    document.getElementById('img3').src = '../Assets/members/3.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text4').addEventListener('mouseenter', function () {
    document.getElementById('img4').src = '../Assets/members/4-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text4').addEventListener('mouseleave', function () {
    document.getElementById('img4').src = '../Assets/members/4.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text5').addEventListener('mouseenter', function () {
    document.getElementById('img5').src = '../Assets/members/5-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text5').addEventListener('mouseleave', function () {
    document.getElementById('img5').src = '../Assets/members/5.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text6').addEventListener('mouseenter', function () {
    document.getElementById('img6').src = '../Assets/members/6-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text6').addEventListener('mouseleave', function () {
    document.getElementById('img6').src = '../Assets/members/6.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text7').addEventListener('mouseenter', function () {
    document.getElementById('img7').src = '../Assets/members/7-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text7').addEventListener('mouseleave', function () {
    document.getElementById('img7').src = '../Assets/members/7.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text8').addEventListener('mouseenter', function () {
    document.getElementById('img8').src = '../Assets/members/8-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text8').addEventListener('mouseleave', function () {
    document.getElementById('img8').src = '../Assets/members/8.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text9').addEventListener('mouseenter', function () {
    document.getElementById('img9').src = '../Assets/members/9-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text9').addEventListener('mouseleave', function () {
    document.getElementById('img9').src = '../Assets/members/9.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('text10').addEventListener('mouseenter', function () {
    document.getElementById('img10').src = '../Assets/members/10-1.png'; // 鼠标悬停时更改为红色图片
});
document.getElementById('text10').addEventListener('mouseleave', function () {
    document.getElementById('img10').src = '../Assets/members/10.png'; // 鼠标移开时恢复原始图片
});