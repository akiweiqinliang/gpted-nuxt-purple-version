const validateLowestPrice = (rule, value, callback) => {
  if (value < 0) {
    callback(new Error('价格不得为负'));
  } else {
    callback();
  }
};
const validateHighestPrice = (rule, value, callback) => {
  if (value < 0) {
    callback(new Error('价格不得为负'));
  } else {
    callback();
  }
};
const validatePrice = (rule, value, callback) => {
  console.log(value);
  if (
    value.lowestPrice &&
    value.highestPrice &&
    value.lowestPrice > value.highestPrice
  ) {
    callback(new Error('价格区间有误'));
  }
};
const ruleValidate = {
  priceRange: [{ message: '价格区间有误', validator: validatePrice }],
  lowestPrice: [
    {
      message: '价格不能为负',
      trigger: 'change',
      validator: validateLowestPrice,
    },
  ],
  highestPrice: [
    {
      message: '价格不得为负',
      trigger: 'change',
      validator: validateHighestPrice,
    },
  ],
};
export {
  // validateLowestPrice,
  // validateHighestPrice,
  // validatePrice,
  ruleValidate,
};
