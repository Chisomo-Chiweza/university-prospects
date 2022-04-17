
export default function generateMUST(subjects, programmes) {

    const MUST = [];
    let temp = []
    const required = [];
    required.push(subjects.find(subject => subject.discipline === 'English'));
    required.push(subjects.find(subject => subject.discipline === 'Mathematics'));


    temp = MIT(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUST.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }


    temp = NDATHA(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUST.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = medicalScience(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUST.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = BINGU(required, subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            MUST.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    // MUST.sort((a, b) => a.available_space > b.available_space ? 1 : -1);

    return MUST;

}

function MIT(required, subjects, programmes) {

    const MITProgrammes = programmes.filter(programme => programme.facultyid === 16);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);

    return isEligible ? MITProgrammes : [];

}

function NDATHA(required, subjects, programmes) {

    const NDATHAProgrammes = programmes.filter(programme => programme.facultyid === 17);
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
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }

    const minimumRequirements = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);
    const isEligible = minimumRequirements &&  (advantage.length > 0 && advantage.every(subject => subject.grade <= 4));

    return isEligible ? NDATHAProgrammes : [];

}

function medicalScience(required, subjects, programmes) {

    const medicalScienceProgrammes = programmes.filter(programme => programme.facultyid === 18);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Science' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);

    return isEligible ? medicalScienceProgrammes : [];

}

function BINGU(required, subjects, programmes) {

    const BINGUProgrammes = programmes.filter(programme => programme.facultyid === 19);
    const necessarySubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.discipline === 'Humanities' && subject.grade <= 4) {
            necessarySubjects.push(subject);
        }
    }
    const isEligible = necessarySubjects.length >= 3 && required.every(subject => subject.grade <= 4);

    return isEligible ? BINGUProgrammes : [];

}



