function calcBMI(){
  const weight = parseFloat(document.getElementById('bmiWeight').value) || 0;
  const heightCm = parseFloat(document.getElementById('bmiHeight').value) || 0;
  if(weight <= 0 || heightCm <= 0) return;

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);

  let category = '';
  if(bmi < 18.5) category = 'Underweight';
  else if(bmi < 25) category = 'Normal weight';
  else if(bmi < 30) category = 'Overweight';
  else category = 'Obese';

  document.getElementById('bmiMain').textContent = bmi.toFixed(1);
  document.getElementById('bmiCategory').textContent = category;
  document.getElementById('bmiResult').classList.add('show');
}