const Land = artifacts.require("Land");

module.exports = function (deployer) {

    const NAME = "COT Buildings"
    const SYMBOL = "COTB"
    const COST = web3.utils.toWei('1', 'ether')

    await deployer.deploy(Land, NAME, SYMBOL, COST);
};
