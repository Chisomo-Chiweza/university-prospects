
export default function generateUNIMA(subjects, programmes) {

    const UNIMA = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));
    required.push(subjects.find(subject => subject.discipline === 'Mathematics'));


    temp = education(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = science(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = socialScience(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = humanities(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            UNIMA.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    // UNIMA.sort((a, b) => a.available_space > b.available_space ? 1 : -1);

    return UNIMA;

}

function education(required, subjects, programmes) {

    const educationProgrammes = programmes.filter(programme => programme.facultyid === 7 && (programme.id !== 20 && programme.id !== 21));
    const educationHumanitiesProgrammes = [];
    educationHumanitiesProgrammes.push(programmes.find(programme => programme.id === 20));
    educationHumanitiesProgrammes.push(programmes.find(programme => programme.id === 21));
    const necessaryScienceSubjects = [];
    const necessaryHumanitiesSubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessaryScienceSubjects.push(subject);
        }
    }

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Humanities' && subject.grade <= 5) {
            necessaryHumanitiesSubjects.push(subject);
        }
    }

    const isEligibleScience = necessaryScienceSubjects.length >= 3 && required.every(subject => subject.grade <= 5);
    const isEligibleHumanities = necessaryHumanitiesSubjects.length >= 2 && required.every(subject => subject.grade <= 5);

    if (isEligibleScience) {
        return educationProgrammes;
    }

    if (isEligibleHumanities) {
        return educationHumanitiesProgrammes;
    }

    return [];

}

function science(required, subjects, programmes) {

    const scienceProgrammes = programmes.filter(programme => programme.facultyid === 9 && programme.id !== 27);
    const advantage = subjects.filter(subject => subject.discipline === 'Mathematics');    
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }

    const isEligibleActuarial = advantage.length > 0 && advantage.every(subject => subject.grade <= 4);
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);

    if (isEligibleActuarial) {
        scienceProgrammes.push(programmes.find(programme => programme.id === 27));
    }

    return isEligible ? scienceProgrammes : [];

}

function socialScience(required, subjects, programmes) {

    const socialScienceProgrammes = programmes.filter(programme => programme.facultyid === 10 && programme.id !== 52);
    socialScienceProgrammes.shift();
    socialScienceProgrammes.shift();
    
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 5) {
            necessarySubjects.push(subject);
        }
    }

    const isEligibleLaw = necessarySubjects.length >= 2 && required.every(subject => subject.grade <= 4);
    const isELigibleEconomics = required.every(subject => subject.grade <= 3);
    const isEligible = subjects.every(subject => subject.grade <= 5);

    if (isEligibleLaw) {
        socialScienceProgrammes.push(programmes.find(programme => programme.id === 52));
    }

    if (isELigibleEconomics) {

        socialScienceProgrammes.push(programmes.find(programme => programme.id === 42));
        socialScienceProgrammes.push(programmes.find(programme => programme.id === 43));

    }

    return isEligible ? socialScienceProgrammes : [];

}

function humanities(required, subjects, programmes) {

    const humanitiesProgrammes = programmes.filter(programme => programme.facultyid === 8);
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



