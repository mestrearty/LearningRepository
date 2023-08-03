export default interface IPaymantInstrument {
    validate(): void;
    collectPaymant(): void;
}