import { List, ListItem, Box } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { ReactComponent as EmailPhone } from "../assets/images/EmailPhone.svg"
import { ReactComponent as Shipping } from "../assets/images/Shipping.svg"
import { ReactComponent as Invoice } from "../assets/images/Invoice.svg"

const Contact = ({ allOrders }) => {
  const [contactDetails, setContactDetails] = useState([])
  useEffect(() => {
    if (allOrders) {
      const { name, email, phone, street,city, areacode, country, } = allOrders
      const firstName = name.split(" ")[0]
      setContactDetails([
        {
          heading: "Contact " + firstName,
          contact_line_1: email,
          contact_line_2: phone,
          icon: <EmailPhone />,
        },
        {
          heading: "Shipping Address",
          contact_line_1: street,
          contact_line_2: areacode + " " + city + ", " + country,
          icon: <Shipping />,
        },
        {
          heading: "Invoice Address",
          contact_line_1: street,
          contact_line_2: areacode + " " + city + ", " + country,
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
