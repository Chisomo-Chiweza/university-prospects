
export default function generateKUHES(subjects, programmes) {

    const KUHES = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'Mathematics'));
    required.push(subjects.find(subject => subject.discipline === 'English'));


    temp = medicine(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = bioMedicine(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = publicHealth(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = nursing(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = comHealth(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = midwifery(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            KUHES.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    // KUHES.sort((a, b) => a.available_space > b.available_space ? 1 : -1);

    return KUHES;

}

function medicine(required, subjects, programmes) {

    const medicineProgrammes = programmes.filter(programme => programme.facultyid === 1);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 3) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? medicineProgrammes : [];

}

function bioMedicine(required, subjects, programmes) {

    const bioMedicineProgrammes = programmes.filter(programme => programme.facultyid === 2);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? bioMedicineProgrammes : [];

}

function publicHealth(required, subjects, programmes) {

    const publicHealthProgrammes = programmes.filter(programme => programme.facultyid === 3);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? publicHealthProgrammes : [];

}

function nursing(required, subjects, programmes) {

    const nursingProgrammes = programmes.filter(programme => programme.facultyid === 4);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? nursingProgrammes : [];

}

function comHealth(required, subjects, programmes) {

    const comHealthProgrammes = programmes.filter(programme => programme.facultyid === 5);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? comHealthProgrammes : [];

}

function midwifery(required, subjects, programmes) {

    const midwiferyProgrammes = programmes.filter(programme => programme.facultyid === 6);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 5);

    return isEligible ? midwiferyProgrammes : [];

}