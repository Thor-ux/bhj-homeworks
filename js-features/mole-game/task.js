(() => {
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    let deadCount = 0;
    let lostCount = 0;
  
    function getHole(index) {
      return document.getElementById(`hole${index}`);
    }
  
    function handleClick(event) {
      if (event.target.classList.contains('hole_has-mole')) {
        deadCount++;
        dead.textContent = deadCount;
      } else {
        lostCount++;
        lost.textContent = lostCount;
      }
  
      checkGameStatus();
    }
  
    function checkGameStatus() {
      if (deadCount >= 10) {
        alert('Вы победили!');
        resetGame();
      } else if (lostCount >= 5) {
        alert('Вы проиграли!');
        resetGame();
      }
    }
  
    function resetGame() {
      deadCount = 0;
      lostCount = 0;
      dead.textContent = deadCount;
      lost.textContent = lostCount;
    }
  
    // Click for all holes
    for (let i = 1; i <= 9; i++) {
      getHole(i).addEventListener('click', handleClick);
    }
  })();