import Person from './Person';

class Programmer extends Person {
    private language: string;
    constructor(name: string, language: string) {
        super(name);
        this.language = language;
    }
    code() {
        return [this.getName(), this.language];
    }
}

export default Programmer;