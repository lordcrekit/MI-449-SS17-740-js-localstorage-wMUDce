/**
 * Sets the colorscheme for the website, based on stored settings. 
 */
function SetTheMood() {
  var dark = window.localStorage.getItem('dark') === 'true'
  document.getElementsByTagName('BODY')[0].className = dark
    ? 'night-theme'
    : 'day-theme'
}

/**
 * Pull a 180 out of nowhere on the colorscheme for the website. The change is
 *  preserved in stored settings.
 */
function TrumpOnLightingPolicy() {
  window.localStorage.setItem('dark', window.localStorage.getItem('dark') !== 'true')
  SetTheMood()
}
