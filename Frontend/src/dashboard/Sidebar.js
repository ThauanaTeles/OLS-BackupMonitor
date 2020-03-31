import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';

import '../style/styles.css';


function Sidebar({ items }) {
    return (
        <div id="sidebar">
            <List disablePadding dense>
                {items.map(({ label, name, items: subItems, ...rest }) => {
                    return (
                    <React.Fragment key={name}>
                        <ListItem style={{ paddingLeft: 18 }} button {...rest}>
                        <ListItemText>{label}</ListItemText>
                        </ListItem>
                        {Array.isArray(subItems) ? (
                        <List disablePadding dense>
                            {subItems.map((subItem) => {
                            return (
                                <ListItem
                                key={subItem.name}
                                style={{ paddingLeft: 36 }}
                                button
                                dense
                                >
                                <ListItemText>
                                    <span className="sidebar-subitem-text">
                                    {subItem.label}
                                    </span>
                                </ListItemText>
                                </ListItem>
                            )
                            })}
                        </List>
                        ) : null}
                    </React.Fragment>
                    )
                })}
            </List>
      </div>
    )
}

export default Sidebar;