// Use Detect.js feature detection to identify browser engine
var agent = detect.parse(navigator.userAgent);

// Workaround for parallax issues in Safari browsers
if (agent.browser.family === 'Safari') {
  jss.set('.static', {
    'background': 'none',
    'height': '100vh'
  })
}

// Prevent about/skills section header background from overlapping portrait image
adjustForFF();

// Prevent parallax from blocking skill icon links in Firefox when window is less than 500px wide
adjustForFFSmall();

window.onresize = function(e) {
  adjustForFFSmall();
}

function adjustForFF() {
  if (agent.browser.family === 'Firefox') {
    jss.set('#skills', {
      'margin-bottom': '8rem'
    })
  }
}

function adjustForFFSmall() {
  if (agent.browser.family === 'Firefox' && document.body.clientWidth < 500) {
    jss.set('.bg-about', {
      'z-index': '2'
    })
  } else {
    jss.set('.bg-about', {
      'z-index': '0'
    })
  }
}

// Initialize tooltips for skill icon links
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// [Browser/Device Info] (Dev only) - useful debugging info
//
// console.log('Browser Family:', agent.browser.family);
// console.log('Browser Name:', agent.browser.name);

// console.log('Device Family:', agent.device.family);
// console.log('Device Name:', agent.device.name);
// console.log('Device Type:', agent.device.name);
// console.log('Device Manufacturer:', agent.device.manufacturer);

// console.log('OS Family:', agent.os.family);
// console.log('OS Name:', agent.os.name);