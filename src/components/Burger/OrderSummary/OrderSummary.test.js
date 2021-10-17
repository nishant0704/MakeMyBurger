const OrderSummary = require("./OrderSummary")
// @ponicode
describe("componentWillUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new OrderSummary.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUpdate()
        }
    
        expect(callFunction).not.toThrow()
    })
})
