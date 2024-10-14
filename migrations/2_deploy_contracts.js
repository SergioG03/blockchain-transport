const TransportTraceability = artifacts.require("TransportTraceability");

module.exports = function(deployer) {
  deployer.deploy(TransportTraceability);
};
