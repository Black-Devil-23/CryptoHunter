import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'; 
import './App.css';
import Header from './components/Header';
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';
import 'react-alice-carousel/lib/alice-carousel.css';


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
}));

const App = () => {
const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
        <Route path='/' element={<Homepage />} exact />
        <Route path='/coins/:id' element={<Coinpage />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
  };

export default App;


