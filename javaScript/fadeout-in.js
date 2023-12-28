document.getElementById('toggle-container').addEventListener('click', function () {
    // 为#toggle-container设置淡出动画
    var toggleContainer = document.getElementById('toggle-container');
    toggleContainer.style.animation = 'fadeOut 1s ease forwards';

    // 监听动画结束事件
    toggleContainer.addEventListener('animationend', function () {
        toggleContainer.style.display = 'none'; // 隐藏toggle-container

        // 显示并开始淡入动画
        var centerTextContainer = document.getElementById('center-text-container');
        centerTextContainer.style.display = 'flex';
        centerTextContainer.style.animation = 'fadeIn 1s ease forwards';
    }, { once: true }); // 使用once选项确保事件处理函数只执行一次
});
