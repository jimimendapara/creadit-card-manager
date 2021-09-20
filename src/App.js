import CreditCardForm from "./components/CreditCardForm";
//import { Switch, Route, Link } from "react-router-dom";
import {useState} from 'react';



//import AddCard from "./components/add-card.component";
//import Card from "./components/card.component";
import CardsList from "./components/cards-list.component";

function App() {
const [cardData, setCardData] = useState();
console.log(cardData +"thisis app");

//const [setList, list] = useState([])


function fillForm(e, cardData){
      e.preventDefault();
      setCardData ({
        cardData: cardData
      } );
      console.log("card data coming from update button",cardData);
}

  return (
    <div >
     
      <CreditCardForm sendCard={cardData}  onAddCard={fillForm}/>
      <CardsList onUpdateClick={fillForm} />

      <div>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/cards"} className="nav-link">
                Cards
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav> */}

        <div className="container mt-3">
          {/* <Switch>
            <Route exact path={["/", "/cards"]} component={CardsList} />
            <Route exact path="/add" component={AddCard} />
            <Route path="/tutorials/:id" component={Card} />
          </Switch> */}
        </div>
      </div>

    </div>
  );
}

export default App;
