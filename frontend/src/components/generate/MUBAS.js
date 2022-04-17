
export default function generateMUBAS(subjects, programmes) {

    const MUBAS = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));


    temp = appliedScience(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = builtEnv(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = commerce(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = education(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = engineering(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    // MUBAS.sort((a, b) => a.available_space > b.available_space ? 1 : -1);

    return MUBAS;

}

function appliedScience(required, subjects, programmes) {

    const appliedScienceProgrammes = programmes.filter(programme => programme.facultyid === 11);
    const necessarySubjects = [];
    const advantage = subjects.find(subject => subject.discipline === 'Mathematics');

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);
    const isEligible = minimumRequirements && advantage.grade <= 4;

    return isEligible ? appliedScienceProgrammes : [];

}

function builtEnv(required, subjects, programmes) {

    const builtEnvProgrammes = programmes.filter(programme => programme.facultyid === 12);
    const builtEnvArtProgrammes = [];
    builtEnvArtProgrammes.push(builtEnvProgrammes.shift());
    builtEnvArtProgrammes.push(builtEnvProgrammes.shift());
    const necessarySubjects = [];
    const advantage = subjects.find(subject => subject.discipline === 'Mathematics');
    const artAdvantage = subjects.find(subject => subject.discipline === 'Art');
    
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }

    
    if (artAdvantage != null && artAdvantage.grade <= 4) {
        for (let i = 0; i < builtEnvArtProgrammes.length; i++) {
            const programme = builtEnvArtProgrammes[i];
            builtEnvProgrammes.push(programme);
        }
    }

    
    const minimumRequirements = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);
    const isEligible = minimumRequirements && advantage.grade <= 3;

    return isEligible ? builtEnvProgrammes : [];

}

function commerce(required, subjects, programmes) {

    const commerceProgrammes = programmes.filter(programme => programme.facultyid === 13);
    const advantage = subjects.find(subject => subject.discipline === 'Mathematics');
    
    const isEligible = advantage.grade <= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? commerceProgrammes : [];

}

function education(required, subjects, programmes) {

    required.push(subjects.find(subject => subject.discipline === 'Mathematics'))
    const educationProgrammes = programmes.filter(programme => programme.facultyid === 14 && programme.id !== 75);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];   
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
        
    }

    if (necessarySubjects.length >= 3) {
        educationProgrammes.push(programmes.find(programme => programme.id === 75))
    }

    const isEligible = required.every(subject => subject.grade <= 4);

    return isEligible ? educationProgrammes : [];

}

function engineering(required, subjects, programmes) {

    const engineeringProgramming = programmes.filter(programme => programme.facultyid === 15);
    const necessarySubjects = [];
    const advantage = subjects.find(subject => subject.discipline === 'Mathematics');


    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);
    const isEligible = minimumRequirements && advantage.grade <= 3;

    return isEligible ? engineeringProgramming : [];

}

