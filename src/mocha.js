var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

if (window) {
    window.chai = chai;
    window.sinon = sinon;
}