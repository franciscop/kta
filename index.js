const bowl = {};

bowl.bonus = 0;

bowl.roll = rolls => {
  // Spare
  if (rolls.length >= 2 && rolls[0] + rolls[1] === 10) {
    bowl.bonus = 1;
    return 10;
  }

  // Strike
  if (rolls[0] === 10) {
    bowl.bonus = 2;
    return 10;
  }
  return rolls.reduce((all, one) => all + one, 0);
};

bowl.play = array => {
  return array.reduce((sum, one) => {
    if (bowl.bonus > 0) {
      sum += one[0];
      bowl.bonus--;
    }
    if (bowl.bonus > 0 && one.length > 0) {
      sum += one[1];
      bowl.bonus = 0;
    }
    sum += bowl.roll(one);
    return sum;
  }, 0);
};


module.exports = bowl;
