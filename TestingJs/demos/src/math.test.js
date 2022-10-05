const { suma, multipli, divide } = require('./math.js');

test("Se coloca el mensaje como ejemplo adds 1 + 3 slould be 4", () => {
    const resulta = suma(1, 3);
    expect(resulta).toBe(4)
})