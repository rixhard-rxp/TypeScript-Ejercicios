// Define un tipo Transacción que contenga el monto, el tipo ("ingreso" o "egreso") y
// la categoría.
// Crea una función que reciba un arreglo de transacciones y retorne un objeto que
// contenga la suma total agrupada por tipo.

export {}

type TransactionType = "Ingreso" | "Egreso";

type Transaction = {
    monto: number;
    transactionType: TransactionType;
    category: string
}

const transactions: Transaction[] = [
  { monto: 10000, transactionType: "Ingreso", category: "Pesos"},
  { monto: 20000, transactionType: "Egreso", category: "Reales"},
  { monto: 30000, transactionType: "Egreso", category: "Wones"},
  { monto: 40000, transactionType: "Ingreso", category: "Pesos"},
  { monto: 50000, transactionType: "Ingreso", category: "Reales"},
];

function sumGroupedByType (transactions: Transaction[]) {
    return transactions.reduce((acc, cur) => {
        if (cur.transactionType === "Ingreso") {
            acc.Ingreso += cur.monto;
        } else {
            acc.Egreso += cur.monto;;
        }
        return acc;
    }, {Ingreso: 0, Egreso: 0})
}

console.log(sumGroupedByType(transactions));