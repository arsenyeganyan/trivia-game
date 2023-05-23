import React, { useState } from "react";
import "./style.css";
import Questions from "./components/Questions";
import Other from "./components/Other";

function App(){
  //switching from the title page to the main(q) page
  const [pageQ, setPageQ] = useState(false);

  //requesting data
  const [quests, setQuests] = useState();
  React.useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setQuests(data));
    }, []);
  
  if(typeof quests === undefined){
    return <div className="loading--screen">Loading...</div>
  }
  else{
    return(
      <div>
          {pageQ ?
            <div>
              <Other/>
              {quests.results.map((result) => (
                <Questions
                  category={result.category}
                  difficulty={result.difficulty}
                  question={result.question}
                  correct_answer={result.correct_answer}
                  incorrect_answers={result.incorrect_answers}
                />
              ))}
            </div>
          :
            <div className="start--page">
                <h1 className="start--title">
                    Fun Trivia by Arsen
                </h1>
                <button className="start--btn" onClick={() => setPageQ(!pageQ)}>
                    Start Trivia
                </button>
  
                <h3 className="disc">
                  When you are ready, press the button above to start.
                </h3>
            </div>
        }
      </div>
    )
  }
}

export default App;