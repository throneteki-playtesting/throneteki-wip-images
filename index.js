window.onload = function() {
    document.querySelectorAll('.auto-size').forEach(function(item) {
      let fontSize = parseInt(window.getComputedStyle(item, null).getPropertyValue("font-size"), 10);
      while(fontSize > 0 && (item.scrollHeight > item.clientHeight || item.scrollWidth > item.clientWidth)) {
          fontSize -= 0.5;
          item.style.fontSize = fontSize + "px";
      }
    });
};