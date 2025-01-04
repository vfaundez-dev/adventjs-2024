function organizeInventory(inventory) {
  let result = {};
  
  inventory.forEach( item => {

    const { name, quantity, category } = item;

    if (!result[category]) {
      result[category] = {};
    }

    if (!result[category][name]) {
      result[category][name] = 0;
    }

    result[category][name] += quantity;

  });
  
  return result;
}
