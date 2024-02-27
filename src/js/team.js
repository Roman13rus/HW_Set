export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(value) {
    if (this.members.has(value)) {
      throw new Error('Данный игрок присутсвует в команде');
    } else {
      this.members.add(value);
    }
  }

  addAll(...arrCharacter) {
    Array.from(arrCharacter).forEach((item) => {
      this.members.add(item);
    });
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
