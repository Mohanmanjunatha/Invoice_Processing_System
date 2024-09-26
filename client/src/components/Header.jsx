
import { AppBar, Toolbar } from '@mui/material';
const Header =() => {
    const logo="https://dashboard.getinvoice.co/dboard/img/logo.png"
    return (
        <AppBar color ='error' position="static">
            <Toolbar>
               <img src={logo}  alt="logo" style={{width:150 }}/>
            </Toolbar>
        </AppBar>
    )
    
}
export default Header;