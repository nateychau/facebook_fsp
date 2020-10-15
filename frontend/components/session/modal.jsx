import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session/session_actions'
import ErrorTip from './error_tip';

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
  

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            first_name_error: false,
            first_name_border: false,
            last_name: "",
            last_name_error: false,
            last_name_border: false,
            email: "",
            email_error: false,
            email_border: false,
            password: "",
            password_error: false,
            password_border: false,
            birthday: "0/0/0",
            birthday_error: false,
            birthday_border: false,
            gender: "",
            gender_error: false,
            gender_border: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleRequired = this.handleRequired.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        if(Object.values(this.state).some(val => val === "") || this.state.birthday === "0/0/0"){
            let firstErr = true;
            Object.keys(this.state).forEach(key=>{
                if(this.state[key] === "" || (key === "birthday" && this.state.birthday === "0/0/0")){
                    let border = `${key}_border`;
                    let err = `${key}_error`
                    this.setState({[border]:true});
                    if(firstErr){
                        this.setState({[err]:true})
                        firstErr = false;
                    }
                }
            })
        }else{
            this.props.processForm(user).then(this.handleModalClose);
        }
    }

    handleInput(type){
        let err = `${type}_error`;
        let border = `${type}_border`
        return (e) => {
            this.setState({[type]: e.target.value, [border]: false, [err]: false});
        }
    }

    handleRequired(id){
        let err = `${id}_error`;
        let border = `${id}_border`;
        return () => {
            if(this.state[id] === "" || (id === "birthday" && this.state[id].split('/').some(el=>el==="0"))){
                this.setState({[err]: false, [border]: true});
            }
        }
    }

    handleFocus(id){
        let err = `${id}_error`;
        let border = `${id}_border`;
        return (e) =>{
            this.setState({
                first_name_error: false, 
                last_name_error: false,
                email_error: false,
                password_error: false,
                birthday_error: false,
                gender_error: false,})
            if(this.state[border]){
                this.setState({[border]: false, [err]: true})
            }
        }
    }

    handleDate(type){
        let bdayArr = this.state.birthday.split('/');
        let idx
        let err = 'birthday_error'
        let border = 'birthday_border'
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
            this.setState({birthday: bdayArr.join('/'), [err]: false, [border]: false});
        }
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleModalClose(){
        this.props.clearErrors();
        this.props.closeModal();
        this.setState({
            first_name: "",
            first_name_error: false,
            first_name_border: false,
            last_name: "",
            last_name_error: false,
            last_name_border: false,
            birthday: "0/0/0",
            birthday_error: false,
            birthday_border: false,
            gender: "",
            gender_error: false,
            gender_border: false,
            password: "",
            password_error: false,
            password_border: false,
            email: "",
            email_error: false,
            email_border: false,
        })
    }


    render(){
        if (this.props.modal !== 'signup') {
            return null;
        }

        const errorArr = this.props.errors.signup.length ? this.props.errors.signup.map((error) => {
            return (
                <li>{error}</li>
            )
        }) : []

        const dayArr = Array.from(new Array(31), (x, i) => i + 1);
        const dayOptions = dayArr.map(day=>{
            return <option value={day} key={day}>{day}</option>
        });
        const yearArr = Array.from(new Array(116), (x, i) => i + 1905).reverse();
        const yearOptions = yearArr.map(year=>{
            return <option value={year} key={year}>{year}</option>
        }); 
        return (
            <div className="modal-background" onClick={this.handleModalClose}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-form">
                        <div className="x" onClick={this.handleModalClose}>&#10006;</div>
                        <div className="sign-up-text">
                            <h2>Sign Up</h2>
                            <p>It's quick and easy.</p>
                        </div>                       
                        <form>
                        {errorArr.length ? 
                        <ul className="signup-error">{errorArr}</ul> 
                        : <></>}
                            <div className="small">
                                {this.state.first_name_error ? <ErrorTip error={"First name can't be blank"} class={"left"}/> : ''}
                                <input id="first_name" className={this.state.first_name_border ? "required" : ""} onFocus={this.handleFocus("first_name")} onBlur={this.handleRequired("first_name")} type="text" onChange={this.handleInput('first_name')} value={this.state.first_name} placeholder="First Name"></input>
                                {this.state.last_name_error ? <ErrorTip error={"Last name can't be blank"} class={"bottom"}/> : ''}
                                <input id="last_name" className={this.state.last_name_border ? "required" : ""} onFocus={this.handleFocus("last_name")} onBlur={this.handleRequired("last_name")} type="text" onChange={this.handleInput('last_name')} value={this.state.last_name} placeholder="Last Name"></input>
                            </div>
                            {/* <div className="small">
                            </div> */}
                            <div>
                                {this.state.email_error ? <ErrorTip error={"Email can't be blank"} class={"left"}/> : ''}
                                <input id="email" className={this.state.email_border ? "required" : ""} onFocus={this.handleFocus("email")} onBlur={this.handleRequired("email")} type="text" onChange={this.handleInput('email')} value={this.state.email} placeholder="Email"></input>
                            </div>
                            <div>
                                {this.state.password_error ? <ErrorTip error={"Password can't be blank"} class={"left"}/> : ''}
                                <input id="password" className={this.state.password_border ? "required" : ""} onFocus={this.handleFocus("password")} onBlur={this.handleRequired("password")} type="password" onChange={this.handleInput('password')} value={this.state.password} placeholder="Password"></input>
                            </div>
                            <div className='sub'>
                                {this.state.birthday_error ? <ErrorTip error={"Birthday can't be blank"} class={"left"}/> : ''}
                                <label>Birthday</label>
                                <select className={this.state.birthday_border ? "required" : ""} onFocus={this.handleFocus("birthday")} onBlur={this.handleRequired("birthday")} onChange={this.handleDate('month')} value={this.state.birthday.split('/')[0]}>
                                    <option value='0' key='0' disabled>Month</option>
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
                                <select className={this.state.birthday_border ? "required" : ""} onFocus={this.handleFocus("birthday")} onBlur={this.handleRequired("birthday")} onChange={this.handleDate('day')}  value={this.state.birthday.split('/')[1]}>
                                    <option value='0' key='0' disabled>Day</option>
                                    {dayOptions}
                                </select>
                                <select className={this.state.birthday_border ? "required" : ""} onFocus={this.handleFocus("birthday")} onBlur={this.handleRequired("birthday")} onChange={this.handleDate('year')} value={this.state.birthday.split('/')[2]}>
                                    <option value='0' key='0' disabled>Year</option>
                                    {yearOptions}
                                </select>
                            </div>
                            <div className='sub'>
                                {this.state.gender_error ? <ErrorTip error={"Gender can't be blank"} class={"left"}/> : ''}
                                <label>Gender</label>
                                <div onFocus={this.handleFocus("gender")} className={this.state.gender_border ? "required gender-container" : "gender-container"}>
                                    <label>Female</label>
                                    <input type="radio" name="gender" value="Female" checked={this.state.gender === "Female"} onChange={this.handleInput('gender')}/>
                                </div>
                                <div onFocus={this.handleFocus("gender")} className={this.state.gender_border ? "required gender-container" : "gender-container"}>
                                    <label>Male</label>
                                    <input type="radio" name="gender" value="Male" checked={this.state.gender === "Male"} onChange={this.handleInput('gender')}/>
                                </div>
                                <div onFocus={this.handleFocus("gender")} className={this.state.gender_border ? "required gender-container" : "gender-container"}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

