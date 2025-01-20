import React from "react";
import { motion } from "framer-motion";

function TypewriterEffect({ text, onComplete }) {
    const [displayedText, setDisplayedText] = React.useState("");
    const [isCompleted, setIsCompleted] = React.useState(false);

    React.useEffect(() => {
        if (!isCompleted) {
            const handleType = () => {
                if (displayedText.length < text.length) {
                    setDisplayedText((prev) => text.slice(0, prev.length + 1));
                } else {
                    setIsCompleted(true);
                    if (onComplete) onComplete();
                }
            };

            const typingInterval = setTimeout(handleType, 30); 
            return () => clearTimeout(typingInterval);
        }
    }, [displayedText, text, isCompleted, onComplete]);

    return (
        <span>
            {displayedText}
            {!isCompleted && <span className="blinking-cursor">|</span>}
        </span>
    );
}

function Home() {
    return (
        <>
            <div className="bg-slate-800 flex flex-col min-h-screen">
                <div className="container grid grid-cols-2 text-white flex-grow">
                    <div className="flex flex-col gap-4 items-center justify-center py-5 mr-10">
                        <h2 className="text-5xl font-bold">
                            Seja Bem-Vindo!
                        </h2>

                        <div className="text-lg self-start ml-12 font-bold">
                            <TypewriterEffect
                                text="Aqui você pode expressar seus pensamentos, opiniões e histórias únicas." onComplete={undefined}/>
                                <span className="blinking-cursor"></span>
                        </div>
                        <div className="flex justify-around gap-4 mt-4">
                            <motion.div
                                className="bg-slate-900 relative rounded font-bold text-white border-white border-solid border-2 py-2 px-4 cursor-pointer flex items-center justify-center group hover:bg-violet-500 transition-colors duration-300"
                                whileHover={{
                                    scale: 1.1,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                            >
                                <span className="transition-all duration-500 ease-in-out transform group-hover:translate-x-10 group-hover:opacity-0">
                                    Nova Postagem
                                </span>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    ✍🏻
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center mr-15">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className="w-2/3 object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
