import {expect} from "chai";
import { describe, it } from "mocha";
import fibonacci from "../fibonacci.js";

describe("test fibonacci of the first 5 numbers", ()=>{
    it("test fibonacci(1) to see if it returns 1", ()=>{
        expect(fibonacci(1)).to.equal(1);
    })
})