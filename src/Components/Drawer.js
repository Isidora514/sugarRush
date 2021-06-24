import React from "react";
import { Drawer, List,  ListItem, ListItemText } from "@material-ui/core";



export default function MUIDrawer() {

  const itemList = ["HOME", "ABOUT", "MEDIA", "CONTACT"]
  return (
    <Drawer className="drawer" anchor='right' open>
      <List className='drawerList blue-bg'>
        {itemList.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
  