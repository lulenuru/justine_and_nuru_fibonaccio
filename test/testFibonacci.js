import { assert} from "chai";
import { describe, it } from "mocha";
import fibonacci from "../fibonacci.js";

describe("test fibonacci of the first 5 numbers", ()=>{
    it("test fibonacci(1) to see if it returns 1", ()=>{
        assert.strictEqual(fibonacci(1),1)
    })

    it("test fibonacci() any other number", ()=>{
        assert.strictEqual(fibonacci(8),21)
    })
   
    it("test fibonacci() any other number", ()=>{
        assert.strictEqual(fibonacci(10),55)
    })
   
})

// Nuru Lule & Justine Mbawomye