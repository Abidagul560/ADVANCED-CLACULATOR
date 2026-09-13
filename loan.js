function calcLoan(){
  const P = parseFloat(document.getElementById('loanAmount').value) || 0;
  const annualRate = parseFloat(document.getElementById('loanRate').value) || 0;
  const N = parseFloat(document.getElementById('loanTenure').value) || 0;

  if(P <= 0 || N <= 0) return;

  const R = annualRate / 12 / 100;
  let emi;

  if(R === 0){
    emi = P / N;
  } else {
    emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  }

  const totalPayment = emi * N;
  const totalInterest = totalPayment - P;

  document.getElementById('loanMain').textContent = emi.toLocaleString('en-US', {maximumFractionDigits:0}) + ' / month';
  document.getElementById('loanInterest').textContent = totalInterest.toLocaleString('en-US', {maximumFractionDigits:0});
  document.getElementById('loanTotal').textContent = totalPayment.toLocaleString('en-US', {maximumFractionDigits:0});
  document.getElementById('loanResult').classList.add('show');
}