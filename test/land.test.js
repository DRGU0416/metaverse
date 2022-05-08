const Land = artifacts.require("./Land")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract("Land", () => {
    const NAME = "COT Buildings"
    const SYMBOL = "COTB"
    const COST = web3.utils.toWei('1', 'ether')

    beforeEach( async() => {
        land = await Land.new(NAME, SYMBOL, COST)
    })

    describe("Deployment", () => {
        it("returns the contract name", async () => {
            result = await land.name()
            result.should.equal(NAME)
        })
        it("returns the contract symbol", async () => {
            result = await land.symbol()
            result.should.equal(SYMBOL)
        })
        it("returns the cost to mint", async () => {
            result = await land.cost()
            result.toString().should.equal(COST)
        })
        it("returns the max supply", async () => {
            result = await land.maxSupply()
            result.should.equal(5)
        })
    })
})