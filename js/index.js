
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate');
  
    function isElementVisible(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= windowHeight && rect.bottom >= 0;
    }
  
    function checkVisibility() {
      elements.forEach(function(element) {
        if (isElementVisible(element)) {
          element.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 初始化检查，确保在加载时立即显示可见元素的动画
  });
    document.getElementById("image").addEventListener("click", function() {
    window.location.href = "login.html";
  });


  


  