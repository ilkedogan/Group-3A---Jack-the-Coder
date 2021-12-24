//import * as React from 'react';
//import Grid from "@mui/material/Grid";
//import BilboardMultilineTextField from "../components/BilboardMultilineTextField";
//import BilboardButton from "../components/BilboardButton";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
//import Constants from "../utils/Constants";
import Button from "@mui/material/Button";
//import BilboardTextField from "./BilboardTextField";
//import Colors from "../utils/Colors";
import { Alert, Card, Snackbar, TextField } from "@mui/material";
//import IconButton from "@mui/material/IconButton";
import { AddAlert, AddBox, DeleteForever, RemoveOutlined } from "@mui/icons-material";
import {
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
} from "@mui/material";
import BilboardTextField from "../../components/BilboardTextField";
import BilboardMultilineTextField from "../../components/BilboardMultilineTextField";
import BilboardButton from "../../components/BilboardButton";
import Colors from "../../utils/Colors";
import Checkbox from "@mui/material/Checkbox";
import Constants from "../../utils/Constants";
import { ImageOutlined } from "@mui/icons-material";
import { FormGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles( {
    textGrid: {
        display: "flex",
        justifyContent: "end",
        paddingRight: "20px",
        fontFamily: Constants.OXYGEN_FONT_FAMILY,
    },
    inputGrid: {
        display: "flex",
        justifyContent: "start",
    },
    rowGrid: {
        paddingTop: "10px",
    },
} );

const ClubManagementHierarchyScreen = ( { club } ) => {
    const classes = useStyles();
    const [ boardMembers, setBoardMembers ] = React.useState( [] )

    if ( boardMembers.length === 0 && club.clubBoardMembers.length !== 0 ) {
        setBoardMembers( [...club.clubBoardMembers] )
    }

    return (
        <Grid
            container
            style={ {
                paddingTop: 20,
            } }
        >
            <Grid item xs={ 3 }></Grid>
            <Grid item xs={ 6 }>
                <Grid container>
                    <Grid
                        item
                        xs={ 12 }
                        style={ {
                            padding: 20,
                            fontSize: 48,
                            fontFamily: Constants.OXYGEN_FONT_FAMILY,
                        } }
                    >
                        Club Hierarchy
                    </Grid>

                    <Grid container>
                        <Grid container className={ classes.rowGrid }>
                            <Grid item xs={ 5 } className={ classes.textGrid } style={ {
                                fontSize: "30px",
                                fontFamily: Constants.OXYGEN_FONT_FAMILY,
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            } }>
                                President
                            </Grid>
                            <Grid item xs={ 7 } className={ classes.inputGrid } style={ {
                                fontSize: "30px",
                                fontFamily: Constants.OXYGEN_FONT_FAMILY,

                            } }>
                                { club.president.name + " " + club.president.surname }
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid container className={ classes.rowGrid }>
                                <Grid item xs={ 8 } className={ classes.textGrid } style={ {
                                    fontSize: "30px",
                                    fontFamily: Constants.OXYGEN_FONT_FAMILY,
                                    fontStyle: 'italic',
                                    fontWeight: 'bold'
                                } }>
                                    Board members
                                </Grid>

                            </Grid>

                            <Grid container style={ {
                                maxHeight: "200px",
                                overflowX: "hidden",
                                overflowY: "scroll",
                                marginLeft: "100px",
                                marginRight: "100px"
                            } }>
                                {
                                    boardMembers.map( boardMember => {
                                        return ( <Grid item xs={ 12 }
                                                       style={ { display: "flex", justifyContent: "center" } }>
                                            <Card elevation={ 0 } style={ {
                                                width: "440px",
                                                marginTop: 10,
                                                borderRadius: Constants.BORDER_RADIUS,
                                                background: Colors.BILBOARD_RED_ALTERNATIVE
                                            } }>
                                                <Grid container style={ { alignItems: "stretch" } }>
                                                    <Grid item xs={ 11 }
                                                          style={ { fontSize: 12, alignItems: "center", padding: 8, } }>
                                                        { boardMember.user.name + " " + boardMember.user.surname +
                                                        "   " + boardMember.user.bilkentId }
                                                    </Grid>
                                                    <Grid item xs={ 1 }
                                                          style={ {
                                                              background: Colors.BILBOARD_RED,
                                                              alignItems: "center",
                                                              justifyItems: "center",
                                                              display: "flex"
                                                          } }>
                                                        <IconButton
                                                            onClick={ () => {

                                                            } }
                                                            style={ {
                                                                borderRadius: 0,
                                                            } }>
                                                            <DeleteForever/>
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </Card>
                                        </Grid> )
                                    } )
                                }
                            </Grid>
                            <Grid container className={ classes.rowGrid } style={ {
                                fontSize: "30px",
                                fontFamily: Constants.OXYGEN_FONT_FAMILY,
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            } }>
                                <Grid item xs={ 5 } className={ classes.textGrid }>
                                    Add Board Member
                                </Grid>
                                <Grid item xs={ 7 } className={ classes.inputGrid } style={ { marginTop: "10px" } }
                                >
                                    <BilboardTextField label="Name" width={ '280px' }/>

                                </Grid>

                            </Grid>
                            <Grid
                                container
                                style={ {
                                    display: "flex",
                                    justifyContent: "center",
                                    paddingTop: "20px",
                                } }
                            >
                                <BilboardButton fontSize={ "14px" } text={ "Add" } width={ "200px" }/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={ 3 }></Grid>
        </Grid>
    );
};

export default ClubManagementHierarchyScreen;
