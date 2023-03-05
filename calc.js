function calculate() {
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
    const loanTerm = parseInt(document.getElementById("loan-term").value);
    const paymentFrequency = parseInt(document.getElementById("payment-frequency").value);
  
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || isNaN(paymentFrequency)) {
      document.getElementById("result").innerHTML = "Please enter valid input values.";
      return;
    }
  
    const numPayments = loanTerm * paymentFrequency;
    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numPayments));
  
    document.getElementById("result").innerHTML = `Your monthly mortgage payment is $${monthlyPayment.toFixed(2)}.`;
  }
  