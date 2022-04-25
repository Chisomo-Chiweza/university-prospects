import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { generateProgrammes } from './generate/GenerateProgrammes';

class DisplayProgrammes extends Component {

    constructor(props) {

        super(props);

        this.state = {

            subjects: this.props.finalSubjects,
            programmesLoading: true,
            programmes: [],
            recommendedProgrammes: [],
            numberOfUniversities: [],
            kuhesEligible: false,
            KUHES: [],
            unimaEligible: false,
            UNIMA: [],
            mubasEligible: false,
            MUBAS: [],
            mustEligible: false,
            MUST: [],
            mzuniEligible: false,
            MZUNI: [],
            luanarEligible: false,
            LUANAR: [],

        }

        this.toggleMedicine = this.toggleMedicine.bind(this);
        this.toggleBiomedical = this.toggleBiomedical.bind(this);
        this.togglePublic = this.togglePublic.bind(this);
        this.toggleNursing = this.toggleNursing.bind(this);
        this.toggleCommunity = this.toggleCommunity.bind(this);
        this.toggleMidwifery = this.toggleMidwifery.bind(this);
        this.toggleEducation = this.toggleEducation.bind(this);
        this.toggleHumanities = this.toggleHumanities.bind(this);
        this.toggleScience = this.toggleScience.bind(this);
        this.toggleSocial = this.toggleSocial.bind(this);
        this.toggleApplied = this.toggleApplied.bind(this);
        this.toggleBuilt = this.toggleBuilt.bind(this);
        this.toggleCommerce = this.toggleCommerce.bind(this);
        this.toggleEdu = this.toggleEdu.bind(this);
        this.toggleEngineer = this.toggleEngineer.bind(this);
        this.toggleMIT = this.toggleMIT.bind(this);
        this.toggleNDATHA = this.toggleNDATHA.bind(this);
        this.toggleMSC = this.toggleMSC.bind(this);
        this.toggleBINGU = this.toggleBINGU.bind(this);
        this.toggleEduMZUNI = this.toggleEduMZUNI.bind(this);
        this.toggleHealth = this.toggleHealth.bind(this);
        this.toggleHuman = this.toggleHuman.bind(this);
        this.toggleSciMZUNI = this.toggleSciMZUNI.bind(this);
        this.toggleEnv = this.toggleEnv.bind(this);
        this.toggleTourism = this.toggleTourism.bind(this);
        this.toggleAgriculture = this.toggleAgriculture.bind(this);
        this.toggleDevelopment = this.toggleDevelopment.bind(this);
        this.toggleFood = this.toggleFood.bind(this);
        this.toggleNatural = this.toggleNatural.bind(this);
        this.toggleCollege = this.toggleCollege.bind(this);



    }

    componentDidMount() {

        const getProgrammes = async () => {

            const programmesUrl = `https://university-prospects.herokuapp.com/programmes`;
            const { data } = await axios.get(programmesUrl);
            this.setState({ programmes: data, programmesLoading: false });

            let { recommendedProgrammes, subjects, programmes } = this.state;
            recommendedProgrammes = generateProgrammes(subjects, programmes);
            this.setState({ recommendedProgrammes: recommendedProgrammes }, () => this.universityProgrammes(this.state.recommendedProgrammes));

        }

        getProgrammes();


    }

    universityProgrammes(programmes) {

        let { numberOfUniversities } = this.state;
        let { KUHES, UNIMA, MUBAS, MUST, MZUNI, LUANAR } = this.state;

        numberOfUniversities = [];

        KUHES = programmes.filter(programme => programme.universityid === 1);
        KUHES.length > 0 ? this.setState({ KUHES: KUHES, kuhesEligible: true }) : this.setState({ kuhesEligible: false })
        if (KUHES.length > 0) numberOfUniversities.push(1);

        UNIMA = programmes.filter(programme => programme.universityid === 2);
        UNIMA.length > 0 ? this.setState({ UNIMA: UNIMA, unimaEligible: true }) : this.setState({ unimaEligible: false })
        if (UNIMA.length > 0) numberOfUniversities.push(2);

        MUBAS = programmes.filter(programme => programme.universityid === 3);
        MUBAS.length > 0 ? this.setState({ MUBAS: MUBAS, mubasEligible: true }) : this.setState({ mubasEligible: false })
        if (MUBAS.length > 0) numberOfUniversities.push(3);

        MUST = programmes.filter(programme => programme.universityid === 4);
        MUST.length > 0 ? this.setState({ MUST: MUST, mustEligible: true }) : this.setState({ mustEligible: false })
        if (MUST.length > 0) numberOfUniversities.push(4);

        MZUNI = programmes.filter(programme => programme.universityid === 5);
        MZUNI.length > 0 ? this.setState({ MZUNI: MZUNI, mzuniEligible: true }) : this.setState({ mzuniEligible: false })
        if (MZUNI.length > 0) numberOfUniversities.push(5);

        LUANAR = programmes.filter(programme => programme.universityid === 6);
        LUANAR.length > 0 ? this.setState({ LUANAR: LUANAR, luanarEligible: true }) : this.setState({ luanarEligible: false })
        if (LUANAR.length > 0) numberOfUniversities.push(6);

        this.setState({ numberOfUniversities: numberOfUniversities });

    }

    toggleMedicine(event) {

        event.preventDefault();
        let content = document.getElementById("medicine");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleBiomedical(event) {

        event.preventDefault();
        let content = document.getElementById("biomedical");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    togglePublic(event) {

        event.preventDefault();
        let content = document.getElementById("public");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleNursing(event) {

        event.preventDefault();
        let content = document.getElementById("nursing");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleCommunity(event) {

        event.preventDefault();
        let content = document.getElementById("comm");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleMidwifery(event) {

        event.preventDefault();
        let content = document.getElementById("mid");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleEducation(event) {

        event.preventDefault();
        let content = document.getElementById("education");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleHumanities(event) {

        event.preventDefault();
        let content = document.getElementById("humanities");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleScience(event) {

        event.preventDefault();
        let content = document.getElementById("science");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleSocial(event) {

        event.preventDefault();
        let content = document.getElementById("social");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleApplied(event) {

        event.preventDefault();
        let content = document.getElementById("applied");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleBuilt(event) {

        event.preventDefault();
        let content = document.getElementById("built");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleCommerce(event) {

        event.preventDefault();
        let content = document.getElementById("commerce");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleEdu(event) {

        event.preventDefault();
        let content = document.getElementById("edu");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleEngineer(event) {

        event.preventDefault();
        let content = document.getElementById("engineer");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleMIT(event) {

        event.preventDefault();
        let content = document.getElementById("mit");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleNDATHA(event) {

        event.preventDefault();
        let content = document.getElementById("ndatha");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleMSC(event) {

        event.preventDefault();
        let content = document.getElementById("msc");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleBINGU(event) {

        event.preventDefault();
        let content = document.getElementById("bingu");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleEduMZUNI(event) {

        event.preventDefault();
        let content = document.getElementById("edumzuni");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleHealth(event) {

        event.preventDefault();
        let content = document.getElementById("health");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleHuman(event) {

        event.preventDefault();
        let content = document.getElementById("human");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleSciMZUNI(event) {

        event.preventDefault();
        let content = document.getElementById("scimzuni");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleEnv(event) {

        event.preventDefault();
        let content = document.getElementById("environment");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleTourism(event) {

        event.preventDefault();
        let content = document.getElementById("tourism");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleAgriculture(event) {

        event.preventDefault();
        let content = document.getElementById("agriculture");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleDevelopment(event) {

        event.preventDefault();
        let content = document.getElementById("development");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleFood(event) {

        event.preventDefault();
        let content = document.getElementById("food");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleNatural(event) {

        event.preventDefault();
        let content = document.getElementById("natural");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }

    toggleCollege(event) {

        event.preventDefault();
        let content = document.getElementById("college");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }

    }




    render() {

        const { programmesLoading, numberOfUniversities, KUHES, UNIMA, MUBAS, MUST, MZUNI, LUANAR } = this.state;

        return (


            <div>

                <h1 className='font-semibold text-6xl text-center text-space'>Your <span className='text-jonquil'>Programmes</span></h1>

                {
                    programmesLoading ?

                        <div className='text-center mt-6'>
                            <button disabled type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 inline-flex items-center">
                                <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Generating Programmes ...
                            </button>
                        </div>

                        :

                        numberOfUniversities.length > 0 ?

                            <div>

                                <h1 className="mt-4 mb-6 font-semibold text-gray-700 text-2xl text-center">
                                    You are eligible for programmes from {numberOfUniversities.length} out of 6 Universities <br />
                                    <span className='text-xl text-gray-600 text-center'>The universities are as follows.</span>
                                </h1>

                                <div className='grid grid-cols-2 gap-4'>

                                    {
                                        KUHES.length > 0 ?

                                            <div className='mb-4 p-6 border shadow-sm border-gray-400'>

                                                {
                                                    KUHES.length > 0 ?
                                                        <div className=''>
                                                            <h1 className='font-semibold text-lg text-space underline decoration-jonquil'>Kamuzu university of Health Sciences (KUHES)</h1>
                                                            <p className='mb-2 text-gray-600 font-medium'>
                                                                You qualified for the following faculties.
                                                            </p>
                                                        </div>
                                                        : null
                                                }

                                                <div className='mb-4'>

                                                    {
                                                        KUHES.filter(programme => programme.facultyid === 1).length > 0 ?
                                                            <button
                                                                onClick={this.toggleMedicine}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Medicine
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="medicine" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            KUHES.filter(programme => programme.facultyid === 1).length > 0 ?
                                                                KUHES.filter(programme => programme.facultyid === 1).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/KUHES#med"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        KUHES.filter(programme => programme.facultyid === 2).length > 0 ?
                                                            <button
                                                                onClick={this.toggleBiomedical}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Biomedical Sciences
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="biomedical" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            KUHES.filter(programme => programme.facultyid === 2).length > 0 ?
                                                                KUHES.filter(programme => programme.facultyid === 2).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/KUHES#bio"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        KUHES.filter(programme => programme.facultyid === 3).length > 0 ?
                                                            <button
                                                                onClick={this.togglePublic}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Public Health
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="public" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            KUHES.filter(programme => programme.facultyid === 3).length > 0 ?
                                                                KUHES.filter(programme => programme.facultyid === 3).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/KUHES#pub"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        KUHES.filter(programme => programme.facultyid === 4).length > 0 ?
                                                            <button
                                                                onClick={this.toggleNursing}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Nursing
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="nursing" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            KUHES.filter(programme => programme.facultyid === 4).length > 0 ?
                                                                KUHES.filter(programme => programme.facultyid === 4).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/KUHES#nurs"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        KUHES.filter(programme => programme.facultyid === 5).length > 0 ?
                                                            <button
                                                                onClick={this.toggleCommunity}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Community Health Studies
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="comm" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            KUHES.filter(programme => programme.facultyid === 5).length > 0 ?
                                                                KUHES.filter(programme => programme.facultyid === 5).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/KUHES#comm"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        KUHES.filter(programme => programme.facultyid === 6).length > 0 ?
                                                            <button
                                                                onClick={this.toggleMidwifery}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Midwifery
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="mid" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            KUHES.filter(programme => programme.facultyid === 6).length > 0 ?
                                                                KUHES.filter(programme => programme.facultyid === 6).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/KUHES#mid"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                            </div>

                                            : null

                                    }




                                    {
                                        UNIMA.length > 0 ?

                                            <div className='mb-4 p-6 border shadow-sm border-gray-400'>

                                                {
                                                    UNIMA.length > 0 ?
                                                        <div className=''>
                                                            <h1 className='font-semibold text-lg text-space underline decoration-jonquil'>University of Malawi (UNIMA)</h1>
                                                            <p className='mb-2 text-gray-600 font-medium'>
                                                                You qualified for the following faculties.
                                                            </p>
                                                        </div>
                                                        : null
                                                }

                                                <div className='mb-4'>

                                                    {
                                                        UNIMA.filter(programme => programme.facultyid === 7).length > 0 ?
                                                            <button
                                                                onClick={this.toggleEducation}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Education
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="education" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            UNIMA.filter(programme => programme.facultyid === 7).length > 0 ?
                                                                UNIMA.filter(programme => programme.facultyid === 7).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/UNIMA#edu"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        UNIMA.filter(programme => programme.facultyid === 8).length > 0 ?
                                                            <button
                                                                onClick={this.toggleHumanities}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Humanities
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="humanities" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            UNIMA.filter(programme => programme.facultyid === 8).length > 0 ?
                                                                UNIMA.filter(programme => programme.facultyid === 8).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/UNIMA#hum"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        UNIMA.filter(programme => programme.facultyid === 9).length > 0 ?
                                                            <button
                                                                onClick={this.toggleScience}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Science
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="science" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            UNIMA.filter(programme => programme.facultyid === 9).length > 0 ?
                                                                UNIMA.filter(programme => programme.facultyid === 9).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/UNIMA#sci"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        UNIMA.filter(programme => programme.facultyid === 10).length > 0 ?
                                                            <button
                                                                onClick={this.toggleSocial}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Social Sciences
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="social" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            UNIMA.filter(programme => programme.facultyid === 10).length > 0 ?
                                                                UNIMA.filter(programme => programme.facultyid === 10).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/UNIMA#social"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                            </div>

                                            : null

                                    }



                                    {
                                        MUBAS.length > 0 ?

                                            <div className='mb-4 p-6 border shadow-sm border-gray-400'>

                                                {
                                                    MUBAS.length > 0 ?
                                                        <div className=''>
                                                            <h1 className='font-semibold text-lg text-space underline decoration-jonquil'>Malawi University of Business and Applied Sciences (MUBAS)</h1>
                                                            <p className='mb-2 text-gray-600 font-medium'>
                                                                You qualified for the following faculties.
                                                            </p>
                                                        </div>
                                                        : null
                                                }

                                                <div className='mb-4'>

                                                    {
                                                        MUBAS.filter(programme => programme.facultyid === 11).length > 0 ?
                                                            <button
                                                                onClick={this.toggleApplied}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Applied Sciences
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="applied" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUBAS.filter(programme => programme.facultyid === 11).length > 0 ?
                                                                MUBAS.filter(programme => programme.facultyid === 11).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUBAS#apl"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MUBAS.filter(programme => programme.facultyid === 12).length > 0 ?
                                                            <button
                                                                onClick={this.toggleBuilt}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Built Environment
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="built" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUBAS.filter(programme => programme.facultyid === 12).length > 0 ?
                                                                MUBAS.filter(programme => programme.facultyid === 12).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUBAS#bui"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MUBAS.filter(programme => programme.facultyid === 13).length > 0 ?
                                                            <button
                                                                onClick={this.toggleCommerce}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Commerce
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="commerce" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUBAS.filter(programme => programme.facultyid === 13).length > 0 ?
                                                                MUBAS.filter(programme => programme.facultyid === 13).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUBAS#com"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MUBAS.filter(programme => programme.facultyid === 14).length > 0 ?
                                                            <button
                                                                onClick={this.toggleEdu}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Education
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="edu" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUBAS.filter(programme => programme.facultyid === 14).length > 0 ?
                                                                MUBAS.filter(programme => programme.facultyid === 14).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUBAS#edu"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MUBAS.filter(programme => programme.facultyid === 15).length > 0 ?
                                                            <button
                                                                onClick={this.toggleEngineer}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Engineering
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="engineer" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUBAS.filter(programme => programme.facultyid === 15).length > 0 ?
                                                                MUBAS.filter(programme => programme.facultyid === 15).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUBAS#eng"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                            </div>

                                            : null

                                    }


                                    {
                                        MUST.length > 0 ?

                                            <div className='mb-4 p-6 border shadow-sm border-gray-400'>

                                                {
                                                    MUST.length > 0 ?
                                                        <div className=''>
                                                            <h1 className='font-semibold text-lg text-space underline decoration-jonquil'>Malawi Science and Technology (MUST)</h1>
                                                            <p className='mb-2 text-gray-600 font-medium'>
                                                                You qualified for the following faculties.
                                                            </p>
                                                        </div>
                                                        : null
                                                }

                                                <div className='mb-4'>

                                                    {
                                                        MUST.filter(programme => programme.facultyid === 16).length > 0 ?
                                                            <button
                                                                onClick={this.toggleMIT}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Malawi Institute of Technology
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="mit" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUST.filter(programme => programme.facultyid === 16).length > 0 ?
                                                                MUST.filter(programme => programme.facultyid === 16).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUST#mit"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MUST.filter(programme => programme.facultyid === 17).length > 0 ?
                                                            <button
                                                                onClick={this.toggleNDATHA}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Ndatha School of Climate
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="ndatha" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUST.filter(programme => programme.facultyid === 17).length > 0 ?
                                                                MUST.filter(programme => programme.facultyid === 17).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUST#nda"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MUST.filter(programme => programme.facultyid === 18).length > 0 ?
                                                            <button
                                                                onClick={this.toggleMSC}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Academy of Medical Sciences
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="msc" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUST.filter(programme => programme.facultyid === 18).length > 0 ?
                                                                MUST.filter(programme => programme.facultyid === 18).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUST#msc"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MUST.filter(programme => programme.facultyid === 19).length > 0 ?
                                                            <button
                                                                onClick={this.toggleBINGU}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Bingu School of Culture
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="bingu" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MUST.filter(programme => programme.facultyid === 19).length > 0 ?
                                                                MUST.filter(programme => programme.facultyid === 19).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MUST#bin"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                            </div>

                                            : null

                                    }


                                    {
                                        MZUNI.length > 0 ?

                                            <div className='mb-4 p-6 border shadow-sm border-gray-400'>

                                                {
                                                    MZUNI.length > 0 ?
                                                        <div className=''>
                                                            <h1 className='font-semibold text-lg text-space underline decoration-jonquil'>Mzuzu University (MZUNI)</h1>
                                                            <p className='mb-2 text-gray-600 font-medium'>
                                                                You qualified for the following faculties.
                                                            </p>
                                                        </div>
                                                        : null
                                                }

                                                <div className='mb-4'>

                                                    {
                                                        MZUNI.filter(programme => programme.facultyid === 20).length > 0 ?
                                                            <button
                                                                onClick={this.toggleEduMZUNI}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Education
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="edumzuni" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MZUNI.filter(programme => programme.facultyid === 20).length > 0 ?
                                                                MZUNI.filter(programme => programme.facultyid === 20).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MZUNI#edu"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MZUNI.filter(programme => programme.facultyid === 21).length > 0 ?
                                                            <button
                                                                onClick={this.toggleHealth}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Health Sciences
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="health" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MZUNI.filter(programme => programme.facultyid === 21).length > 0 ?
                                                                MZUNI.filter(programme => programme.facultyid === 21).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MZUNI#hea"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MZUNI.filter(programme => programme.facultyid === 22).length > 0 ?
                                                            <button
                                                                onClick={this.toggleHuman}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Humanities
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="human" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MZUNI.filter(programme => programme.facultyid === 22).length > 0 ?
                                                                MZUNI.filter(programme => programme.facultyid === 22).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MZUNI#hum"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MZUNI.filter(programme => programme.facultyid === 23).length > 0 ?
                                                            <button
                                                                onClick={this.toggleSciMZUNI}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Science, Technology and Innovation
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="scimzuni" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MZUNI.filter(programme => programme.facultyid === 23).length > 0 ?
                                                                MZUNI.filter(programme => programme.facultyid === 23).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MZUNI#sci"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MZUNI.filter(programme => programme.facultyid === 24).length > 0 ?
                                                            <button
                                                                onClick={this.toggleEnv}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Environmental Science
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="environment" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MZUNI.filter(programme => programme.facultyid === 24).length > 0 ?
                                                                MZUNI.filter(programme => programme.facultyid === 24).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MZUNI#env"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        MZUNI.filter(programme => programme.facultyid === 25).length > 0 ?
                                                            <button
                                                                onClick={this.toggleTourism}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Tourism
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="tourism" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            MZUNI.filter(programme => programme.facultyid === 25).length > 0 ?
                                                                MZUNI.filter(programme => programme.facultyid === 25).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/MZUNI#tou"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                            </div>

                                            : null

                                    }


                                    {
                                        LUANAR.length > 0 ?

                                            <div className='mb-4 p-6 border shadow-sm border-gray-400'>

                                                {
                                                    LUANAR.length > 0 ?
                                                        <div className=''>
                                                            <h1 className='font-semibold text-lg text-space underline decoration-jonquil'>Lilongwe University of Agriculture and Natural Resources (LUANAR)</h1>
                                                            <p className='mb-2 text-gray-600 font-medium'>
                                                                You qualified for the following faculties.
                                                            </p>
                                                        </div>
                                                        : null
                                                }

                                                <div className='mb-4'>

                                                    {
                                                        LUANAR.filter(programme => programme.facultyid === 26).length > 0 ?
                                                            <button
                                                                onClick={this.toggleAgriculture}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Agriculture
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="agriculture" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            LUANAR.filter(programme => programme.facultyid === 26).length > 0 ?
                                                                LUANAR.filter(programme => programme.facultyid === 26).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/LUANAR#agr"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        LUANAR.filter(programme => programme.facultyid === 27).length > 0 ?
                                                            <button
                                                                onClick={this.toggleDevelopment}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Development Studies
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="development" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            LUANAR.filter(programme => programme.facultyid === 27).length > 0 ?
                                                                LUANAR.filter(programme => programme.facultyid === 27).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/LUANAR#dev"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        LUANAR.filter(programme => programme.facultyid === 28).length > 0 ?
                                                            <button
                                                                onClick={this.toggleFood}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Food and Human Sciences
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="food" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            LUANAR.filter(programme => programme.facultyid === 28).length > 0 ?
                                                                LUANAR.filter(programme => programme.facultyid === 28).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/LUANAR#foo"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        LUANAR.filter(programme => programme.facultyid === 29).length > 0 ?
                                                            <button
                                                                onClick={this.toggleNatural}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Faculty of Natural Sciences
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="natural" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            LUANAR.filter(programme => programme.facultyid === 29).length > 0 ?
                                                                LUANAR.filter(programme => programme.facultyid === 29).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/LUANAR#nat"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                                <div className='mb-4'>

                                                    {
                                                        LUANAR.filter(programme => programme.facultyid === 30).length > 0 ?
                                                            <button
                                                                onClick={this.toggleCollege}
                                                                className='font-semibold text-center py-1 w-full bg-white border-2 rounded-t border-space'
                                                            >
                                                                Natural Resources College
                                                            </button>
                                                            : null
                                                    }

                                                    <div id="college" className='hidden mb-2 p-4 border-b border-l border-r mx-auto border-gray-400 rounded-b'>

                                                        {
                                                            LUANAR.filter(programme => programme.facultyid === 30).length > 0 ?
                                                                LUANAR.filter(programme => programme.facultyid === 30).map(programme => (
                                                                    <p>{programme.name}</p>
                                                                )) : null
                                                        }

                                                        <Link to={"/LUANAR#col"} target={"_blank"} className="text-blue-600 underline text-sm text-center">Learn more about the faculty</Link>

                                                    </div>

                                                </div>

                                            </div>

                                            : null

                                    }



                                </div>

                            </div>

                            :

                            <div>

                                <h1 className="mt-4 mb-6 font-semibold text-gray-700 text-2xl text-center">
                                    You are not eligible for any programmes from any universities.
                                </h1>

                                <p>
                                    Remember that you need a <span className='font-semibold text-red-500'>minimum</span>
                                    of 6 credits (that is grade point 6 for MSCE and grade letter 'C') for
                                    <span className='font-semibold text-red-500'>every subject</span> to be eligible for
                                    a programme from any of the universities.
                                </p>

                            </div>


                }

            </div>

        )

    }

}

export default DisplayProgrammes;
