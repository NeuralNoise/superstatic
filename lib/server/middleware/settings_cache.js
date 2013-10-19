var URI = require('urijs');
var url = require('url');

var settingsCache = function (req, res, next) {
  
  // Correctly parse our hostname without port
  var protocol = (req.connection.encrypted) ? 'https://' : 'http://';
  var urlObj = url.parse(protocol + req.headers.host);
  var hostname = urlObj.hostname;
  
  // Set our url object for future use
  req.ss.url = urlObj;
  
  req.ss.settings.getAppInfo(req.ss.url.hostname, function (err, config) {
    req.ss.config = config;
    next();
  });
};

module.exports = settingsCache;
