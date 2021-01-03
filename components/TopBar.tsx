/* eslint-disable @typescript-eslint/no-unsafe-return */
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { UseAppContext } from '../lib/context';

const useStyles = makeStyles(() => ({
    topBar: {
        marginBottom: 30,
        backgroundColor: '#E5989B',
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'center'
    },
    tagButton: {
        marginRight: 15,
    },
}));

interface TopBarProps {
    tags: string[];
}

const TopBar = ({tags}: TopBarProps) => {
    const {setSelectedTag} = UseAppContext();
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.topBar}>
                <Toolbar className={classes.toolBar}>
                    {tags.map(tag => (
                        <Button
                            className={classes.tagButton}
                            variant="contained"
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                        >
                            {tag}
                        </Button>
                    ))}
                    <Button
                        className={classes.tagButton}
                        variant="contained"
                        key="all"
                        onClick={() => setSelectedTag(undefined)}
                    >
                        Tout
                    </Button>
                </Toolbar>
            </AppBar>
    );
};

export default TopBar;