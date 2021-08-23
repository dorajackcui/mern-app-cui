import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 145,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: 300,
    position: 'relative',
    maxWidth: 345,
    marginRight: '1rem', 
    transition:'0.2s',
    '&:hover': {
      transform: 'translateY(-1rem)',
  },
    '&:hover~&': {
      transform: 'translateX(130px)',
  },
    '&:not(:first-child)': {
     marginLeft: '-170px',
  },
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});