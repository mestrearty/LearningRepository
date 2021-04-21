namespace Areas {
    const PI = 3.14

    export function Circunferencia(raio: number) {
        return PI * Math.pow(raio, 2)
    }

    export function Retangulo(base: number, altura: number) {
        return base * altura
    }
}

console.log(Areas.Circunferencia(10))
console.log(Areas.Retangulo(10, 20))

const PI = 2.99
console.log(PI)
console.log(Areas.Circunferencia(10))
console.log(Areas.Retangulo(10, 20))


namespace Geometria {
    export namespace Areas {
        const PI = 3.14

        export function Circunferencia(raio: number) {
            return PI * Math.pow(raio, 2)
        }

        export function Retangulo(base: number, altura: number) {
            return base * altura
        }
    }

    export const PI = 5.99

}

console.log(Geometria.Areas.Circunferencia(10))
console.log(Geometria.Areas.Retangulo(10, 20))


console.log(Geometria.PI)
console.log(Geometria.Areas.Circunferencia(10))
console.log(Geometria.Areas.Retangulo(10, 20))

//Import
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRec.ts"/>

//console.log(GeometriaCirc.Areas.Circunferencia(10))
//console.log(GeometriaRec.Areas.Retangulo(10, 20))