const model = {
  impairied: {
    week: {
      value: [5, 9, 16, 26, 39, 55, 69, 81, 88, 93, 96],
      min: [2, 3, 7, 15, 28, 43, 58, 69, 77, 84, 89],
      max: [16, 23, 31, 40, 52, 65, 78, 89, 94, 97, 99],
    },
    month: {
      value: [2, 3, 5, 8, 11, 16, 23, 31, 41, 52, 62],
      min: [0, 1, 2, 3, 5, 9, 15, 22, 30, 37, 43],
      max: [10, 12, 15, 18, 22, 27, 33, 42, 54, 67, 79],
    },
  },
  noReturn: {
    week: {
      value: [14, 37, 67, 88, 96, 99, 100, 100, 100, 100, 100],
      min: [2, 10, 41, 73, 86, 91, 94, 96, 98, 99, 99],
      max: [64, 75, 86, 95, 99, 100, 100, 100, 100, 100, 100],
    },
    month: {
      value: [23, 30, 37, 45, 54, 62, 69, 76, 82, 86, 90],
      min: [9, 15, 22, 31, 41, 51, 59, 65, 69, 73, 76],
      max: [47, 51, 56, 60, 65, 71, 78, 84, 90, 93, 96],
    },
  },
}

export default (score: number) => {
  const { impairied, noReturn } = model
  return {
    impairiedWeek: {
      min: impairied.week.min[score],
      max: impairied.week.max[score],
      value: impairied.week.value[score],
    },
    impairiedMonth: {
      min: impairied.month.min[score],
      max: impairied.month.max[score],
      value: impairied.month.value[score],
    },
    noReturnWeek: {
      min: noReturn.week.min[score],
      max: noReturn.week.max[score],
      value: noReturn.week.value[score],
    },
    noReturnMonth: {
      min: noReturn.month.min[score],
      max: noReturn.month.max[score],
      value: noReturn.month.value[score],
    },
  }
}
