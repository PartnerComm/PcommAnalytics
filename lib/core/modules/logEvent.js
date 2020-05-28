const testEnv = require("./testEnv");

module.exports = (event) => {
    if (testEnv()) {
      console.log('ga tracking event:', event);
    }
    return event;
}
