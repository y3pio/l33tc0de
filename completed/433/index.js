var minMutation = function(startGene, endGene, bank) {
  const bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1;

  const queue = [[startGene, 0]];
  const visited = new Set([startGene]);
  const genes = ['A', 'C', 'G', 'T'];

  while (queue.length > 0) {
    const [current, steps] = queue.shift();

    if (current === endGene) {
      return steps;
    }

    // Try all single-character mutations
    for (let i = 0; i < 8; i++) {
      for (const g of genes) {
        if (g === current[i]) continue; // no change

        const mutated = current.slice(0, i) + g + current.slice(i + 1);
        if (bankSet.has(mutated) && !visited.has(mutated)) {
          visited.add(mutated);
          queue.push([mutated, steps + 1]);
        }
      }
    }
  }

  return -1;
};