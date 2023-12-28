document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var sidebar = document.querySelector('.sidebar');

    // 打开或关闭侧边栏
    function toggleSidebar() {
        sidebar.style.left = sidebar.style.left === '0px' ? '-200px' : '0px';
    }

    // 点击汉堡菜单时切换侧边栏状态
    hamburger.addEventListener('click', function(event) {
        toggleSidebar();
        event.stopPropagation(); // 阻止事件冒泡
    });

    // 点击页面其他地方时关闭侧边栏
    document.addEventListener('click', function(event) {
        var isClickInside = hamburger.contains(event.target) || sidebar.contains(event.target);

        if (!isClickInside && sidebar.style.left === '0px') {
            toggleSidebar();
        }
    });
});

// document.addEventListener('DOMContentLoaded', function() {
    // var currentIndex = 0; // 当前图片索引
    // var imageElement = document.querySelector('.centered-container img'); // 获取图片元素

    // window.addEventListener('scroll', function() {
    //     currentIndex++; // 每次滚动递增索引
    //     if (currentIndex >= images.length) {
    //         currentIndex = 0; // 如果超出数组长度，重置为0
    //     }
    //     imageElement.src = images[currentIndex]; // 更新图片源
    // });
// });
