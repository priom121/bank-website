document.getElementById('withdraw-btn').addEventListener('click', function(){
        const withdrawElement = document.getElementById('withdraw');
        const newWithdrawElementString = withdrawElement.value ;
        const newWithdrawAmount = parseFloat(newWithdrawElementString);

        const addWithdraw = document.getElementById('add-withdraw') ;
        const previousWithdrawString = addWithdraw.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawString);
        const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
        addWithdraw.innerText = totalWithdraw ;
       
                        //  
       const balanceTotal = document.getElementById('balance-total') ;
       const previousBalanceTotalString = balanceTotal.innerText;
       const previousBalance = parseFloat(previousBalanceTotalString);
       const totalBalance = previousBalance - newWithdrawAmount;
       balanceTotal.innerText = totalBalance;
       withdrawElement.value = '';
})