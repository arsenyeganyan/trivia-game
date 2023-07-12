import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons";

function Questions(props){
    const [answer, setAnswer] = useState(false);
    const [amount, setAmount] = useState(0);
    localStorage.setItem("amount", amount);

    //creating the answer polls
    let ansArr = [props.correct_answer];
    for(let i = 0; i < props.incorrect_answers.length; i++){
        ansArr.push(props.incorrect_answers[i]);
    }
    const shuffledArr = ansArr.sort(() => {
        return Math.random() - 0.5;
    });

    if(amount == 5){
        console.log("game over or won, who knows...");
        window.location.replace("#end");
    }

    return(
        <div className="questions">
            <div className="category">
                Category: {props.category}
            </div>
            <div className="difficulty">
                DIFFICULTY: {props.difficulty.toUpperCase()}
            </div>
            <div className="question">
                <h3 className="question--text">{props.question}</h3>
            </div>
            <div className="answers">
                    {shuffledArr.map((p, index) => (
                        <section 
                            key={index}
                            onClick={answer ? null : () => {
                                setAmount(parseInt(
                                    localStorage.getItem("amount")) + 1);
                                localStorage.setItem("amount", amount);
                                setAnswer(true);
                            }}
                            className={answer ? (p === props.correct_answer ? 
                                "right" : "wrong") : "choice"}
                        >
                            {p}
                        </section>
                    ))}
            </div>
            {(amount == 5) && (
                <div className="game--over" id="end">
                    <FontAwesomeIcon icon={faFaceDizzy} />
                    If you won congrats! If not, refresh and try again!
                </div>
            )}
        </div>
    )
}

export default Questions;