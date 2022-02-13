import React from 'react'

export default function About(props) {
    return (
        <div>
            <div className="accordion accordion-flush container my-4" id="accordionFlushExample">
                <h1 className='my-3'>About Us</h1>
                <div className={`accordion-item bg-${props.mode}`}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" >
                            Text Utility
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">We are providing you with a text utility that you can use in your daily life to mainpulate your text efficiently.</div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Our Features
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">We provide you with many features like CONVERTING YOUR TEXT TO UPPERCASE, converting your text to lowercase, Capitalizing First Letter Of Each Word, removing extra spaces from the text.</div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Free of Cost
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Our utility is completely free to use. We do not charge any kind of charges for using the utility you can use it for as much time as you want and as many times as you want without worrying about the charges.</div>
                    </div>
                </div>
            </div>
            <center><hr style={{width: "70vw"}}/></center>
            <p className='lead container my-2 text-center'>This utility is developed by Prathamesh Patil</p>
        </div>
    )
}
