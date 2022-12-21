// const container = document.getElementById('react-container');   
// ReactDOM.render("Hello! Welcome to React",container);


// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);


// CLASS BASED COMPONENT
// class ReactContainer extends React.Component{
  
//       render(){
//           return React.createElement(`div`,null,`Hey Kalvians`,
//           React.createElement(`div`,null,`Let's rock and roll with classes`)
//           );
//       }
    
//   }
//   const container = document.getElementById('react-container');
//   ReactDOM.render(React.createElement(ReactContainer),container);


  class ReactContainer extends React.Component{
    // JSX tags
    // JSX there should be one parent element
      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div>This is babel</div>
         </div> )
      };  
  }

const container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer/>,container);    