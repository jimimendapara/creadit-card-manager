import { useState } from "react";
import validateInfo from "./validateInfo";
import CardDataService from "./services/card.service";
//import CardsList from "./components/cards-list.component";


const useForm = (props) => {
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    /* cardType: '', */
    cardExpiration: "",
    cardSecurityCode: "",
    /* cardPostalCode: '', */
    focus: "",
  });

  const [errors, setErrors] = useState({});
  

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === "cardSecurityCode" ? "cvc" : e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));

    if (validateInfo(values).variant === "success") {
      CardDataService.create(values)
        .then((response) => {
            window.location.reload();
          //console.log(response.data);
         
        //   props.onAddCard(response.data);
         
        })
        .catch((e) => {
          console.log(e);
        });
    }

    
    // CardDataService.getAll().then(response => {
    //     setState({
    //       cards: response.data
    //     });
    //     console.log("Data Listed");
    //   })

    // const retrieveCard = () => {
    //     CardDataService.getAll()
    //       .then(response => {
    //         setState({
    //           cards: response.data
    //         });
    //         //console.log(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   };


  };


  

  return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm;
