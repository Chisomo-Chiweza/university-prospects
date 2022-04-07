import Radium, { StyleRoot } from 'radium';
import { slideInUp, slideInRight } from 'react-animations';
import MainButton from "./utilities/MainButton";


export default function Home() {

    const styles = {

        slideInUp: {
            animation: 'x 0.5s',
            animationName: Radium.keyframes(slideInUp, 'slideInUp')
        },

        slideInRight: {
            animation: 'x 0.7s',
            animationName: Radium.keyframes(slideInRight, 'slideInRight')
        }

    }

    return (

        <StyleRoot>

            <div className="overflow-auto flex flex-col items-center mt-32" style={styles.slideInUp}>

                <div className="flex flex-col items-center">

                    <div className="mx-auto pb-8">

                        <h1 className="mb-4 text-center font-bold text-4xl md:text-7xl text-space">
                            University <span className="text-jonquil">Prospects</span>
                        </h1>

                        <p className="text-center text-xl text-gray-500 mx-4">
                            is designed to help future applicants to Malawian universities make informed decisions
                            about which programmes to apply to by providing a platform to see which programmes applicants
                            are most eligible for given their current academic performance.
                        </p>

                    </div>

                    <MainButton />

                </div>

            </div>

        </StyleRoot>

    );
}