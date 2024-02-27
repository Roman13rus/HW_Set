import Team from '../team';

class Character {
  constructor(name) {
    this.name = name;
  }
}

test('checking the method of adding objects', () => {
  const testTeam = new Team();
  const ivan = new Character('Ivan');
  const boris = new Character('Boris');
  testTeam.add(ivan);
  testTeam.add(boris);
  expect(testTeam.members.size).toBe(2);
});

test('checking the method of adding objects with a duplicate object', () => {
  function addCharacter() {
    const testTeam = new Team();
    const ivan = new Character('Ivan');
    const boris = new Character('Boris');
    testTeam.add(ivan);
    testTeam.add(boris);
    testTeam.add(ivan);
  }
  expect(addCharacter).toThrow(new Error('Данный игрок присутсвует в команде'));
});

test('checking the method of adding an unlimited number of objects at once', () => {
  const testTeam = new Team();
  const ivan = new Character('Ivan');
  const boris = new Character('Boris');
  const roman = new Character('Roman');
  const den = new Character('Den');
  testTeam.addAll(ivan, boris, roman, den);
  expect(testTeam.members.size).toBe(4);
});

test('checking the cape method for adding an unlimited number of objects with duplicate objects', () => {
  const testTeam = new Team();
  const ivan = new Character('Ivan');
  const boris = new Character('Boris');
  testTeam.addAll(ivan, boris, ivan, boris);
  expect(testTeam.members.size).toBe(2);
});

test('checking the method of returning an array of objects', () => {
  const expected = [
    { name: 'Ivan' },
    { name: 'Boris' },
    { name: 'Roman' },
    { name: 'Den' },
  ];
  const testTeam = new Team();
  const ivan = new Character('Ivan');
  const boris = new Character('Boris');
  const roman = new Character('Roman');
  const den = new Character('Den');
  const myTeam = testTeam.addAll(ivan, boris, roman, den, roman);
  expect(testTeam.toArray(myTeam)).toEqual(expected);
});
