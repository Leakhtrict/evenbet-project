import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

import './StartButton.css';

interface IStartButton {
    isButtonDisabled: boolean;
    setButtonDisabled: Dispatch<SetStateAction<boolean>>
}

export const StartButton = ({ isButtonDisabled, setButtonDisabled }: IStartButton): JSX.Element => {
    const [buttonText, setButtonText] = useState<string | number>('START');

    const triggerCircle = useCallback((): HTMLElement => {
        const circle = document.querySelector('.circle') as HTMLElement;
        const block2 = document.querySelector('.block2') as HTMLElement;

        circle!.style.visibility = 'visible';

        const circleRect = circle!.getBoundingClientRect();
        const block2Rect = block2!.getBoundingClientRect();

        const translateY = block2Rect.y - circleRect.y;
        const translateX = block2Rect.x - circleRect.x;

        circle!.style.transform = `translateX(${translateX+25}px) translateY(${translateY}px)`;

        return circle;
    }, []);

    const onClick = useCallback(() => {
        setButtonDisabled(true);
        setButtonText(5);
        const circle = triggerCircle();

        const interval = setInterval(() => {
            setButtonText((prevState) => +prevState-1)
        }, 1000);

        setTimeout(() => {
            setButtonDisabled(false);
            setButtonText('START');
            clearInterval(interval);
            circle.style.visibility = 'hidden';
            circle.style.transform = 'none';
        }, 5000);
    }, [triggerCircle, setButtonDisabled]);

    return(
        <button className="start-button" disabled={isButtonDisabled} onClick={onClick}>{buttonText}</button>
    )
}
