import generateKUHES from './KUHES';
import generateLUANAR from './LUANAR';
import generateMUBAS from './MUBAS';
import generateMUST from './MUST';
import generateUNIMA from './UNIMA';
import generateMZUNI from './MZUNI';

export function generateProgrammes(subjects, programmes) {

    const recommendedProgrammes = [];
    
    let temp = generateKUHES(subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            recommendedProgrammes.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = generateMUBAS(subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            recommendedProgrammes.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = generateMUST(subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            recommendedProgrammes.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }
    
    temp = generateLUANAR(subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            recommendedProgrammes.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = generateUNIMA(subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            recommendedProgrammes.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    temp = generateMZUNI(subjects, programmes);
    if (temp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            const programme = temp[i];
            recommendedProgrammes.push(programme);
        }
        while (temp.length > 0) {
            temp.pop();
        }

    }

    return recommendedProgrammes;

}






