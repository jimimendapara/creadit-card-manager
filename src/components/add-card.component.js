import React, { useState } from 'react'
import CreditCardForm from './CreditCardForm';
import CardsList from './cards-list.component';


function AddCard(props) {

    // const [card, setCard] = useState();
    
    //     const myId = props.thisCardId.value;
    //     console.log(myId);

    return (
        <div>
            <CreditCardForm  />
        </div>
    )
}

export default AddCard
