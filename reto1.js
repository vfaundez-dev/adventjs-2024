function prepareGifts( gifts ) {
  if (typeof gifts !== 'object') return 'Debe proporcionar un listado de regalos';

  let uniqueGifts = [];
  uniqueGifts = gifts.filter( (gift, index) => gifts.indexOf(gift) === index).sort((a, b) => a - b);
  return uniqueGifts;
}
