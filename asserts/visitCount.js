var count = (parseInt(localStorage.getItem('visited')) || 0) + 1
localStorage.setItem('visited', count)
document.getElementById('visitCount').textContent = count
