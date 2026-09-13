function calcDiscount(){
  const price = parseFloat(document.getElementById('discPrice').value) || 0;
  const percent = parseFloat(document.getElementById('discPercent').value) || 0;

  const saved = price * (percent / 100);
  const finalPrice = price - saved;

  document.getElementById('discMain').textContent = finalPrice.toLocaleString('en-US', {maximumFractionDigits:2});
  document.getElementById('discSaved').textContent = saved.toLocaleString('en-US', {maximumFractionDigits:2});
  document.getElementById('discOriginal').textContent = price.toLocaleString('en-US', {maximumFractionDigits:2});
  document.getElementById('discResult').classList.add('show');
}