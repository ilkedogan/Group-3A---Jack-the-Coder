import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import BilboardTextField from "../components/BilboardTextField";
import BilboardButton from "../components/BilboardButton";
import Colors from "../utils/Colors";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";


const Login = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    return (
        <div>
            <Grid container>
                <Grid item xs={12} style={{marginTop: "60px"}}>
                    <BilboardTextField
                        label="Bilkent Mail"
                        type="email"
                        width="300px"
                        style={{marginTop: "30px"}}
                    />
                </Grid>
                <Grid item xs={12} style={{marginTop: "20px"}}>
                    <BilboardTextField
                        label="Password"
                        type="password"
                        width="300px"
                        style={{marginTop: "30px"}}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} style={{marginTop: "40px"}}>
                <BilboardButton width="100px" fontSize="14px" text="Login"/>
            </Grid>

            <Grid item xs={12} style={{marginTop: "30px"}}>
                <BilboardButton
                    text="Forgot Password?"
                    variant="text"
                    color="#F5F5F5"
                    textColor={Colors.BILBOARD_BLUE}
                    onClick={() => setIsDialogOpen(true)}
                />
            </Grid>
            <Dialog open={isDialogOpen} fullWidth maxWidth={"sm"}
                    onClose={() => setIsDialogOpen(false)}>
                <DialogTitle style={{display: "flex", justifyContent: "center"}}>Forgot Password</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{textAlign: "justify"}}>
                        To reset your password, please enter your Bilkent mail and
                        click "Reset Password" button.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                    <Button
                        onClick={() => {
                            setIsDialogOpen(false);
                            setIsAlertOpen(true);
                        }}
                    >
                        Reset Password
                    </Button>
                </DialogActions>
            </Dialog>
            {
                isAlertOpen &&
                <Alert severity="info">If you provided a valid info, a mail was sent to your email.</Alert>
            }
        </div>
    )

}


export default Login;