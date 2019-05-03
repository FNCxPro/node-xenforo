const Package = require('../../package.json');
const Constants = {
  USER_AGENT: `node-xenforo (${Package.version}) Node.js/${process.version}`,
  DEFAULT_HTTP_OPTIONS: {
    method: 'GET'
  }
};
export default Constants;
