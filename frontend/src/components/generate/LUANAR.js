
export default function generateLUANAR(subjects, programmes) {

    const LUANAR = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));
    required.push(subjects.find(subject => subject.discipline === 'Mathematics'));


    temp = agriculture(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = developmentStudies(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = foodScience(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = naturalResources(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = naturalResourcesCollege(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            LUANAR.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    // LUANAR.sort((a, b) => a.available_space > b.available_space ? 1 : -1);

    return LUANAR;

}

function agriculture(required, subjects, programmes) {

    const agricultureProgrammes = programmes.filter(programme => programme.facultyid === 26);
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
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);
    const isEligible = minimumRequirements &&  (advantage.length > 0 && advantage.every(subject => subject.grade <= 5));

    return isEligible ? agricultureProgrammes : [];

}

function developmentStudies(required, subjects, programmes) {

    const developmentProgrammes = programmes.filter(programme => programme.facultyid === 27);
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
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);
    const isEligible = minimumRequirements &&  (advantage.length > 0 && advantage.every(subject => subject.grade <= 5));

    return isEligible ? developmentProgrammes : [];

}

function foodScience(required, subjects, programmes) {

    const foodScienceProgrammes = programmes.filter(programme => programme.facultyid === 28);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? foodScienceProgrammes : [];

}

function naturalResources(required, subjects, programmes) {

    const naturalResourcesProgrammes = programmes.filter(programme => programme.facultyid === 29);
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
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const minimumRequirements = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);
    const isEligible = minimumRequirements &&  (advantage.length > 0 && advantage.every(subject => subject.grade <= 5));

    return isEligible ? naturalResourcesProgrammes : [];

}

function naturalResourcesCollege(required, subjects, programmes) {

    const naturalResourcesCollegeProgrammes = programmes.filter(programme => programme.facultyid === 30);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? naturalResourcesCollegeProgrammes : [];

}



