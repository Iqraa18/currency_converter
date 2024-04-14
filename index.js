import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
async function main() {
    let userAnswer = await inquirer.prompt([
        {
            name: `from`,
            message: "Enter From Currency",
            type: `list`,
            choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`],
        },
        {
            name: `to`,
            message: "Enter To Currency",
            type: `list`,
            choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`],
        },
        {
            name: `amount`,
            message: "Enter Your Amount",
            type: `number`,
        },
    ]);
    let userFromCurrency = userAnswer.from;
    let userToCurrency = userAnswer.to;
    let fromAmount = currency[userFromCurrency];
    let toAmount = currency[userToCurrency];
    let amount = userAnswer.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = Math.floor(baseAmount * toAmount);
    console.log(`${convertedAmount}  ${userToCurrency}`);
}
main();
