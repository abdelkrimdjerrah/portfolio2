import { useRef, useState, useEffect } from "react";

interface IText {
  texts: string[];
}
export const TypingEffect = ({ texts }: IText) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const typingElementRef = useRef<HTMLHeadingElement>(null);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBeforeDelete = 1000;
  const delayBeforeType = 500;

  useEffect(() => {
    let currentText = "";
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimeout: NodeJS.Timeout | null = null;
    let deletingTimeout: NodeJS.Timeout | null = null;

    const typeText = () => {
      if (currentCharIndex <= texts[currentTextIndex].length) {
        currentText = texts[currentTextIndex].slice(0, currentCharIndex);
        typingElementRef.current!.textContent = currentText;
        currentCharIndex++;
        typingTimeout = setTimeout(typeText, typingSpeed);
      } else if (!isDeleting) {
        isDeleting = true;
        deletingTimeout = setTimeout(deleteText, delayBeforeDelete);
      }
    };

    const deleteText = () => {
      if (currentCharIndex >= 0) {
        currentText = texts[currentTextIndex].slice(0, currentCharIndex);
        typingElementRef.current!.textContent = currentText;
        currentCharIndex--;
        deletingTimeout = setTimeout(deleteText, deletingSpeed);
      } else {
        isDeleting = false;
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Switch to the next text
        typingTimeout = setTimeout(typeText, delayBeforeType);
      }
    };

    typingTimeout = setTimeout(typeText, typingSpeed);

    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
      if (deletingTimeout) clearTimeout(deletingTimeout);
    };
  }, [currentTextIndex]);

  return (
    <h1
      ref={typingElementRef}
      id="typing-effect"
      className="typing-effect"
    ></h1>
  );
};
