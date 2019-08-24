var agent = detect.parse(navigator.userAgent);

if (agent.browser.family === 'Safari') {
  jss.set('.static', {
    'background': 'none',
    'height': '100vh'
  })
}

// [Browser/Device Info]
// console.log('Browser Family:', agent.browser.family);
// console.log('Browser Name:', agent.browser.name);

// console.log('Device Family:', agent.device.family);
// console.log('Device Name:', agent.device.name);
// console.log('Device Type:', agent.device.name);
// console.log('Device Manufacturer:', agent.device.manufacturer);

// console.log('OS Family:', agent.os.family);
// console.log('OS Name:', agent.os.name);