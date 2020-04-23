document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement,
    text = target.textContent || target.innerText,
    classN = target.className;

  if (
    target.getAttribute('style') == null ||
    target.getAttribute('style') == ''
  ) {
    console.info(target);
    target.style.border = 'dashed 3px red';
  } else {
    target.style.border = '';
  }

  false;
});
