import {Soma, listaDeFrutas} from "./function.js"

test("Verifica área do quadrado", () => {
    expect(Soma(5,5)).toBe(10)
})

test("Verifica se fruta está contida em array", () => {
    expect(listaDeFrutas()).toMatch(/Uva/)
})

//test(description, callback() => {
// expect(function).toBe(correctAnswer)    
//})