import { useEffect, useState } from "react";
import "./style.css";
import Questions from "./components/Questions";
import Other from "./components/Other";

function App(){
  window.location.replace("#");
  const [pageQ, setPageQ] = useState(false);

  const [quests, setQuests] = useState();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setQuests(data));
    }, []);
  
  if(!quests){
    return <div className="loading--screen">Loading...</div>
  }
  else{
    return(
      <>
          {pageQ ?
            <div>
              <Other />
              {quests.results.map((result, k) => (
                <Questions
                  key={k}
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
      </>
    )
  }
}

export default App;