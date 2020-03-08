import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import  ClassCounterTwo from './components/ClassCounterTwo';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
import DataFetching1 from './components/DataFetching1';
// import ComponentC from './components/ComponentC';
import { render } from 'react-dom';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

// function App() {
// 	return (
// 		<div className="App">
// 			<UserContext.Provider value={'Vishwas'}>
//         <ChannelContext.Provider value={'Codevolution'}>
// 					<ComponentC />
// 				</ChannelContext.Provider>
// 			</UserContext.Provider>
// 		</div>
// 	)
// }
class App extends Component {
  render() {
    return (
      <div className="App">

        <DataFetching1 />
        {/* <DataFetching /> */}
        {/* <IntervalClassCounter />
        <IntervalHookCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterTwo /> */}
        {/* <ClassCounterTwo /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter /> */}
      </div>
    );
  }
} 

export default App;
