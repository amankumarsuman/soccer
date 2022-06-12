import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GroupsIcon from "@mui/icons-material/Groups";
import { Box } from "@mui/system";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EditIcon from "@mui/icons-material/Edit";
// import image from "./football.png";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Body() {

  const reduxStoredData = useSelector(
    (state) => state.editPlayerForm?.mainForm?.teamPlayerDetails
  );

  var noOfGoalKeeper=reduxStoredData?.countOfGoalKeepers;
  var noOfDefender=reduxStoredData?.countOfDefenders;
  var noOfForwards=reduxStoredData?.countOfForwards;
  var noOfMidfielders=reduxStoredData?.countOfModifielders;

  // const [teamConditionFulfilled,setTeamCoditionFulfilled]=useState(false);
var teamConditionFulfilled=false;
  if(noOfGoalKeeper>=1 && noOfDefender>=4 && noOfMidfielders>=4 && noOfForwards>=3){
    teamConditionFulfilled=true
  }

  console.log("teamConditionFulfilled",teamConditionFulfilled)
  const [selected, setSelected] = React.useState("/");
  const listOfDrawer = [
    {
      icon: <SportsSoccerIcon sx={{ fontSize: "2em" }} />,
      toolTip: "Home",
      content: "Home",
      path: "/home",
    },
    {
      icon: <MenuIcon sx={{ fontSize: "2em" }} />,
      toolTip: "Home",
      content: "Home",
      path: "/",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: "2em" }} />,
      toolTip: "Team",
      content: "Team",
      path: "/playground",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [editName,setEditName]=useState(false)

  const handleEditName=()=>{
    setEditName(true)
  }
  return (
    <>
      <div>
        <Paper
          elevation={3}
          sx={{ display: "flex", width: "100%", margin: "auto" }}
        >
          <Box sx={{ display: "flex", backgroundColor: "#111111" }}>
            <List style={{ marginTop: "10px" }}>
              {listOfDrawer.map((item, idx) => (
                <ListItem
                  key={idx}
                  sx={{ padding: "8px 12px" }}
             
               
                >
                  <Tooltip
                    sx={{ fontSize: "2em" }}
                    title={item.toolTip}
                    placement="right"
                  >
                     <Link to={item.path}>


                    <ListItemIcon
                    onClick={()=>setSelected(item.path)}
                      // sx={{
                      //   color: `${
                      //     selected == item?.path ? "#FEA013" : "#69563A"
                      //   }`,
                      // }}
                      
                     sx={
                     (selected == item?.path ? {color: '#FEA013'} : {color: '#69563A'})}
                    >
                      {item.icon}
                    </ListItemIcon>
                     </Link>
                  </Tooltip>
                
                 
                </ListItem>
                 
              ))}

                   

            </List>
          </Box>
          <Paper
            elevation={3}
            sx={{ backgroundColor: "#383838", padding: "50px" }}
          >
            <div style={{ marginLeft: "40px" }}>
              <p style={{ color: "#FEA013" }}>Formation Overview</p>
              <div style={{ display: "flex" }}>
                    <h4 style={{ color: "white", marginTop: 0 }}>{editName?"Aman-kumar-champion":"My Team"}</h4>
                    {!editName?<EditIcon onClick={handleEditName} sx={{ color: "white", marginLeft: "20px" }} />:null}
                  </div>

              <Paper
                elevation={3}
                sx={{ backgroundColor: "#494949", padding: "20px" }}
              >
                <div style={{ display: "flex" }}>
                  <img src="./playGround.png" alt="playground" />
                  <div style={{ width: "322px" }}>
                    <Divider
                      sx={{ backgroundColor: "#494949" }}
                      variant="middle"
                    />
                  </div>
                </div>
              </Paper>
            </div>
          </Paper>
        </Paper>
      </div>
    </>
  );
}

export default Body;
