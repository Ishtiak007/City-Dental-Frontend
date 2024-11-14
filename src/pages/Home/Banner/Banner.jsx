/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import image1 from '../../../assets/images/dental1.jpg'
import image2 from '../../../assets/images/dental2.jpg'
import image3 from '../../../assets/images/dental3.jpg'
import image4 from '../../../assets/images/dental4.jpg'
import image5 from '../../../assets/images/dental5.jpg'
import image6 from '../../../assets/images/dental6.jpg'
import image7 from '../../../assets/images/dental7.jpg'
import '../Banner/Banner.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaTooth } from "react-icons/fa";


const Banner = () => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);
    const nextBtnRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 4000;

    let runTimeOut;
    let runNextAuto;

    useEffect(() => {
        const showSlider = (type) => {
            if (!listRef.current || !carouselRef.current) return;
            const sliderItemsDom = listRef.current.querySelectorAll('.item');

            if (type === 'next') {
                listRef.current.appendChild(sliderItemsDom[0]);
                carouselRef.current.classList.add('next');
            } else {
                listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                carouselRef.current.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselRef.current.classList.remove('next');
                carouselRef.current.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextBtnRef.current.click();
            }, timeAutoNext);

            resetTimeAnimation();
        };

        const resetTimeAnimation = () => {
            if (runningTimeRef.current) {
                runningTimeRef.current.style.animation = 'none';
                runningTimeRef.current.offsetHeight; /* trigger reflow */
                runningTimeRef.current.style.animation = 'runningTime 4s linear 1 forwards';
            }
        };

        resetTimeAnimation();

        if (nextBtnRef.current) {
            nextBtnRef.current.onclick = () => showSlider('next');
        }
        if (carouselRef.current) {
            carouselRef.current.querySelector('.prev').onclick = () => showSlider('prev');
        }

        runNextAuto = setTimeout(() => {
            if (nextBtnRef.current) nextBtnRef.current.click();
        }, timeAutoNext);

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

    const slides = [
        { image: image1, name: 'WHERE SMILES FEEL GREAT' },
        { image: image2, name: 'FOCUSED ON YOUR SMILE' },
        { image: image3, name: 'EXCELLENCE IN ORAL HEALTH' },
        { image: image4, name: 'HEALTHY TEETH, HAPPY SMILES' },
        { image: image5, name: 'CARING DENTISTRY FOR ALL' },
        { image: image6, name: 'BRIGHT SMILES, HEALTHY LIVES' },
        { image: image7, name: 'YOUR TRUSTED DENTAL EXPERTS' },
    ];

    return (
        <div>
            <div className="carousel" ref={carouselRef}>
                <div className="list" ref={listRef}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{
                                background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.15738795518207283) 100%, rgba(0,212,255,1) 100%), url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="content">
                                <div className="title text-blue-700">CITY DENTAL</div>
                                <div className="text-xl my-5 flex items-center gap-2">{slide.name} <FaTooth /></div>
                                <div className="des">
                                    Caring for your smile with professional expertise, advanced techniques, and a friendly patient experience.
                                </div>
                                <div className="btn-subscribe">
                                    <button>Register Now</button>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next and Previous buttons */}
                <div className="arrows">
                    <button className="prev flex justify-center items-center"><IoIosArrowBack /></button>
                    <button className="next flex justify-center items-center" ref={nextBtnRef}><IoIosArrowForward /></button>
                </div>

                {/* Time running indicator */}
                <div className="timeRunning" ref={runningTimeRef}></div>
            </div>
        </div>
    );
};

export default Banner;