import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';

const About=()=>{
    // const designations=["Python Full Stack Developer", "Front End Developer", "Back End Developer", "VLSI enthusiast"]
    const el=useRef(null); // reference to the element where typing happens
    useEffect(()=>{
        const typed=new Typed(el.current,{
            strings:[
                'Python Full Stack Developer',
                'Frontend Developer',
                'Backend Developer',
                'VLSI enthusiast'
            ],
            typeSpeed:80,
            backSpeed:50,
            backDelay:1000,
            loop:true,
        });
        return()=>{
            typed.destroy();
        };
    }, []);
    
    return(
        <div>
            <div className='aboutme'>
                <div>
                    <img src="/Images/i1.jpg" alt="i1" height="262px" width="235px" className="image" />
                </div>
                <div>
                    <h3>
                        <span className='intro'>I'm </span>
                        <span className='designations' ref={el}></span>
                    </h3>
                </div>
            </div>
            <div className='about-content'>
                <p className='about'>I'm a passionate software and hardware developer with a strong foundation spanning both full-stack development and VLSI design. My journey in technology is driven by curiosity and a genuine enthusiasm for tackling complex challenges across different domains. I have comprehensive experience in Python full-stack development, building end-to-end applications from backend APIs to interactive user interfaces. My proficiency in C and C++ has given me deep insights into system-level programming and performance optimization, skills I approach with genuine enthusiasm and attention to detail.</p>
                <p className='about'>As a VLSI enthusiast, I've delved into the intricacies of digital design and verification, gaining hands-on experience with industry-standard protocols including APB and AXI, along with foundational knowledge of AHB protocol. My hardware description language skills encompass both Verilog and SystemVerilog, enabling me to design, implement, and verify digital systems effectively. This combination of software and hardware expertise allows me to bridge the gap between different technological domains.</p>
                <p className='about'>I thrive on continuous learning and readily embrace new technologies and methodologies. Whether it's exploring emerging software frameworks, diving deeper into advanced VLSI concepts, or understanding the intersection of software and hardware development, I approach each learning opportunity with enthusiasm and dedication. My diverse skill set allows me to appreciate the full spectrum of technology development, making me a versatile contributor to multidisciplinary projects.</p>
            </div>
        </div>
    );
}

export default About;