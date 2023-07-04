import React from "react"
import "./Card.css"

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasShadow: true};
    }

    render() {
        const { hasShadow } = this.state;
        const { greeting } = this.props;

        return (
           <div>
                <label className={hasShadow ? "shadow" : ""}>
                    {greeting ?? "Hi! Test"}
                </label>
           </div>
        );
    }
}


export default Card;

// function Card(props){
//     const { greeting } = props;

//     return (
//         <div>
//              <label className={hasShadow ? "shadow" : ""}>
//                  {greeting ?? "Hi! Test"}
//              </label>
//         </div>
//      );
// }