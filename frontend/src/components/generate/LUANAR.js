
export default function generateLUANAR(subjects, programmes, IGCSE) {

    const LUANAR = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));


    temp = agriculture(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = developmentStudies(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = foodScience(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = naturalResources(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = naturalResourcesCollege(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    return LUANAR;

}

function agriculture(required, subjects, programmes, IGCSE) {

    const agricultureProgrammes = programmes.filter(programme => programme.facultyid === 26);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    const advantage = [];

    if (subjects.filter(subject => subject.id === 22).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 22));
    
    }

    if (subjects.filter(subject => subject.id === 23).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 23));
    
    }

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = required.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))) && (minimumRequirements && (advantage.length > 0 && advantage.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))));

    return isEligible ? agricultureProgrammes : [];

}

function developmentStudies(required, subjects, programmes, IGCSE) {

    const developmentProgrammes = programmes.filter(programme => programme.facultyid === 27);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    const advantage = [];

    if (subjects.filter(subject => subject.id === 22).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 22));
    
    }

    if (subjects.filter(subject => subject.id === 23).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 23));
    
    }

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = required.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))) && (minimumRequirements && (advantage.length > 0 && advantage.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))));

    return isEligible ? developmentProgrammes : [];

}

function foodScience(required, subjects, programmes, IGCSE) {

    const foodScienceProgrammes = programmes.filter(programme => programme.facultyid === 28);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    const advantage = [];

    if (subjects.filter(subject => subject.id === 22).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 22));
    
    }

    if (subjects.filter(subject => subject.id === 23).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 23));
    
    }

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = required.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))) && (minimumRequirements && (advantage.length > 0 && advantage.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))));

    return isEligible ? foodScienceProgrammes : [];

}

function naturalResources(required, subjects, programmes, IGCSE) {

    const naturalResourcesProgrammes = programmes.filter(programme => programme.facultyid === 29);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    const advantage = [];

    if (subjects.filter(subject => subject.id === 22).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 22));
    
    }

    if (subjects.filter(subject => subject.id === 23).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 23));
    
    }

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = required.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))) && (minimumRequirements && (advantage.length > 0 && advantage.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))));

    return isEligible ? naturalResourcesProgrammes : [];

}

function naturalResourcesCollege(required, subjects, programmes, IGCSE) {

    const naturalResourcesCollegeProgrammes = programmes.filter(programme => programme.facultyid === 30);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    const advantage = [];

    if (subjects.filter(subject => subject.id === 22).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 22));
    
    }

    if (subjects.filter(subject => subject.id === 23).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 23));
    
    }

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = required.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))) && (minimumRequirements && (advantage.length > 0 && advantage.some(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade)))));

    return isEligible ? naturalResourcesCollegeProgrammes : [];

}



