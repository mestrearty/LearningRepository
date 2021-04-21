"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    function Circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.Circunferencia = Circunferencia;
    function Retangulo(base, altura) {
        return base * altura;
    }
    Areas.Retangulo = Retangulo;
})(Areas || (Areas = {}));
console.log(Areas.Circunferencia(10));
console.log(Areas.Retangulo(10, 20));
const PI = 2.99;
console.log(PI);
console.log(Areas.Circunferencia(10));
console.log(Areas.Retangulo(10, 20));
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        function Circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.Circunferencia = Circunferencia;
        function Retangulo(base, altura) {
            return base * altura;
        }
        Areas.Retangulo = Retangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
    Geometria.PI = 5.99;
})(Geometria || (Geometria = {}));
console.log(Geometria.Areas.Circunferencia(10));
console.log(Geometria.Areas.Retangulo(10, 20));
console.log(Geometria.PI);
console.log(Geometria.Areas.Circunferencia(10));
console.log(Geometria.Areas.Retangulo(10, 20));
//Import
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRec.ts"/>
console.log(GeometriaCirc.Areas.Circunferencia(10));
console.log(GeometriaRec.Areas.Retangulo(10, 20));
//# sourceMappingURL=namespaces.js.map