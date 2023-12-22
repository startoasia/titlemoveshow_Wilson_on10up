let FVPic = document.querySelector('#fv-pic');
setTimeout(() => {
    FVPic.classList.add('is-active');
}, 800);
// 選取所有帶有 "scroll-trigger" 的元素
var scrollTriggerElements = document.querySelectorAll('.pic');
// 監聽滾動事件
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // 遍歷每個帶有 "scroll-trigger" 的元素
    scrollTriggerElements.forEach(function(element) {
        // console.log(element.offsetTop)

        var targetId = element.getAttribute('data-scroll-target');
        // console.log(targetId)
        var targetElement = document.getElementById(targetId);
        // console.log(targetElement)

        if (targetElement) {
            var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            // 判斷是否滾動到目標位置，然後添加或移除 class
            if (scrollPosition >= targetPosition - 600) {
                element.classList.add('is-active');
            }
            // else {
            //     element.classList.remove('is-active');
            // }
        }
    });
});