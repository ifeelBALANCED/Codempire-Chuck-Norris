import React, {useRef, useState, useEffect, FC} from "react";
import {useStore} from "effector-react";
import {$getJokeStatus} from "../Categories/Category/models";
import {Box, Button} from "@chakra-ui/react";

export const Voicy: FC = () => {
    const speech = useRef<SpeechSynthesisUtterance>();
    const [supported, setSupported] = useState(true);
    const [speaking, setSpeaking] = useState(false);
    const [autoPlay,] = useState(false);
    const [lang,] = useState("en-US");
    const {joke} = useStore($getJokeStatus)

    const speak = () => {
        if (speech.current) {
            speech.current.text = joke;
            speech.current.lang = lang;
            window.speechSynthesis.speak(speech.current);
        }
        setSpeaking(true);
    };

    useEffect(() => {
        if ("speechSynthesis" in window) {
            speech.current = new SpeechSynthesisUtterance();
            speech.current.onend = () => setSpeaking(false);
        } else {
            setSupported(false);
        }
        if (supported && autoPlay) {
            speak();
        }
    }, []);

    const stop = () => {
        window.speechSynthesis.cancel();
    };

    return (
        <Box mt="20px">
            <Button
                colorScheme="teal"
                disabled={speaking}
                onClick={speak}
            >
                Speak
            </Button>
            <Button
                colorScheme="red"
                disabled={!speaking}
                onClick={stop}
            >
                Stop
            </Button>
        </Box>
    );
};
