import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    overrides: {
        MuiTabs: {
            root: {
                color: 'black'
            },
            indicator: {
                backgroundColor: '#FEC52D'
            }
        },
        MuiListItemText: {
            root: {
                padding: '0 16px',
                marginTop: '3px',
                marginBottom: '3px'
            }
        },
        MuiTypography: {
            root: {
                color: 'black'
            }
        },
        MuiListItemIcon: {
            root: {
                minWidth: 'inherit',
                marginRight: '16px'
            }
        }
    },
    props: {
        MuiTypography: {
            variant: 'body2'
        }
    },
    palette: {
        primary: {
            light: '#f7cb54',
            main: '#FEC52D',
            dark: '#d69c00'
        },
        secondary: red
    }
});
export default theme;
