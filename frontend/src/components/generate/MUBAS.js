
export default function generateMUBAS(subjects, programmes, IGCSE) {

    const MUBAS = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));


    temp = appliedScience(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = builtEnv(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = builtEnvArt(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = commerce(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = education(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = engineering(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUBAS.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    return MUBAS;

}

function appliedScience(required, subjects, programmes, IGCSE) {

    const appliedScienceProgrammes = programmes.filter(programme => programme.facultyid === 11);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 5 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = required.every(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade)))) && minimumRequirements;

    return isEligible ? appliedScienceProgrammes : [];

}

function builtEnv(required, subjects, programmes, IGCSE) {

    const builtEnvProgrammes = programmes.filter(programme => programme.facultyid === 12 && (programme.id !== 61 && programme.id !== 62));
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    
    
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 4 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)))) && minimumRequirements;

    return isEligible ? builtEnvProgrammes : [];

}

function builtEnvArt(required, subjects, programmes, IGCSE) {

    const builtEnvArtProgrammes = programmes.filter(programme => programme.id === 61 || programme.id === 62);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const artAdvantage = subjects.filter(subject => subject.discipline === 'Art');
    const necessarySubjects = [];
    
    
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 4 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)))) && (minimumRequirements && artAdvantage.some(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade))));

    return isEligible ? builtEnvArtProgrammes : [];

}

function commerce(required, subjects, programmes, IGCSE) {

    const commerceProgrammes = programmes.filter(programme => programme.facultyid === 13);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    
    const isEligible = (required.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))) && requiredScience.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)));

    return isEligible ? commerceProgrammes : [];

}

function education(required, subjects, programmes, IGCSE) {

    const educationProgrammes = programmes.filter(programme => programme.facultyid === 14 && programme.id !== 75);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];   
        if (subject.discipline === 'Science' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
        
    }

    if (necessarySubjects.length >= 2) {
        educationProgrammes.push(programmes.find(programme => programme.id === 75))
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)));
    const isEligible = requiredScience.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && minimumRequirements;

    return isEligible ? educationProgrammes : [];

}

function engineering(required, subjects, programmes, IGCSE) {

    const engineeringProgramming = programmes.filter(programme => programme.facultyid === 15);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
   
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 4 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = required.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)))) && minimumRequirements;

    return isEligible ? engineeringProgramming : [];

}

