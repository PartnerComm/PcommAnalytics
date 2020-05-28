module.exports = (el, e = {}) => {
  if (!el.href || e.metaKey || e.ctrlKey || el.hostname === window.location.hostname || el.getAttribute('target') === '_blank') {
    return false;
  }
  let target = el.getAttribute('target');
  // if (target === '_blank') {
  //   return false;
  // }
  if (e.preventDefault) e.preventDefault();
  window.setTimeout(() => {
      window.open(el.href, target);
    },
    // slow down redirect to eliminate any sort of race condition
    100
  );
  return el.href;
}
