function openModal() {
    document.getElementById("aboutUsModal").style.display = "block";
}

function closeModal() {
    document.getElementById("aboutUsModal").style.display = "none";
}

// 点击窗口外部关闭弹窗
window.onclick = function(event) {
    var modal = document.getElementById("aboutUsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

    // document.addEventListener('DOMContentLoaded', function() {
    //     var container = document.querySelector('.image-container');
    //     var imgs = container.getElementsByTagName('img');
    //     var containerWidth = container.offsetWidth;
    //     var containerHeight = container.offsetHeight;
    //     var imgWidth = 100;  // 固定图片宽度
    //     var imgHeight = 100; // 固定图片高度

    //     for (var i = 0; i < imgs.length; i++) {
    //         var img = imgs[i];

    //         var maxX = containerWidth - imgWidth;
    //         var maxY = containerHeight - imgHeight;

    //         var randomX = Math.random() * maxX;
    //         var randomY = Math.random() * maxY;

    //         img.style.left = randomX + 'px';
    //         img.style.top = randomY + 'px';
    //     }
    // });
