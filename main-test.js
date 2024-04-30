var images = ['images/S3.png', 'images/S5.png', 'images/S2.png']; 
var bikeNames = ['VanMoof S3', 'VanMoof S5', 'VanMoof S2']; 
var currentImageIndex = bikeNames.indexOf('VanMoof S2'); // Set the current image index
var buttonContainer = document.querySelector('.button-group');
buttonContainer.style.position = 'absolute';
buttonContainer.style.top = '-300px';
buttonContainer.style.left = '150px';
buttonContainer.style.width = '500px';
buttonContainer.style.height = '200px';

document.querySelector('.prev').addEventListener('click', function() {
  this.disabled = true;
  currentImageIndex = ((currentImageIndex - 1 + images.length) % images.length + images.length) % images.length;
  document.getElementById('bike-image').src = images[currentImageIndex];
  updateButtons(buttonGroups[currentImageIndex], buttonPositions[currentImageIndex]);
  document.querySelector('.bike-name').textContent = bikeNames[currentImageIndex];
  setTimeout(() => this.disabled = false, 0);
});

document.querySelector('.next').addEventListener('click', function() {
  this.disabled = true;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('bike-image').src = images[currentImageIndex];
  updateButtons(buttonGroups[currentImageIndex], buttonPositions[currentImageIndex]);
  document.querySelector('.bike-name').textContent = bikeNames[currentImageIndex];
  setTimeout(() => this.disabled = false, 0);
});

var buttonGroups = [
  ['Cartridge', 'Button', 'Socket', 'Battery', 'E-shifter', 'Kick lock'], // Buttons for Bike 1
  ['Cartridge', 'Button', 'Socket', 'Battery', 'E-shifter', 'Kick lock'], // Buttons for Bike 2
  ['Cartridge', 'Button', 'Socket', 'Battery', 'E-shifter', 'Kick lock'] // Buttons for Bike 3
];

var buttonPositions = [
  [{ top: '-15%', left: '65%' }, { top: '-15%', left: '98%' }, { top: '10%', left: '102%' }, { top: '60%', left: '75%' }, { top: '115%', left: '25%' }, { top: '90%', left: '5%' }], // Positions for Bike 1
  [{ top: '-15%', left: '65%' }, { top: '-15%', left: '98%' }, { top: '10%', left: '102%' }, { top: '60%', left: '75%' }, { top: '115%', left: '25%' }, { top: '90%', left: '5%' }], // Positions for Bike 2
  [{ top: '-15%', left: '65%' }, { top: '-15%', left: '98%' }, { top: '10%', left: '102%' }, { top: '60%', left: '75%' }, { top: '115%', left: '25%' }, { top: '90%', left: '5%' }] // Positions for Bike 3
];

function updateButtons(buttonGroup, buttonPositionGroup) {
  var buttonContainer = document.querySelector('.button-group');
  buttonContainer.innerHTML = ''; // Clear the existing buttons
  buttonContainer.style.position = 'relative'; // Make sure the container is positioned

  for (var i = 0; i < buttonGroup.length; i++) {
    var button = document.createElement('button');
    button.className = 'bike-button';
    button.textContent = buttonGroup[i];
    button.style.position = 'absolute';
    button.style.top = buttonPositionGroup[i].top;
    button.style.left = buttonPositionGroup[i].left;

    buttonContainer.appendChild(button);
  }

  // Add event listener to the button with the text "Button"
  document.querySelectorAll('.bike-button').forEach(function(button) {
    if (button.textContent === 'Button') {
        console.log('Adding event listener to button:', button);
        button.addEventListener('click', toggleContent);
    }
  });
}

// Display the buttons for the initial image
updateButtons(buttonGroups[0], buttonPositions[0]);

function toggleContent() {
  console.log('toggleContent was called');
  var homeContent = document.getElementById('home-content');
  var buttoninfoContent = document.getElementById('buttoninfo-content');
  console.log('buttoninfoContent:', buttoninfoContent);

  if (homeContent.style.display !== 'none') {
    homeContent.style.display = 'none';
    buttoninfoContent.style.display = 'block';
  } else {
    homeContent.style.display = 'block';
    buttoninfoContent.style.display = 'none';
  }
}

  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '661bc6586f0af4a38797cc53' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');


  document.getElementById('homeButton').onclick = function() {
    var homeContent = document.getElementById('home-content');
    var buttonInfoContent = document.getElementById('buttoninfo-content');
    
    homeContent.style.display = 'block';
    buttonInfoContent.style.display = 'none';
};

