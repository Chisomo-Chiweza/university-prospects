
export default function generateMZUNI(subjects, programmes) {

    const MZUNI = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));
    required.push(subjects.find(subject => subject.discipline === 'Mathematics'));


    temp = education(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = healthScience(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = humanities(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = science(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = environmentalScience(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = tourism(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    // MZUNI.sort((a, b) => a.available_space > b.available_space ? 1 : -1);

    return MZUNI;

}

function education(required, subjects, programmes) {

    const educationProgrammes = programmes.filter(programme => programme.facultyid === 20);
    educationProgrammes.shift();
    educationProgrammes.shift();
    educationProgrammes.shift();
    const frenchAdvantage = subjects.filter(subject => subject.id === 20);
    const necessaryScienceSubjects = [];
    const necessaryHumanitiesSubjects = [];
    const necessaryLanguagesSubjects = [];
    const languageProgrammes = [];
    languageProgrammes.push(programmes.find(programme => programme.id === 118));
    const artsProgrammes = [];
    artsProgrammes.push(programmes.find(programme => programme.id === 120));
    const frenchProgramme = [];
    frenchProgramme.push(programmes.find(programme => programme.id === 119));

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.id === (29 || 20) && subject.grade <= 5) {
            necessaryLanguagesSubjects.push(subject);
        }
    }

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Humanities' && subject.grade <= 5) {
            necessaryHumanitiesSubjects.push(subject);
        }
    }

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessaryScienceSubjects.push(subject);
        }
    }

    const isEligibleLanguages = necessaryLanguagesSubjects.length >= 2 && required.every(subject => subject.grade <= 5);
    const isEligibleHumanities = necessaryHumanitiesSubjects.length >= 2 && required.every(subject => subject.grade <= 5);
    const isEligibleSciences = necessaryScienceSubjects.length >= 2 && required.every(subject => subject.grade <= 5);
    const isEligibleFrench = frenchAdvantage.length > 0 && (frenchAdvantage.every(subject => subject.grade <= 5) && required.every(subject => subject.grade <= 5));

    if (isEligibleLanguages) {
        return languageProgrammes;
    }

    if (isEligibleHumanities) {
        return artsProgrammes;
    }

    if (isEligibleSciences) {
        return educationProgrammes
    }

    if (isEligibleFrench) {
        return frenchProgramme;
    }

    return [];

}

function healthScience(required, subjects, programmes) {

    const healthScienceProgrammes = programmes.filter(programme => programme.facultyid === 21);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 2 && required.every(subject => subject.grade <= 5);

    return isEligible ? healthScienceProgrammes : [];

}

function humanities(required, subjects, programmes) {

    const humanitiesProgrammes = programmes.filter(programme => programme.facultyid === 22);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Humanities' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 2 && required.every(subject => subject.grade <= 5);

    return isEligible ? humanitiesProgrammes : [];

}


function science(required, subjects, programmes) {

    const scienceProgrammes = programmes.filter(programme => programme.facultyid === 23);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);

    return isEligible ? scienceProgrammes : [];

}

function environmentalScience(required, subjects, programmes) {

    const environmentalScienceProgrammes = programmes.filter(programme => programme.facultyid === 24);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);

    return isEligible ? environmentalScienceProgrammes : [];

}

function tourism(required, subjects, programmes) {

    const tourismProgrammes = programmes.filter(programme => programme.facultyid === 25);
    const isEligible = subjects.every(subject => subject.grade <= 5) && required.every(subject => subject.grade <= 5);

    return isEligible ? tourismProgrammes : [];

}
