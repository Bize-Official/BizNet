import './App.css';
// import { Widget } from './components/widget/widget';
import { TWidget } from './components/widget/Test-widget';
// import Like from './components/widget/components/Interactions';
import Bar from './components/Interactions/Bar';
import SideMenu from './primeReact/main';

import { PrimeReactProvider } from 'primereact/api';


export default function App() {

  const value = {
    inputStyle: 'filled',
    ripple: true
    
  };


  return (
    <>
      <PrimeReactProvider value={value}>
        <SideMenu />
      </PrimeReactProvider>
      {/* <Bar /> */}
      {/* <TWidget /> */}
      {/* <Widget /> */}
      {/* <Like /> */}

    </>

  );
}


