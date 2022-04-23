
export default function generateMUST(subjects, programmes, IGCSE) {

    const MUST = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));


    temp = MIT(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUST.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = NDATHA(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUST.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = medicalScience(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUST.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = BINGU(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUST.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    return MUST;

}

function MIT(required, subjects, programmes, IGCSE) {

    const MITProgrammes = programmes.filter(programme => programme.facultyid === 16);
    const necessarySubjects = [];
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 4 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 3 && requiredScience.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade))) && minimumRequirements);

    return isEligible ? MITProgrammes : [];

}

function NDATHA(required, subjects, programmes, IGCSE) {

    const NDATHAProgrammes = programmes.filter(programme => programme.facultyid === 17);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const advantage = [];

    if (subjects.filter(subject => subject.id === 10).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 10));
        
    }

    if (subjects.filter(subject => subject.id === 31).length > 0) {

        advantage.push(subjects.find(subject => subject.id === 31));
        
    }
    
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 4 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = (required.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)) && subjects.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade))))) && requiredScience.some(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)));
    const isEligible = minimumRequirements && (advantage.length > 0 && advantage.every(subject => subject.grade <= 4 || IGCSE.includes(subject.grade)) && necessarySubjects.length >= 3);

    return isEligible ? NDATHAProgrammes : [];

}

function medicalScience(required, subjects, programmes, IGCSE) {

    const medicalScienceProgrammes = programmes.filter(programme => programme.facultyid === 18);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 4 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 3 && requiredScience.some(subject => (subject.grade <= 4 || IGCSE.includes(subject.grade)))) && minimumRequirements;

    return isEligible ? medicalScienceProgrammes : [];

}

function BINGU(required, subjects, programmes, IGCSE) {

    const BINGUProgrammes = programmes.filter(programme => programme.facultyid === 19);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Humanities' || subject.discipline === 'Art') && (subject.grade <= 4 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && (required.every(subject => subject.grade <= 4 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 4 || IGCSE.includes(subject.grade)));

    return isEligible ? BINGUProgrammes : [];

}



