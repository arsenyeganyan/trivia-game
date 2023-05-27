import { useState } from "react";

function Questions(props){
    //filling the answer polls
    let ansArr = [props.correct_answer];
    for(let i = 0; i < props.incorrect_answers.length; i++){
        ansArr.push(props.incorrect_answers[i]);
    }

    const shuffledArr = ansArr.sort(() => {
        return Math.random() - 0.5;
    });

    const [answer, setAnswer] = useState(false)
    const [right, setRight] = useState([]);
    
    function Setting(){
        setRight([
            ...right,
            right.push(p)
        ])

        let color;
        if(right.includes(props.correct_answer)){
            color = true;
        }
        else{ color = false }
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
                    {
                        shuffledArr.map((p, index) => (
                            <section 
                                className={  }
                                key={index}
                                onClick={setting}>
                                    {p}
                            </section>
                        ))
                    }
            </div>
        </div>
    )
}

export default Questions;