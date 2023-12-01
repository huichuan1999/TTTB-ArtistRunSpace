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