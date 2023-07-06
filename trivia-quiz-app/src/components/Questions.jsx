import { useEffect, useState, useMemo } from "react";

function Questions(props){
    const [answer, setAnswer] = useState(false);
    
    //creating the answer polls
    let ansArr = [props.correct_answer];
    for(let i = 0; i < props.incorrect_answers.length; i++){
        ansArr.push(props.incorrect_answers[i]);
    }

    const shuffledArr = ansArr.sort(() => {
        return Math.random() - 0.5;
    });

    //*what needs to be done*
    //1 - color changes when the answer is clicked
    //2 - track the amount of correct and 
        //incorrect answer and then display
    //3 - figure out a good game ending

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
                    {
                        shuffledArr.map((p, index) => {
                            return(
                                <section 
                                    key={index}
                                    onClick={answer ? null : () => setAnswer(!answer)}
                                    className={answer ? (p === props.correct_answer  ? "right" : "wrong")
                                        : "choice"}
                                >
                                    {p}
                                </section>
                            );
                        })
                    }
            </div>
        </div>
    )
}

export default Questions;