type PersonInfo = {
    name: string;
    lastName: string;
    fullName(): string;
};

type PersonAge = {
    age: number;
    date: string;
};
type PersonType = PersonInfo & PersonAge;

export class Person implements PersonType {
    constructor(public name: string, public lastName: string, public age: number, public date: string) {}

    fullName(): string {
        return this.name + " " + this.lastName;
    }
}
