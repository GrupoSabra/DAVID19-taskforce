const covid = artifacts.require("CovidCredentialRegistry");

module.exports = function(deployer) {
    deployer.deploy(covid);
};