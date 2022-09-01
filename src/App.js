import './App.scss';
import Barchart from './components/Chart/BarChart';
import Piechart from './components/Chart/PieChart';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Render from './components/Render/Render';

function App() {
  return (
    <div className='main'>
      <Navbar></Navbar>
      <div className='box__component'>
      <Piechart></Piechart>
      <Barchart></Barchart>
      </div>

      <Form></Form>
      <Render></Render>
    </div>
  );
}

export default App;
