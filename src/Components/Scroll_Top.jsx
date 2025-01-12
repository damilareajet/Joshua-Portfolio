import { useState, useEffect } from 'react'; 
import { FaArrowCircleUp } from 'react-icons/fa'; 
import styled from 'styled-components'; 

const Scroll_Top = () => { 
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop; 
            setVisible(scrolled > 300);
        };
        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    const scrollToTop = () => { 
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth'
        });
    }; 

    return ( 
        <Button className='FaArrowCircleUp' onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
            <FaArrowCircleUp />
        </Button> 
    ); 
}; 

export default Scroll_Top; 

export const Button = styled.div`
    position: fixed; 
    width: 50px; 
    height: 50px; 
    bottom: 70px; 
    right: 40px; 
    font-size: 3rem; 
    z-index: 1; 
    cursor: pointer; 
    color: white;
    display: ${({ visible }) => (visible ? 'block' : 'none')};

    @media (max-width: 768px) {
        width: 40px; 
        height: 40px; 
        bottom: 30px; 
        right: 30px; 
        font-size: 2.5rem;
    }

    @media (max-width: 576px) {
        width: 30px; 
        height: 30px; 
        bottom: 20px; 
        right: 20px; 
        font-size: 2rem;
    }
`;
