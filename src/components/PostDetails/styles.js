import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    marginTop:'20px',
    justifyContent:"space-between",
    [theme.breakpoints.down('sm')]: {
      
      flexDirection: 'column',
    },
  },

  recommendedPost:{
    margin:"0 10px 0 10px",
    padding:"15px 20px 10px 20px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexBasis:"33%",
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    
    boxShadow:'2px 8px 4px -6px hsla(0,0%,0%,.3)',
   
    '&:hover': {
      // transform:'translateY(-0.5rem)',
      boxShadow: '20px 38px 34px -26px hsla(0,0%,0%,.2)',
    }
  },

  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
}));