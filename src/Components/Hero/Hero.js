import React from 'react';
import './Hero.css'
import {
    useState
} from 'react';
import {
    ForwardIcon,
    BackwardIcon
} from '@heroicons/react/24/solid';



const Hero = () => {

    const [count, setCount] = useState(0)
    const [format, setFormat] = useState('img-3.webp')
    const [format2, setFormat2] = useState('img-4.webp')

    const formats = [
        "img-1.png",
        "img-2.jpg",
        "img-3.webp",
        "img-4.webp",
    ]
    const formats2 = [
        "img-4.webp",
        "img-1.png",
        "img-2.jpg",
        "img-3.webp",
    ]
    const next = () => {
        if (count >= 3) {
            setCount(0)
        } else {
            setCount(count + 1)
        }
        setFormat(formats[count])
        setFormat2(formats2[count])
    }

    const pre = () => {
        if (count <= 0) {
            setCount(3)
        } else {
            setCount(count - 1)
        }
        setFormat(formats[count])
        setFormat2(formats2[count])
    }

    return ( <
        >
        
        <h1 className = 'dev-text' > < ForwardIcon className = 'forward' / > Skilled is the mein point < BackwardIcon className = 'forward' / > </h1> <
        section className = 'hero' >
        <
        div className = "first" >
        <
        div className = 'hero-img-1' >
        <
        img src = "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/309937910_1104780803513464_766849961097570284_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aszqX1-tGi4AX9OTzGL&_nc_ht=scontent.fdac157-1.fna&oh=00_AT9jbX9I0nkbbhCLQM26_Nz8s-saqUBya9Cwld1-esNmDw&oe=634B600F"
        
        alt = 'pic' / >
        
        </div> <
        div className = "btn1" >
        <
        button className = 'plus'
        onClick = {
            next
        } > + </button> 
        </div> 
        </div> <
        div className = "second" >
        <
        div className = 'hero-img-2' >
        <
        img src = "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/309937910_1104780803513464_766849961097570284_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aszqX1-tGi4AX9OTzGL&_nc_ht=scontent.fdac157-1.fna&oh=00_AT9jbX9I0nkbbhCLQM26_Nz8s-saqUBya9Cwld1-esNmDw&oe=634B600F"
            
        
        alt = 'pic' / >
        
        </div> <
        div className = "btn2" >
        <
        button className = 'minus'
        onClick = {
            pre
        } > - </button>

        
        </div> 
        </div> 
        </section> 
       </>
    );
};

export default Hero;