import IPaymantInstrument from "./IPaymantInstrument";

export default class NubankRewards implements IPaymantInstrument {
    validate(): void {
        console.log("\nVericar a pontuação no rewards");
    }
    collectPaymant(): void {
        console.log("Pagar com a pontuação do rewards");
    }

}