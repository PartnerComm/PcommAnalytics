module.exports = () => {
  const a = window.location.hostname;
  return a === 'localhost' || a.indexOf('pcommstaging') >= 0;
}
