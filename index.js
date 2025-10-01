(function(window, _) {
  window.meow = window.meow || {
    numz: {
        calculateDistance(player1, player2) {
            const dx = player1.x - player2.x;
            const dy = player1.y - player2.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    },
    phyz: {

    },
  };
}(window, window._)); 