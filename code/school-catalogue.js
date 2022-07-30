class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        typeof numberOfStudents === "number"
            ? (this._numberOfStudents = numberOfStudents)
            : this._numberOfStudents = 0;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(num) {
        if (typeof num === "Number") this._numberOfStudents = num;
        console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
    quickFacts() {
        console.log(
            `${this._name} educates ${this._numberOfStudents} students at the ${this._level}  school level.`
        );
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let randomInd = Math.floor(Math.random() * (substituteTeachers.length - 1));
        return substituteTeachers[randomInd];
    }
}

//const a = new School("asas", 1, 7);
// a._numberOfStudents = 10
// console.log(a)

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}

class SchoolCatalog {
    constructor() {
        this._schoolList = [];
    }
    get schoolList() {
        return this._schoolList;
    }
    addSchool(schoolItem) {
        if (schoolItem instanceof School) {
            this._schoolList.push(schoolItem);
        } else {
            console.log('Item must be of type School.');
        }
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
let teacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(teacher);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams)
