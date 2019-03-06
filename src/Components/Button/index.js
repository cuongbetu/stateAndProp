import React from 'react';
import Show from '../Show';

//stateless ~~ function es6
// const Button = () => (
    // <div>
    //     <button>Login</button>
    // </div>
// );


//statefull
//component cha
class Button extends React.Component {
    //method, ham khoi tao luon luon chay dau tien
    constructor(props){
        super(props);//ke thua props cua class React.Component
        //alert('button: stt 1');
        //state co the thay doi duoc du lieu
        this.state = {
            number: 1000
        }
    }

    //method
    handleClick = () => {
        alert('ban da login')
    }

    handleChange = () => {
        this.setState({
            number: this.state.number +1
        })
    }

    //method
    render(){
        //alert('button: stt 2')
        return (
            <div>
                <button onClick={this.handleChange}>+</button>
                {/* //number la 1 props do nguoi dung dinh nghia */}
                <Show congNumber={this.state.number}/> 
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>{this.state.number}</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
                <h1>alooooooooooooooooooooooooooo</h1>
            </div>
        )
    }
}
export default Button;