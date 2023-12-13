let time = document.getElementById("current-time");

    setInterval(() =>{
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();
    },1000)



  document.addEventListener('DOMContentLoaded', function () {
    // Function to shuffle the boxes
    function shuffleBoxes() {
      var boxesContainer = document.querySelector('.boxes');
      for (var i = boxesContainer.children.length; i >= 0; i--) {
        boxesContainer.appendChild(boxesContainer.children[Math.random() * i | 0]);
      }
    }

    // Add click event listener to the shuffle button
    var shuffleButton = document.getElementById('shuffle-button');
    if (shuffleButton) {
      shuffleButton.addEventListener('click', shuffleBoxes);
    }
  });