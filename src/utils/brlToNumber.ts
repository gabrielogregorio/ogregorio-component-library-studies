export function brlToNumber(input: string): number {
  let onlyNumbersAndSemiColons = input.replace(/[^0-9,]/g, '');

  onlyNumbersAndSemiColons = onlyNumbersAndSemiColons.replace(',', '.');

  const valor = Number(onlyNumbersAndSemiColons);

  if (Number.isNaN(valor)) {
    throw new Error(`A input is not valid, '${input}'`);
  }

  return valor;
}
