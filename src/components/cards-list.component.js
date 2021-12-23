import React, {useState, useEffect} from 'react';
import  { Component } from "react";
import CardDataService from "../services/card.service";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function CardsList(props) {

    const [state, setState] = useState({
        cards: [],
        currentCard: null,
        currentIndex: -1,
      });

    function retrieveCard() {
        CardDataService.getAll()
          .then(response => {
            setState({
              cards: response.data
            });
            //console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

        useEffect(() => {
        retrieveCard();
           
       }, []);


       function deleteCard(e,id) {   
           e.preventDefault();
           //alert(id); 
        CardDataService.delete(id)
          .then(response => {
            
            retrieveCard();
            //this.props.history.push('/cards')
          })
          .catch(e => {
            console.log(e);
          });
      }

      const updateCard = (e, id) => {
        alert(id);
        CardDataService.update( state.currentCard.id, state.currentCard)
         .then(response => {
                  console.log(response.data);
                  setState({
                    message: "The Card was updated successfully!"
                  });
                })

      };

    //   function updateCard(e, id) {
    //     e.preventDefault();
    //     alert(id); 
        
    //     CardDataService.update(
    //       state.currentCard.id,
    //       state.currentCard
    //     )
    //       .then(response => {
    //         console.log(response.data);
    //         setState({
    //           message: "The Card was updated successfully!"
    //         });
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   }





    return (
      <div className="ml-5 mr-5">

           
            {state &&
            state.cards.map((card, index) => (
                <div className="row border-bottom pb-2 pt-2" key={index}>
                    <div  className="col-sm-3">{card.cardName}</div>
                    <div className="col-sm-3">{card.cardNumber}</div>
                    <div className="col-sm-3">{card.cardExpiration}</div>
                    <div className="col-sm-3"><Button
                    style={{ marginLeft: "auto" }}
                  variant="outline-danger"
                  onClick={(e) => deleteCard(e, card.id)}
                >
                  Delete
                </Button>
                <Button
                    style={{ marginLeft: "auto" }}
                  variant="outline-danger"
                  onClick={(e) => updateCard(e, card.id)}
                >
                  Update
                </Button>
                 </div>
                </div>
                 ))}

           


        {/* <ul className="list-group">
          {state &&
            state.cards.map((card, index) => (
              <li style={{ display: "flex" }} className={"list-group-item "} key={index}>
                {card.cardName}  <br />
                <span className="ml-4  pl-2"> {card.cardNumber} </span>
                <span className="ml-4  pl-2"> {card.cardExpiration} </span>
                
                <Button
                    style={{ marginLeft: "auto" }}
                  variant="outline-danger"
                  onClick={(e) => deleteCard(e, card.id)}
                >
                  Delete
                </Button> */}

                {/* <Button variant="outline-danger" onClick={e => props.onUpdateClick(e, card)}>Update</Button> */}
              {/* </li>
            ))}
        </ul> */}
      </div>
    );
}

export default CardsList;
