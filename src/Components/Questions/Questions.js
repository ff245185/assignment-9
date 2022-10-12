import './Questions.css'
import {
    EyeIcon
} from '@heroicons/react/24/solid';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Questions = ({
    questions,
    extraWorksTrue,
    extraWorksFalse
}) => {

    const {
        options,
        id,
        question,
        correctAnswer
    } = questions


    const currect = (option, e) => {
        if (correctAnswer === option) {
            ansBoot(true)
            extraWorksTrue(true)
            e.setAttribute('class', 'labelText');

        } else {
            extraWorksTrue(false)
            ansBoot(false)
        }
    }
    const ansBoot = (props) => {
        toast(props === true ? "Correct Answer" : "Incorrect Answer", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const eyePower = () => {
        toast("Answer Is: " + correctAnswer, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return ( <
        div className = 'questionGroup' >
        <
        ToastContainer / >
        <
        p > {
            question
        } </p>

        <
        EyeIcon onClick = {
            eyePower
        }
        className = 'eye' / >
        <
        div className = 'question' > {
            options.map(option => {

                return <div >
                    <
                    label id = 'singleQuestion'
                key = {
                    id
                }
                onClick = {
                        (e) => {
                            currect(option, e.target)
                            extraWorksTrue()
                            extraWorksFalse(false)
                        }
                    } > {
                        option
                    } </label> 
                    </div>
            })
        }

        
        </div> 
        </div>
    );
};

export default Questions;