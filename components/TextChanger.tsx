"use client"
import React, { useState, useEffect } from "react";

const TextChanger: React.FC = () => {
    const texts: string[] = ["Anandhu Unnimadhavan", "Anandhu Unnimadhavan", "Anandhu Unnimadhavan"];
    const [currentText, setCurrentText] = useState<string>("");
    const [endValue, setEndValue] = useState<number>(0);
    const [isForward, setIsForward] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const fullText = texts[index];

            if (endValue > 0) {
                setCurrentText(fullText.substring(0, endValue));
            }

            if (isForward) {
                setEndValue((prev) => prev + 1);
                if (endValue > fullText.length + 5) {
                    setIsForward(false);
                }
            } else {
                setEndValue((prev) => prev - 1);
                if (endValue <= 1) {
                    setIsForward(true);
                    setIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, 70);

        return () => clearInterval(intervalId);
    }, [endValue, isForward, index, texts]);

    return (
        <div className=" transition ease duration-300 bg-clip-text text-foreground">
            {currentText}
        </div>
    );
};

export default TextChanger;
