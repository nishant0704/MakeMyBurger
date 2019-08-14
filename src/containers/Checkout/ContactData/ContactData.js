import React,{ Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";


class ContactData extends Component {
  state={
    name:'',
    email:'',
    address:{
      street:'',
      pinCode:''
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
  }


  render(){
    return(
      <div className={classes.ContactData}>
        <h4>Enter your Details</h4>
        <form>
          <input className={classes.ContactInput} type="text" name="name" placeholder="Your Name"/>
          <input className={classes.ContactInput} type="email" name="email" placeholder="Your Email"/>
          <input className={classes.ContactInput} type="text" name="street" placeholder="Your Street"/>
          <input className={classes.ContactInput} type="text" name="pincode" placeholder="Pin Code"/>
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
