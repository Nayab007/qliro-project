import { List, ListItem, Box } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { ReactComponent as Shipping } from "../assets/images/Shipping.svg"
import { ReactComponent as EmailPhone } from "../assets/images/EmailPhone.svg"
import { ReactComponent as Invoice } from "../assets/images/Invoice.svg"

const Contact = ({ allOrders }) => {
  const [contactDetails, setContactDetails] = useState([])
  useEffect(() => {
    if (allOrders) {
      const { email, phone, street, pincode, country, city, name } = allOrders
      const firstName = name.split(" ")[0]
      setContactDetails([
        {
          heading: "Contact " + firstName,
          contact_line_1: email,
          contact_line_2: phone,
          icon: <Shipping />,
        },
        {
          heading: "Shipping Address",
          contact_line_1: street,
          contact_line_2: pincode + ", " + city + ", " + country,
          icon: <EmailPhone />,
        },
        {
          heading: "Invoice Address",
          contact_line_1: email,
          contact_line_2: pincode + ", " + city + ", " + country,
          icon: <Invoice />,
        },
      ])
    }
  }, [allOrders])
  return (
    <Box display="flex" justifyContent="space-around" className="orders_contact" data-testid="orders_contact">
      {contactDetails &&
        contactDetails.map((element, i) => {
          return (
            <List key={i}>
              <ListItem className="orders_contact_title">
                <span className="orders_contact_title_icon"> {element.icon} </span>
                {element.heading}
              </ListItem>
              <ListItem className="orders_contact_subtitle"> {element.contact_line_1}</ListItem>
              <ListItem className="orders_contact_subtitle"> {element.contact_line_2}</ListItem>
            </List>
          )
        })}
    </Box>
  )
}

export default Contact
