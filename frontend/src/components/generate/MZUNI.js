
export default function generateMZUNI(subjects, programmes, IGCSE) {

    const MZUNI = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));


    temp = educationLanguages(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = educationArts(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = educationScience(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = educationICT(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = healthScience(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = humanities(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = technology(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = environmentalScience(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = tourism(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MZUNI.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    return MZUNI;

}

function educationLanguages(required, subjects, programmes, IGCSE) {

    const educationLanguagesProgrammes = programmes.filter(programme => programme.id === 118);
    const educationFrenchProgramme = programmes.find(programme => programme.id === 119);
    const requiredLanguages = subjects.filter(subject => subject.discipline === 'Languages');
    const requiredFrench = subjects.filter(subject => subject.id === 20 || 37);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Humanities' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = (required.every(subject => (subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))) && necessarySubjects.length >= 2; 
    const isEligibleLanguages = minimumRequirements && requiredLanguages.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade));
    const isEligibleFrench = minimumRequirements && requiredFrench.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade));

    if (isEligibleFrench) {
        
        educationLanguagesProgrammes.push(educationFrenchProgramme);
    }

    return isEligibleLanguages ? educationLanguagesProgrammes : [];

}

function educationArts(required, subjects, programmes, IGCSE) {

    const educationArtsProgrammes = programmes.filter(programme => programme.id === 120);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Humanities' || 'Languages') && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const isEligible = necessarySubjects.length >= 3 && (required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)));

    return isEligible ? educationArtsProgrammes : [];
}

function educationScience(required, subjects, programmes, IGCSE) {

    const educationScienceProgrammes = programmes.filter(programme => programme.id === 121);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 5 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = (required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade));
    const isEligible = (minimumRequirements && necessarySubjects.length <= 2) && requiredScience.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade));

    return isEligible ? educationScienceProgrammes : [];
    
}

function educationICT(required, subjects, programmes, IGCSE) {

    const educationICTProgrammes = programmes.filter(programme => programme.id === 122);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Science' || subject.discipline === 'Development' || subject.discipline === 'Commerce') && (subject.grade <= 5 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = (required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade));
    const isEligible = (minimumRequirements && necessarySubjects.length <= 2) && requiredScience.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade));

    return isEligible ? educationICTProgrammes : [];
    
}

function healthScience(required, subjects, programmes, IGCSE) {

    const healthScienceProgrammes = programmes.filter(programme => programme.facultyid === 21)
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Science') && (subject.grade <= 5 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = (required.every(subject => subject.grade <= 5 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 5 || IGCSE.includes(subject.grade))) && requiredScience.some(subject => subject.grade <= 5 || IGCSE.includes(subject.grade))
    const isEligible = minimumRequirements && necessarySubjects.length >= 2;

    return isEligible ? healthScienceProgrammes : [];

}

function humanities(required, subjects, programmes, IGCSE) {

    const humanitiesProgrammes = programmes.filter(programme => programme.facultyid === 22)
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Humanities') && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = (required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))) && requiredScience.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))
    const isEligible = minimumRequirements && necessarySubjects.length >= 2;

    return isEligible ? humanitiesProgrammes : [];

}

function technology(required, subjects, programmes, IGCSE) {

    const technologyProgrammes = programmes.filter(programme => programme.facultyid === 23)
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Science' || subject.discipline === 'Computing') && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = (required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))) && requiredScience.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))
    const isEligible = minimumRequirements && necessarySubjects.length >= 2;

    return isEligible ? technologyProgrammes : [];

}

function environmentalScience(required, subjects, programmes, IGCSE) {

    const environmentalScienceProgrammes = programmes.filter(programme => programme.facultyid === 24)
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Science' || subject.discipline === 'Development') && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = (required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))) && requiredScience.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))
    const isEligible = minimumRequirements && necessarySubjects.length >= 2;

    return isEligible ? environmentalScienceProgrammes : [];

}

function tourism(required, subject, programmes, IGCSE) {

    const tourismProgrammes = programmes.filter(programme => programme.facultyid === 25)
    const isEligible = required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subject.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade));

    return isEligible ? tourismProgrammes : [];

}

