"use strict";
var GeometriaCirc;
(function (GeometriaCirc) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        function Circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.Circunferencia = Circunferencia;
    })(Areas = GeometriaCirc.Areas || (GeometriaCirc.Areas = {}));
})(GeometriaCirc || (GeometriaCirc = {}));
//# sourceMappingURL=geometriaCirc.js.map