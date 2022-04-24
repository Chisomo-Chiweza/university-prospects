
export default function generateUNIMA(subjects, programmes, IGCSE) {

    const UNIMA = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));

    temp = educationScience(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = educationHumanities(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = humanities(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = science(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = socialScience(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = socialScienceNoMath(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = socialScienceLaw(required, subjects, programmes, IGCSE);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    return UNIMA;

}

function educationScience(required, subjects, programmes, IGCSE) {

    const educationScienceProgrammes = programmes.filter(programme => programme.facultyid === 7 && (programme.id !== 20 && programme.id !== 21));
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics')
    const necessarySubjects = [];
    
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))) && minimumRequirements


    return isEligible ? educationScienceProgrammes : [];
}

function educationHumanities(required, subjects, programmes, IGCSE) {

    const educationHumanitiesProgrammes = programmes.filter(programme => programme.id === 20 || programme.id === 21);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Humanities' || subject.discipline === 'Development') && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))
    const isEligible = necessarySubjects.length >= 2 && minimumRequirements;

    return isEligible ? educationHumanitiesProgrammes : [];

}

function humanities(required, subjects, programmes, IGCSE) {

    const humanitiesProgrammes = programmes.filter(programme => programme.facultyid === 8);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if ((subject.discipline === 'Humanities') && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))
    const isEligible = necessarySubjects.length >= 2 && minimumRequirements;

    return isEligible ? humanitiesProgrammes : [];

}

function science(required, subjects, programmes, IGCSE) {

    const scienceProgrammes = programmes.filter(programme => programme.facultyid === 9 && programme.id !== 27);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics');    
    const necessarySubjects = [];
    const modifiedIGCSE = ['A+', 'A', 'B']

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 4 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    if (requiredScience.some(subject => subject.grade <= 4 || modifiedIGCSE.includes(subject.grade))) {
        scienceProgrammes.push(programmes.find(programme => programme.id === 27));
    }

    const minimumRequirements = required.every(subject => subject.grade <= 5 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 5 || IGCSE.includes(subject.grade))
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => subject.grade <= 5 || IGCSE.includes(subject.grade))) && minimumRequirements

    return isEligible ? scienceProgrammes : [];

}

function socialScience(required, subjects, programmes, IGCSE) {

    const socialScienceProgrammes = programmes.filter(programme => programme.facultyid === 10 && ((programme.id !== 50 && programme.id !== 51) && programme.id !== 52));
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics')
    
    const minimumRequirements = required.every(subject => subject.grade <= 5 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 5 || IGCSE.includes(subject.grade))
    const isEligible = requiredScience.some(subject => subject.grade <= 5 || IGCSE.includes(subject.grade)) && minimumRequirements

    return isEligible ? socialScienceProgrammes : [];

}

function socialScienceNoMath(required, subjects, programmes, IGCSE) {

    const socialScienceNoMathProgrammes = programmes.filter(programme => programme.id === 50 || programme.id === 51);
    const isEligible = required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))
    return isEligible ? socialScienceNoMathProgrammes : [];

}

function socialScienceLaw(required, subjects, programmes, IGCSE) {

    const socialScienceLawProgrammes = programmes.filter(programme => programme.id === 52);
    const requiredScience = subjects.filter(subject => subject.discipline === 'Mathematics')
    const necessarySubjects = [];
    
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && (subject.grade <= 6 || IGCSE.includes(subject.grade))) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = required.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade)) && subjects.every(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))
    const isEligible = (necessarySubjects.length >= 2 && requiredScience.some(subject => subject.grade <= 6 || IGCSE.includes(subject.grade))) && minimumRequirements

    return isEligible ? socialScienceLawProgrammes : [];

}






