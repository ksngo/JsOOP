const {myDear, giveYouNull, giveYouUndefined } = require("../../test/test11.js")

describe("Testing my functions ", function(){
    it("on myDear", function(){
        expect(myDear()).toEqual("I Love you")
    })

    it("on giveYouNull", function(){
        expect(giveYouNull()).toBeNull()
    })

    it("on giveYouUndefined", function(){
        expect(giveYouUndefined()).toBeUndefined()
    })
})
