import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session/session_actions'


class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            birthday: "0/0/0",
            gender: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleRequired = this.handleRequired.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        if(Object.values(this.state).some(val => val === "") || this.state.birthday === "0/0/0"){
            Object.keys(this.state).forEach(key=>{
                if(this.state[key] === "" || this.state.birthday === "0/0/0"){
                    if(key === 'birthday'){
                        let els = document.querySelectorAll('select');
                        els.forEach((el)=>el.classList.add("required"));
                    }else if(key === 'gender'){
                        let els = document.getElementsByClassName('gender-container')
                        Array.from(els).forEach((el)=>el.classList.add("required"));
                    }else{
                        let el = document.getElementById(key);
                        el.classList.add("required");
                    }
                }
            })
            return;
        }else{
            this.props.processForm(user).then(this.props.closeModal);
        }
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value});
            if(type="gender"){
                let els = document.getElementsByClassName('gender-container')
                Array.from(els).forEach((el)=>el.classList.remove("required"));
            }else{
                e.target.classList.remove("required");
            }
        }
    }

    handleRequired(id){
        return() => {
            if(this.state[id] === ""){
                document.getElementById(id).classList.add("required");
            }
        }
    }

    handleFocus(e){
        e.target.classList.remove("required");
    }



    handleDate(type){
        let bdayArr = this.state.birthday.split('/');
        let idx
        switch(type){
            case 'month':
                idx = 0;
                break;
            case 'day':
                idx = 1;
                break;
            case 'year':
                idx = 2;
                break;
        }
        return(e) => {
            bdayArr[idx] = e.target.value;
            this.setState({birthday: bdayArr.join('/')});
        }
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    render(){
        if (!this.props.modal) {
        return null;
        }

        const errorArr = this.props.errors.login.length ? this.props.errors.login.map((error) => {
            return (
                <li>{error}</li>
            )
        }) : [];

        const dayArr = Array.from(new Array(31), (x, i) => i + 1);
        const dayOptions = dayArr.map(day=>{
            return <option value={day} key={day}>{day}</option>
        });
        const yearArr = Array.from(new Array(116), (x, i) => i + 1905).reverse();
        const yearOptions = yearArr.map(year=>{
            return <option value={year} key={year}>{year}</option>
        }); 

        return (
            <div className="modal-background" onClick={() => {this.props.clearErrors(); this.props.closeModal();}}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-form">
                        <div className="x" onClick={() => {this.props.clearErrors(); this.props.closeModal();}}>&#10006;</div>
                        <div className="sign-up-text">
                            <h2>Sign Up</h2>
                            <p>It's quick and easy.</p>
                        </div>
                        <form>
                            <div className="small">
                                <input id="first_name" onFocus={this.handleFocus} onBlur={this.handleRequired("first_name")} type="text" onChange={this.handleInput('first_name')} value={this.state.first_name} placeholder="First Name"></input>
                                <input id="last_name" onFocus={this.handleFocus} onBlur={this.handleRequired("last_name")} type="text" onChange={this.handleInput('last_name')} value={this.state.last_name} placeholder="Last Name"></input>
                            </div>
                            {/* <div className="small">
                            </div> */}
                            <div>
                                <input id="email" onFocus={this.handleFocus} onBlur={this.handleRequired("email")} type="text" onChange={this.handleInput('email')} value={this.state.email} placeholder="Email"></input>
                            </div>
                            <div>
                                <input id="password" onFocus={this.handleFocus} onBlur={this.handleRequired("password")} type="password" onChange={this.handleInput('password')} value={this.state.password} placeholder="Password"></input>
                            </div>
                            <div className='sub'>
                                <label>Birthday</label>
                                <select onFocus={this.handleFocus} onChange={this.handleDate('month')} value={this.state.birthday.split('/')[0]}>
                                    <option value='1' key='1' >Jan</option>
                                    <option value='2' key='2' >Feb</option>
                                    <option value='3' key='3' >Mar</option>
                                    <option value='4' key='4' >Apr</option>
                                    <option value='5' key='5' >May</option>
                                    <option value='6' key='6' >Jun</option>
                                    <option value='7' key='7' >Jul</option>
                                    <option value='8' key='8' >Aug</option>
                                    <option value='9' key='9' >Sep</option>
                                    <option value='10' key='10' >Oct</option>
                                    <option value='11' key='11' >Nov</option>
                                    <option value='12' key='12' >Dec</option>
                                </select>
                                <select onFocus={this.handleFocus} onChange={this.handleDate('day')}  value={this.state.birthday.split('/')[1]}>
                                    {dayOptions}
                                </select>
                                <select onFocus={this.handleFocus} onChange={this.handleDate('year')} value={this.state.birthday.split('/')[2]}>
                                    {yearOptions}
                                </select>
                            </div>
                            <div className='sub'>
                                <label>Gender</label>
                                <div onFocus={this.handleFocus} className="gender-container">
                                    <label>Female</label>
                                    <input type="radio" name="gender" value="Female" checked={this.state.gender === "Female"} onChange={this.handleInput('gender')}/>
                                </div>
                                <div onFocus={this.handleFocus} className="gender-container">
                                    <label>Male</label>
                                    <input type="radio" name="gender" value="Male" checked={this.state.gender === "Male"} onChange={this.handleInput('gender')}/>
                                </div>
                                <div onFocus={this.handleFocus} className="gender-container">
                                    <label>Other</label>
                                    <input type="radio" name="gender" value="Other" checked={this.state.gender === "Other"} onChange={this.handleInput('gender')}/>
                                </div>
                            </div>
                            {/* {errorArr.length ? 
                            <ul className="error">{errorArr}</ul> 
                            : <></>} */}
                            <button onClick={this.handleSubmit} className="btn sign-up" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    errors: state.errors,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

