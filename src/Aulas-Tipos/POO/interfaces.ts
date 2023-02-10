interface PersonInfo {
    name: string;
    lastName: string;
    fullName(): string;
}

interface PersonAge {
    age: number;
    date: string;
}

interface PersonInterface extends PersonInfo, PersonAge {}

export class Person implements PersonInterface {
    constructor(public name: string, public lastName: string, public age: number, public date: string) {}

    fullName(): string {
        return this.name + " " + this.lastName;
    }
}
