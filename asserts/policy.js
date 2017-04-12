// Sets all elements with the class 'policy' to have the proper policy set.
var eles = document.getElementsByClassName('policy')
for (var i = 0; i < eles.length; i++) {
  watchPolicy(eles[i])
}

function watchPolicy(element) {
  setInterval(function () {
    element.textContent = fetchPolicy()
  }, Math.random()*1500+1000)
}


var policies = [
  'Any negative polls are fake news',
  'And nobody builds walls better than me, believe me',
  'Some, I assume, are good people',
  'I just don\'t feel good about it',
  'very smart'
]

/**
 * Carefully determine the current Whitehouse policy on the issue
 */
function fetchPolicy() {
  return policies[Math.floor(Math.random() * policies.length)]
}
