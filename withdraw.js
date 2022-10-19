document.getElementById('button-withdraw').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputGrab = withdrawInput.value;
    const withdrawInputConvert = parseFloat(withdrawInputGrab);

    withdrawInput.value = ' ';

    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawGrab = previousWithdraw.innerText;
    const previousWithdrawConvert = parseFloat(previousWithdrawGrab);

    const withdrawUpdate = withdrawInputConvert + previousWithdrawConvert;
    previousWithdraw.innerText = withdrawUpdate;

    const balanceElement = document.getElementById('balance-total');
    const totalBalanceElement = balanceElement.innerText;
    const totalBalanceElementConvert = parseFloat(totalBalanceElement);

    const balanceElementUpdate = totalBalanceElement - withdrawUpdate;
    balanceElement.innerText = balanceElementUpdate;
})