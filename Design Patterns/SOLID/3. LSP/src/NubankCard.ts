import IPaymantInstrument from "./IPaymantInstrument";

export default abstract class NubankCard implements IPaymantInstrument {
    validate(): void {
        console.log("\nValidação básica")
    }

    collectPaymant(): void {
        console.log("Pagamento realizado")
    }
}