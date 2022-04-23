
export default function generateKUHES(subjects, programmes, IGCSE) {

    const KUHES = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));


    temp = medicine(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = bioMedicine(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = publicHealth(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = nursing(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = comHealth(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = midwifery(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    return KUHES;

}

function medicine(required, subjects, programmes, IGCSE) {

    const medicineProgrammes = programmes.filter(programme => programme.facultyid === 1);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    IGCSE.length = 3

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 3 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 3 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 3 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 3 && requiredScience.some(subject => (subject.grade <= 3 || IGCSE.includes(subject.grade)))) && minimumRequirements;

    return isEligible ? medicineProgrammes : [];

}

function bioMedicine(required, subjects, programmes, IGCSE) {

    const bioMedicineProgrammes = programmes.filter(programme => programme.facultyid === 2);
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
    return isEligible ? bioMedicineProgrammes : [];

}

function publicHealth(required, subjects, programmes, IGCSE) {

    const publicHealthProgrammes = programmes.filter(programme => programme.facultyid === 3);
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
    return isEligible ? publicHealthProgrammes : [];

}

function nursing(required, subjects, programmes, IGCSE) {

    const nursingProgrammes = programmes.filter(programme => programme.facultyid === 4);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 5 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 3 && requiredScience.some(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade)))) && minimumRequirements;
    return isEligible ? nursingProgrammes : [];

}

function comHealth(required, subjects, programmes, IGCSE) {

    const comHealthProgrammes = programmes.filter(programme => programme.facultyid === 5);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 5 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 3 && requiredScience.some(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade)))) && minimumRequirements;
    return isEligible ? comHealthProgrammes : [];

}

function midwifery(required, subjects, programmes, IGCSE) {

    const midwiferyProgrammes = programmes.filter(programme => programme.facultyid === 6);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];
    
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 5 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade))) && subjects.every(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade)));
    const isEligible = (necessarySubjects.length >= 3 && requiredScience.some(subject => (subject.grade <= 5 || IGCSE.includes(subject.grade)))) && minimumRequirements;
    return isEligible ? midwiferyProgrammes : [];

}