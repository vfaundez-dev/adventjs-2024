function createXmasTree(height, ornament) {
  
  const tree = [];
  for (let i = 0; i < height; i++) {
      const spaces = '_'.repeat(height - i - 1);
      const ornaments = ornament.repeat(2 * i + 1);
      tree.push(spaces + ornaments + spaces);
  }

  const trunk = [];
  for (let i = 0; i < 2; i++) {
      const spaces = '_'.repeat(height - 1);
      trunk.push(spaces + '#' + spaces);
  }

  const fullTree = tree.concat(trunk);
  return fullTree.join('\n');
}
