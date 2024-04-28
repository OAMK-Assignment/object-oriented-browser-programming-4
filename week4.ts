let counter = 0;

function task1IncrementCounter(counter: number): number {
  const updatedCounter = counter + 1;
  return updatedCounter;
}

function task2FilterEven(numbers: number[]): number[] {
  const evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);
  return evenNumbers;
}

interface Person {
  name: string;
  age: number;
}

function task3FilterAdults(persons: Person[]): Person[] {
  const adults: Person[] = persons.filter((person) => person.age > 18);
  return adults;
}

function task4MultiplyArray(numbers: number[], multiplicationNumber: number): number[] {
  const multipliedNumbers: number[] = numbers.map((num) => num * multiplicationNumber);
  return multipliedNumbers;
}

function task5GetPersonNames(persons: Person[]): string[] {
  const personNames: string[] = persons.map((person) => person.name);
  return personNames;
}

export { task1IncrementCounter, task2FilterEven, task3FilterAdults, task4MultiplyArray , task5GetPersonNames };
