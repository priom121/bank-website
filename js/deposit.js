document.getElementById('deposit-btn').addEventListener('click', function(){
             const textElement = document.getElementById('deposit');
             const newDepositTotalString = textElement.value ;
             const newDepositAmount = parseFloat(newDepositTotalString)
             const addDeposit = document.getElementById('add-deposit')
             const  previousDepositTotalString = addDeposit.innerText;
             const previousDepositAmount = parseFloat(previousDepositTotalString)
             const currentDepositTotal = previousDepositAmount + newDepositAmount
             addDeposit.innerText = currentDepositTotal;
//               balance total
      const balanceTotalElement = document.getElementById('balance-total');
      const previousBalanceTotalString = balanceTotalElement.innerText;
      const previousAmount = parseFloat(previousBalanceTotalString);
      const totalBalance = previousAmount  +newDepositAmount ;
      balanceTotalElement.innerText = totalBalance;


             textElement.value = '';             
})