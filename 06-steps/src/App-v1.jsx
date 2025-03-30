import { useState } from 'react';
import './App.css';

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
];

function App() {
    return (
        <div>
            <Steps />
        </div>
    );
}

function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) setStep((step) => step - 1);
    }
    function handleNext() {
        if (step < 3) setStep((step) => step + 1);
    }
    return (
        <>
            <button className='close' onClick={() => setIsOpen((s) => !s)}>
                &times;
            </button>
            {isOpen && (
                <div className='steps'>
                    <div className='numbers'>
                        <div className={step === 1 ? 'active' : ''}>1</div>
                        <div className={step === 2 ? 'active' : ''}>2</div>
                        <div className={step === 3 ? 'active' : ''}>3</div>
                    </div>

                    <StepMessage step={step}>{messages[step - 1]}</StepMessage>

                    <div className='buttons'>
                        <Button
                            textColor='#fff'
                            bgColor='#7950f2'
                            onClick={handlePrevious}
                        >
                            <span>👈</span> Previous
                        </Button>
                        <Button
                            textColor='#fff'
                            bgColor='#7950f2'
                            onClick={handleNext}
                        >
                            Next <span>👉</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

function StepMessage({ step, children }) {
    return (
        <div className='message'>
            <h3>Step {step}:</h3>
            <p>{children}</p>
        </div>
    );
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            onClick={onClick}
        >
            <span>{children}</span>
        </button>
    );
}

export default App;
