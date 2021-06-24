import React, { Component, useState } from 'react';
import { Drawer, List,  ListItem, ListItemText, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';



export default function MUIDrawer() {

  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  const list = () => (
    <div className="drawerList blue-bg" onClick={toggleDrawer(false)}>
      <List className="listItem">
        <ListItem  button><a href="/">HOME</a></ListItem>
        <ListItem  button><a href="/about">ABOUT</a></ListItem>
        <ListItem  button><a href="/media">MEDIA</a></ListItem>
        <ListItem  button><a href="/contact">CONTACT</a></ListItem>
      </List>
    </div>
  )

  return (
    <div>
    <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
    <Drawer className="drawer^" 
      anchor={'right'} 
      open={state}  
      onClose={toggleDrawer(false)} 
      >

      {list()}
    </Drawer>
    </div>
  )
}
  