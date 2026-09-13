document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

function calcBasic(){
  const percent = parseFloat(document.getElementById('basicPercent').value) || 0;
  const number = parseFloat(document.getElementById('basicNumber').value) || 0;
  const result = (percent / 100) * number;
  document.getElementById('basicMain').textContent = result.toLocaleString('en-US', {maximumFractionDigits:2});
  document.getElementById('basicResult').classList.add('show');
}

function calcWhatPercent(){
  const value = parseFloat(document.getElementById('wpValue').value) || 0;
  const total = parseFloat(document.getElementById('wpTotal').value) || 0;
  const result = total === 0 ? 0 : (value / total) * 100;
  document.getElementById('wpMain').textContent = result.toLocaleString('en-US', {maximumFractionDigits:2}) + '%';
  document.getElementById('wpResult').classList.add('show');
}

function calcChange(){
  const from = parseFloat(document.getElementById('chgFrom').value) || 0;
  const to = parseFloat(document.getElementById('chgTo').value) || 0;
  const change = from === 0 ? 0 : ((to - from) / from) * 100;
  document.getElementById('chgMain').textContent = Math.abs(change).toLocaleString('en-US', {maximumFractionDigits:2}) + '%';
  document.getElementById('chgType').textContent = change >= 0 ? 'Increase ↑' : 'Decrease ↓';
  document.getElementById('chgResult').classList.add('show');
}