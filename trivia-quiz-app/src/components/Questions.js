import React from "react";

export default function Questions(props){
    return(
        <div className="questions">
            <h2 className="q--title">
                This will be the question
            </h2>

            <section className="ans1">a</section>
            <section className="ans2">s</section>
            <section className="ans3">d</section>
            <section className="ans4">f</section>

            <h4>{props.value}</h4>
            {/* <h4>{props.ex}</h4> */}
        </div>
    )
}