let bowl;

describe('loads', () => {
  it('loads', () => {
    bowl = require('./index');
    expect(bowl).toBeDefined();
    expect(bowl.bonus).toEqual(0);
  });
});

describe('boundaries', () => {
  afterEach(() => {
    bowl.bonus = 0;
  });

  it('has a min of 0', () => {
    expect(bowl.roll([0])).toEqual(0);
    expect(bowl.roll([0, 0])).toEqual(0);
    expect(bowl.roll([0, 0, 0])).toEqual(0);
  });

  it('sets a spare bonus', () => {
    bowl.roll([5, 5]);
    expect(bowl.bonus).toEqual(1);
  });

  it('sets a strike bonus', () => {
    bowl.roll([10]);
    expect(bowl.bonus).toEqual(2);
  });
});

describe('play', () => {
  it('plays!', () => {
    const res = bowl.play([[1, 5], [3, 7], [5, 2]]);
    expect(res).toBe(28);
  });
});
