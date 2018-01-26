import React from "react"

export class Tester extends React.Component{
    render(){

        {/*Complex codes can be entered here. NOT in render*/}
        let content = "";
        if(true){ content = <p>"I am the content!" </p>; }

        return (
            <div>
                <p> In Home component</p>
                {/*output dynamic content*/}
                {2+2}

                {/*Can use ternary expressions*/}
                <p> {5+1 == 6 ? "Yes, it's 6" : "No"} </p>>

                {/*Print the content variable assigned over render of this block*/}
                {content}
            </div>
        );
    }
}