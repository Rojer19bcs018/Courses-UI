export class Course {
  public name: string;
  public teacher: string;
  public difficulty: string;
  constructor(name: string, teacher: string, difficulty: string) {
    this.name = name;
    this.teacher = teacher;
    this.difficulty = difficulty;
  }
}
