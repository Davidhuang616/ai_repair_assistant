window.addEventListener('load', function() {
  // Wait for the duration of the fly-in animation (1s in this case)
  setTimeout(function() {
    // Show the #right-content div
    document.getElementById('right-content').style.display = 'block';
  }, 1000);
});
(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '************************'}, //put your own Voiceflow projectID here
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
        render: {
mode: 'embedded',
target: document.getElementById('right-content'),
},
autostart: true
    });
  }
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');

  document.getElementById('homeButton').onclick = function() {
    var homeContent = document.getElementById('check-incident');
    var buttonInfoContent = document.getElementById('buttoninfo-content');
    
    homeContent.style.display = 'block';
    buttonInfoContent.style.display = 'none';
};

window.addEventListener('resize', adjustLine);

function adjustLine() {
    const steps = document.querySelectorAll('.step-container');
    const line = document.querySelector('.line');
    const firstDot = steps[0].getBoundingClientRect();
    const lastDot = steps[steps.length - 1].getBoundingClientRect();

    // Calculate the center of the first and last dots
    const firstDotCenter = firstDot.left + firstDot.width / 2;
    const lastDotCenter = lastDot.right - lastDot.width / 2;

    // Define the amount to adjust the line
    const adjustment = 20; // Adjust this value to move the line more or less

    line.style.left = `${firstDotCenter - adjustment}px`;
    line.style.width = `${lastDotCenter - firstDotCenter}px`;
}

// Get references to the text elements
var checkIncidentText = document.getElementById('check-incident-text');
var identifyIssueText = document.getElementById('identify-issue-text');
var generateRootCauseText = document.getElementById('generate-root-cause');
var troubleshootText = document.getElementById('troubleshoot-text');
var solutionText = document.getElementById('solution-text');

// Get references to the step containers
var checkIncidentStep = document.getElementById('check-incident-step');
var identifyIssueStep = document.getElementById('identify-issue-step');
var generateRootCauseStep = document.getElementById('generate-root-cause-step');
var troubleshootnStep = document.getElementById('troubleshoot-step');
var solutionStep = document.getElementById('solution-step');

// Array of content div ids
var contentDivs = ['check-incident', 'identifying', 'root-cause-daigram','new-root-cause-daigram', 'solution-content'];

// Function to hide all content divs
function hideAllContent() {
  contentDivs.forEach(function(div) {
    document.getElementById(div).style.display = 'none';
  });
}

// Function to show a content div
function showContent(id) {
  document.getElementById(id).style.display = 'block';
}

// Function to reset all steps to their original state
function resetSteps() {
  [checkIncidentStep, identifyIssueStep, generateRootCauseStep, solutionStep].forEach(function(step) {
    step.classList.remove('active');
  });
}

// Add a click event listener to each text element
checkIncidentText.addEventListener('click', function() {
  // Hide all content, then show the 'home content' div
  hideAllContent();
  showContent('check-incident');
  checkIncidentText.style.color = 'black';
  // Reset all steps, then activate the 'check incident' step
  resetSteps();
});


// Typewriter effect for the 'incident-text' div
let i = 0;
let text = '';
let typing = false; // flag to indicate whether the typing effect is currently running

let timeoutId = null; // ID of the current timeout

function typeWriter() {
  // If the typewriter effect is already running, return immediately
  if (typing) {
    return;
  }

  if (i < text.length) {
    document.getElementById('incident-text').textContent += text.charAt(i);
    i++;
    timeoutId = setTimeout(typeWriter, 100); // store the timeout ID
  } else {
    // After all text has been typed out, reset the text and start typing again after a delay
    timeoutId = setTimeout(function() {
      document.getElementById('incident-text').textContent = '';
      i = 0;
      typeWriter();
    }, 1000); // store the timeout ID
  }
}

// Add click event listener to 'identify-issue-text' div
document.getElementById('identify-issue-text').addEventListener('click', function() {
  // Stop the current typewriter effect
  clearTimeout(timeoutId);

  // Change the text and start the typing effect
  text = 'Identifying the incident...';
  document.getElementById('incident-text').textContent = '';
  i = 0;
  typing = false;
  typeWriter();

  // Change the text color to black
  this.style.color = 'black';
});

// Add click event listener to 'generate-root-cause' div
document.getElementById('generate-root-cause').addEventListener('click', function() {
  // Stop the current typewriter effect
  clearTimeout(timeoutId);

  // Change the text and start the typing effect
  text = 'Identifying the possible root cause...';
  document.getElementById('incident-text').textContent = '';
  i = 0;
  typing = false;
  typeWriter();

  // Change the text color to black
  this.style.color = 'black';

  // Add a delay of 3 seconds
  setTimeout(function() {
    // Hide all content
    hideAllContent();

    // Show the #root-cause-daigram div
    showContent('root-cause-daigram');
  }, 6000);
});

identifyIssueText.addEventListener('click', function() {
  // Hide all content, then show the 'identifying' div
  hideAllContent();
  showContent('identifying');
  identifyIssueText.style.color = 'black';
  // Reset all steps, then activate the 'identify issue' step
  resetSteps();
});


function markButton(button) {
  const existingXMark = button.querySelector('.x-mark');
  if (existingXMark) {
    button.removeChild(existingXMark);
    button.style.backgroundColor = ""; // Reset to original color
    button.style.color = ""; // Reset to original color
    button.style.opacity = "1"; // Reset to original opacity
  } else {
    const xMark = document.createElement('img');
    xMark.src = 'images/stamp_excluded.png';
    xMark.className = 'x-mark';
    button.style.position = 'relative';
    button.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Change to desired color and make it semi-transparent
    button.style.color = "rgba(0, 0, 0, 0.2)"; // Change to desired color and make it semi-transparent
    button.appendChild(xMark);
  }
}


troubleshootText.addEventListener('click', function() {
  // Hide all content, then show the 'solution' div
  hideAllContent();
  showContent('new-root-cause-daigram');
  troubleshootText.style.color = 'black';
  // Reset all steps, then activate the 'solution' step
  resetSteps();
});


function showRootCause(button) {
  const existingIMark = button.querySelector('.i-mark');
  const rootCauseText = document.getElementById('rootcause-identified');

  if (existingIMark) {
    button.removeChild(existingIMark);
    button.style.backgroundColor = ""; // Reset to original color
    button.style.color = ""; // Reset to original color
    button.style.opacity = "1"; // Reset to original opacity
    if (rootCauseText) {
      rootCauseText.style.display = 'none'; // Hide the text
      rootCauseText.classList.remove('visible'); // Remove the 'visible' class
    }
  } else {
    const iMark = document.createElement('img');
    iMark.src = 'images/stamp_identified_black.png';
    iMark.className = 'i-mark';
    button.style.position = 'relative';
    button.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Change to desired color and make it semi-transparent
    button.style.color = "rgba(0, 0, 0, 0.2)"; // Change to desired color and make it semi-transparent
    button.appendChild(iMark);
    if (rootCauseText) {
      rootCauseText.style.display = 'block'; // Show the text
      rootCauseText.classList.add('visible'); // Add the 'visible' class
    }
  }
}

solutionText.addEventListener('click', function() {
  // Hide all content, then show the 'solution' div
  hideAllContent();
  showContent('solution-content');
  solutionText.style.color = 'black';
  // Reset all steps, then activate the 'solution' step
  resetSteps();
});




// Get all the .step divs
var steps = document.getElementsByClassName('step');

// Loop through each .step div
for (let i = 0; i < steps.length; i++) {
  // Add mouseover event listener
  steps[i].addEventListener('mouseover', function() {
    // Change the src attribute of the img tag to the GIF
    this.children[0].src = this.children[0].src.replace('.jpg', '.gif');
  });

  // Add mouseout event listener
  steps[i].addEventListener('mouseout', function() {
    // Change the src attribute of the img tag back to the static image
    this.children[0].src = this.children[0].src.replace('.gif', '.jpg');
  });
}



let stepContainers = document.querySelectorAll('.step-container');
let blackDot = document.getElementById('black-dot');

for (let i = 0; i < stepContainers.length; i++) {
  stepContainers[i].addEventListener('click', function() {
    let rect = this.getBoundingClientRect();
    let dotPosition = rect.left + rect.width / 2; // Position for the black dot
    blackDot.style.left = dotPosition + 'px'; // Move the black dot
    blackDot.style.visibility = 'visible'; // Show the black dot
  });
}

document.getElementById('complete-text').addEventListener('click', function() {
  this.style.color = 'black';
});

// Get all the .step-container elements
const stepContainers2 = document.querySelectorAll('.step-container');

// Add a click event listener to each .step-container
stepContainers2.forEach(stepContainer => {
  stepContainer.addEventListener('click', () => {
    // Change the value of the --dot-color CSS variable
    stepContainer.style.setProperty('--dot-color', 'black');
  });
});
