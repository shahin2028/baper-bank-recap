document.getElementById('button-deposit').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositField = depositInput.value;
    const depositFieldConvert = parseFloat(depositField);


    depositInput.value = ' ';

    const depositPreviousTotal = document.getElementById('deposit-total');
    const depositPrevious = depositPreviousTotal.innerText;
    const depositPreviousConvert = parseFloat(depositPrevious);

    const newDepositTotal = depositFieldConvert + depositPreviousConvert;
    depositPreviousTotal.innerText = newDepositTotal;

    const previousBalanceGrab = document.getElementById('balance-total');
    const previousBalance = previousBalanceGrab.innerText;
    const previousBalanceConvert = parseFloat(previousBalance);

    const totalBalance = depositFieldConvert + previousBalanceConvert;
    console.log(totalBalance);
    previousBalanceGrab.innerText = totalBalance;
})