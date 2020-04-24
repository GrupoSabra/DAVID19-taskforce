const Migrations = artifacts.require("Migrations");
//const covid = artifacts.require("CovidCredentialRegistry");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    //deployer.deploy(covid);
};