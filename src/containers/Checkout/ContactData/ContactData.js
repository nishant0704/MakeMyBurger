import React,{ Component } from "react";
import button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";


class ContactData extends Component {
  render(){
    state={
      name:'',
      email:'',
      address:{
        street:'',
        pinCode:''
      }
    }
    return(
      <div className={classes.ContactData}>
        <h4>Enter your Details</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name"/>
          <input type="email" name="email" placeholder="Your Email"/>
          <input type="text" name="street" placeholder="Your Street"/>
          <input type="text" name="pincode" placeholder="Pin Code"/>
          <button btnType="Success">ORDER</button>
        </form>
      </div>
    );
  }
}

export default ContactData;
