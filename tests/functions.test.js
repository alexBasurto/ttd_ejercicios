import { concatenaElementosArray, substringPositions, createUser } from "../src/functions.js";

describe("Tests de funciones generales", () => {
    // Ejercicio 1, variables
    const array1 = ['Hola', 'buenos', 'días'];
    const array2 = ['JavaScript', 'apesta'];

    // Ejercicio 2, variables
    const string1 = "Cómo están los máquinas?";
    const subString1 = "á";
    const answer1 = [8, 16];

    const string2 = "Boo boo boo bootcamp!";
    const subString2 = "boo";
    const answer2 = [4, 8, 12];

    const string3 = "Fu fu fu fullstack!";
    const subString3 = "ux";
    const answer3 = [];

    // Ejercicio 3
    const nombre1 = "Alex";
    const apellido1 = "Basurto";
    const edad1 = 34;
    const respuesta1 = {
        username: "Alex",
        lastname: "Basurto",
        age: 34
    }

    const nombre2 = "Mikel";
    const apellido2 = "Urrestarazu";
    const edad2 = -5;

    const nombre3 = 500;
    const apellido3 = "Pérez";
    const edad3 = 15;

    const nombre4 = "Jon";
    const apellido4 = "Irueta";
    const edad4 = "Treintaydos";

    test("Comprueba la fn concatenaElementosArray", () => {
        expect(concatenaElementosArray(array1)).toBe("Hola buenos días");
        expect(concatenaElementosArray(array2)).toBe("JavaScript apesta");
        expect(() => {concatenaElementosArray(52)}).toThrow(Error);
        expect(concatenaElementosArray([])).toBe("");
    })

    test("Comprueba la fn substirngPositions", () => {
        expect(substringPositions(string1, subString1)).toEqual(answer1);
        expect(substringPositions(string2, subString2)).toEqual(answer2);
        expect(substringPositions(string3, subString3)).toEqual(answer3);
        expect(() => {substringPositions(25, "hola")}).toThrow(Error);
        expect(() => {substringPositions("hola", 26)}).toThrow(Error);
        expect(() => {substringPositions("", "")}).toThrow(Error);
    })

    test("Comprueba la fn createUser", () => {
        expect(createUser(nombre1, apellido1, edad1)).toEqual(respuesta1);
        expect(() => {createUser(nombre2, apellido2, edad2)}).toThrow(Error);
        expect(() => {createUser(nombre3, apellido3, edad3)}).toThrow(Error);
        expect(() => {createUser(nombre4, apellido4, edad4)}).toThrow(Error);
    })

})
