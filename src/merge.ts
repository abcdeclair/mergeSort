const merge = (
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] => {
  let result: number[] = [];
  let count1 = 0,
    count2 = collection2.length - 1,
    count3 = 0;

  while (
    count1 < collection1.length ||
    count2 >= 0 ||
    count3 < collection3.length
  ) {
    const min1 =
      count1 < collection1.length
        ? collection1[count1]
        : Number.POSITIVE_INFINITY;
    const min2 = count2 >= 0 ? collection2[count2] : Number.POSITIVE_INFINITY;
    const min3 =
      count3 < collection3.length
        ? collection3[count3]
        : Number.POSITIVE_INFINITY;

    const min = Math.min(min1, min2, min3);
    result.push(min);

    if (min === min1) {
      count1++;
    } else if (min === min2) {
      count2--;
    } else {
      count3++;
    }
  }
  // merge collection 1 and 3 first
  // while (count1 < collection1.length || count3 < collection3.length) {
  //   if (
  //     count3 >= collection3.length ||
  //     collection1[count1] <= collection3[count3]
  //   ) {
  //     result.push(collection1[count1]);
  //     count1++;
  //   } else {
  //     result.push(collection3[count3]);
  //     count3++;
  //   }
  // }
  // // merge collection 2 to result
  // for (let i = collection2.length - 1; i >= 0; i--) {
  //   const current = collection2[i];

  //   while (count2 < result.length && result[count2] < current) {
  //     count2++;
  //   }

  //   result.splice(count2, 0, current);
  // }

  return result;
};

export default merge;
