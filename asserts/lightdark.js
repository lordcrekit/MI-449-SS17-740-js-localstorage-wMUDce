/**
 * Sets the colorscheme for the website, based on stored settings. 
 */
function SetTheMood() {
  var dark = window.localStorage.getItem('dark') === 'true'
  document.getElementsByTagName('BODY')[0].className = dark
    ? 'night-theme'
    : 'day-theme'
  document.getElementById('trumpButton').value = dark
    ? 'Come to the light!'
    : 'Join the dark side!'
  var count = parseInt(window.localStorage.getItem('trumpCount')) || 0
  document.getElementById('trumpCount').textContent = count;
}

/**
 * Pull a 180 out of nowhere on the colorscheme for the website. The change is
 *  preserved in stored settings.
 */
function TrumpOnLightingPolicy() {
  window.localStorage.setItem('dark', window.localStorage.getItem('dark') !== 'true')
  window.localStorage.setItem('trumpCount',
      (parseInt(window.localStorage.getItem('trumpCount')) || 0) + 1)
  SetTheMood()
}
