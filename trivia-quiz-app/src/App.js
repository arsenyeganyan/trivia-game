import React from "react";
import "./style.css";
import Questions from "./components/Questions";

export default function App(){
  
  //switching the page from start to questions
  const [pageQ, setPageQ] = React.useState(false);

  function pageSetter(){
    setPageQ(true);
  }

  const [quests, setQuests] = React.useState({});

  //requesting trivia from the api
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuests(data));

    console.log(quests);
  }, [pageQ]);
  
  const randQ = Math.ceil(Math.random() * 5);
  const dataReturn = JSON.stringify(quests.results[randQ].question, null, 2);
  console.log(dataReturn);

  return(
    <main>
      {pageQ ?
        
        <Questions 
          // value={dataReturn}
        />
        
        :

        <div className="start--page">
              <h1 className="start--title">
                  Fun Trivia by Arsen
              </h1>

              <button className="start--btn" onClick={pageSetter}>
                  Start Trivia
              </button>

              <h3 className="disc">
                When you are ready, press the button to start
              </h3>
          </div>
      }

    </main>
  )
}
