
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
// import './Chatbot.css'
// import Product from '../basics/ProductList';
// import Tradition from '../basics/TraditionalList';
import Resturant from '../basics/Resturant';

class Chatbot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      const steps = this.props.steps;
      const nameStep = steps.find((step) => step.id === 'name');
      const message = `Hello, ${this.state.name}! How can I assist you today?`;
      nameStep.message = message;
    }
  }

  render() {
    // const [showComponent, setShowComponent] = useState(false);
    const handleButtonClick = () => {
      // setShowComponent(true);
      <Resturant></Resturant>
      // console.log("ssss")
    };
    return (
      <ChatBot hei
        steps={[
          {
            id: 'name',
            message: 'Hey! What is your name?',
            trigger: 'input_name',
          },
          {
            id: 'input_name',
            user: true,
            trigger: 'update_name',
            validator: (value) => {
              if (value === '') {
                return 'Please enter your name.';
              }
              else {
                console.log(value)
              }
              return true;
            },
          },
          {
            id: 'update_name',
            message: 'Hi {previousValue}! what would you like to see?',
            trigger: 'Traditional_or_Western'
          },

          {
            id: 'Traditional_or_Western',
            options: [
              {
                value: "Traditional",
                label: "Traditional",
                trigger: "Traditional"
              },
              {
                value: "Western",
                label: "Western",
                trigger: "Western"
              }
            ]
          },
          {
            id: 'Western',
            message: "Great! Here are some of our most popular Western Dresses:",
            trigger: 'WesternDresses'
          },
          {
            id: "Traditional",
            message: "Great! Here are some of our most popular Traditional dresses:",
            trigger: 'TraditionalDress'
          },
          {
            id: 'TraditionalDress',
            message:"for more go to our website",
            // component: <Tradition />,
            trigger: "1"
          },
          {
            id: 'goto',
            message: "for more go to our website"
          },
          {
            id: 'WesternDresses',
            // component: <Product />,
            message:"for more go to our website",
            trigger:"1"
          },
          {
            id: '1',
            component: (
              <div> For more go to our website <a href="http://localhost:3000/">Our Website</a> </div>
            ),
            asMessage: true,
            // trigger: '2'
          },
          // {
          //   id: '2',
          //   message: ""
          // },
         
        ]}
        {...this.props}
      />
    );
  }
}

export default Chatbot;