function buildingAWall(sectionsArray) {
  sectionsArray = sectionsArray.map(Number);

  let totalCubicYardsOfConcrete = 0;
  let usageArray = [];

  let sumOfSctionsHeight = 0;
  for (const sectionHeight of sectionsArray) {
    sumOfSctionsHeight += sectionHeight;
  }

  while (sumOfSctionsHeight < sectionsArray.length * 30) {
    let concreteUsedForDay = 0;
    for (let i = 0; i < sectionsArray.length; i++) {
      if (sectionsArray[i] == 30) {
        continue;
      } else {
        sectionsArray[i]++;
        totalCubicYardsOfConcrete += 195;
        concreteUsedForDay += 195;
      }
    }
    usageArray.push(concreteUsedForDay);

    sumOfSctionsHeight = 0;
    for (const sectionHeight of sectionsArray) {
      sumOfSctionsHeight += sectionHeight;
    }
  }

  console.log(usageArray.join(", "));
  console.log(`${totalCubicYardsOfConcrete * 1900} pesos`);
}
