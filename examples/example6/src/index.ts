interface Person {
  isPrimary: boolean,
  relatedId: string,
}

interface Applicant {
  name: string,
  origin: string,
}


function wrap<T>(item: T): T[] {
  return [item]
}

const person: Person = {
  isPrimary: true,
  relatedId: 'id1'
}

console.log(wrap(person));

const applicant: Applicant = {
  name: 'kelvin',
  origin: 'c1'
}

console.log(wrap(applicant));