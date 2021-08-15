document.getElementById('deposit-btn').addEventListener('click', function(){

    // showing deposit
    const depositField = document.getElementById('user-deposit-input');
    const newDepositAmount = parseFloat(depositField.value);
    const currentDepositAmount = document.getElementById('deposit');
    const previousDepositAmount = parseFloat(currentDepositAmount.innerText);
    const depositTotalAmount = (newDepositAmount + previousDepositAmount);
    currentDepositAmount.innerText = depositTotalAmount;
    depositField.value = '';

    //Showing balance
    const balanceAmountField = document.getElementById('balance');
    const previousBlanaceAmount = parseFloat(balanceAmountField.innerText);
    const updatedBalance = newDepositAmount + previousBlanaceAmount;
    balanceAmountField.innerText = updatedBalance;
   
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('user-withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawField.value);
   // console.log(newWithdrawAmount, 'new')

    const currentWithdrawAmount = document.getElementById('withdraw');
    const previousWithdrawAmount = parseFloat(currentWithdrawAmount.innerText);
    //console.log(previousWithdrawAmount,'prev')

    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;
    currentWithdrawAmount.innerText = totalWithdraw;
    //console.log(currentWithdrawAmount.innerText, 'total')
    withdrawField.value = '';

    // updating new Balance
    const previousBalance = document.getElementById('balance');
    const prevBalance = parseFloat(previousBalance.innerText);

    const updatedNewBalance = prevBalance - totalWithdraw;
    previousBalance.innerText = updatedNewBalance; 

})

document.getElementById('logout').addEventListener('click', function(){
    window.location.href='bank.html';
})