function calcAge(){
  const dobInput = document.getElementById('dob').value;
  if(!dobInput) return;

  const dob = new Date(dobInput);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if(days < 0){
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if(months < 0){
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today - dob) / (1000 * 60 * 60 * 24));

  document.getElementById('ageMain').textContent = `${years} years`;
  document.getElementById('ageMonths').textContent = months;
  document.getElementById('ageDays').textContent = days;
  document.getElementById('ageTotalDays').textContent = totalDays.toLocaleString('en-US');
  document.getElementById('ageResult').classList.add('show');
}