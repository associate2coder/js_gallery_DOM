document.querySelector("#thumbs").addEventListener("click",function(e){e.preventDefault();var t=e.target.closest("a.list-item__link");if(t){var r=new URL(t.getAttribute("href"),window.location.href);document.querySelector("#largeImg").setAttribute("src",r)}});
//# sourceMappingURL=index.8bd57126.js.map
