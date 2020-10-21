import React from 'react'

export default class AboutRow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.user.id,
            data: this.props.user[this.props.type] ? this.props.user[this.props.type] : '',
            more: false,
            edit: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleMoreOpen = this.handleMoreOpen.bind(this);
        this.handleMoreClose = this.handleMoreClose.bind(this);
    }


    handleInput(e){
        this.setState({data: e.target.value});
    }

    handleCancel(){
        this.setState({edit: false, data: this.props.user[this.props.type] ? this.props.user[this.props.type] : ''})
    }

    handleSubmit(){
        this.props.updateUser({id: this.state.id, [this.props.type]: this.state.data})
            .then(this.setState({edit: false, more: false}));
    }

    handleEdit(){
        this.setState({edit: true, more: false});
    }

    handleDelete(){
        this.props.updateUser({id: this.state.id, [this.props.type]: ''})
            .then(this.setState({more: false, data: ''}))
    }

    handleMoreOpen(){
        this.setState({more: true});
    }

    handleMoreClose(){
        this.setState({more: false});
    }

    handleDate(type){
        let bdayArr = this.state.data.length ? this.state.data.split('-') : ['0', '0', '0'];
        let idx
        switch(type){
            case 'month':
                idx = 1;
                break;
            case 'day':
                idx = 2;
                break;
            case 'year':
                idx = 0;
                break;
        }
        return(e) => {
            bdayArr[idx] = e.target.value;
            this.setState({data: bdayArr.join('-')});
        }
    }

    render(){
        let label;
        let verb;
        let text = false;
        let date = false;
        let dropdown = false;
        let icon = this.props.type; 
        if(this.props.type === 'work'){
            verb = 'Works at ';
            label = 'Work';
            text = true;
        }
        else if(this.props.type === 'school'){
            verb = 'Studied at ';
            label = 'School';
            text = true;
        }
        else if(this.props.type === 'location'){
            verb = 'Lives in ';
            label = 'Location';
            text = true;
        }
        else if(this.props.type === 'birthday'){
            verb = 'Born on ';
            label = 'Birthday';
            date = true;
        }
        else if(this.props.type === 'gender'){
            verb = 'Gender: ';
            label = 'Gender';
            dropdown = true;
            icon = this.props.user[this.props.type] === 'Female' ? 'female' : 'male';
        }
        if(this.state.edit && text){
            return (
                <div className="about-text">
                    {/* <form> */}
                        <input autoFocus type='text' value={this.state.data} onChange={this.handleInput}></input>
                        <label>{label}</label>
                    {/* </form> */}
                    <div className='about-text-buttons'>
                        <button className='cancel-btn' onClick={this.handleCancel}>Cancel</button>
                        <button className='submit-btn' onClick={this.handleSubmit}>Save</button>
                    </div>
                </div>
            )
        }
        else if(this.state.edit && date){
            const dayArr = Array.from(new Array(31), (x, i) => i + 1);
            const dayOptions = dayArr.map(day=>{
                return <option value={day} key={day}>{day}</option>
            });
            const yearArr = Array.from(new Array(116), (x, i) => i + 1905).reverse();
            const yearOptions = yearArr.map(year=>{
                return <option value={year} kedivy={year}>{year}</option>
            }); 
            return (
                <div className='about-text'>
                    <div className='about-birthday'>
                        <select onChange={this.handleDate('month')} value={this.state.data.length ? this.state.data.split('-')[1] : '0'}>
                            <option value='0' key='0' disabled>Month</option>
                            <option value='01' key='1' >Jan</option>
                            <option value='02' key='2' >Feb</option>
                            <option value='03' key='3' >Mar</option>
                            <option value='04' key='4' >Apr</option>
                            <option value='05' key='5' >May</option>
                            <option value='06' key='6' >Jun</option>
                            <option value='07' key='7' >Jul</option>
                            <option value='08' key='8' >Aug</option>
                            <option value='09' key='9' >Sep</option>
                            <option value='10' key='10' >Oct</option>
                            <option value='11' key='11' >Nov</option>
                            <option value='12' key='12' >Dec</option>
                        </select>
                        <select onChange={this.handleDate('day')}  value={this.state.data.length ? parseInt(this.state.data.split('-')[2]) : '0'}>
                            <option value='0' key='0' disabled>Day</option>
                            {dayOptions}
                        </select>
                        <select onChange={this.handleDate('year')} value={this.state.data.length ? this.state.data.split('-')[0] : '0'}>
                            <option value='0' key='0' disabled>Year</option>
                            {yearOptions}
                        </select>
                    </div>
                    <div className='about-text-buttons'>
                        <button className='cancel-btn' onClick={this.handleCancel}>Cancel</button>
                        <button className='submit-btn' disabled={this.state.data.split('-').some(date => date === '0') || this.state.data === '' ? true : false} onClick={this.handleSubmit}>Save</button>
                    </div>
                </div>
            )
        }
        else if (this.state.edit && dropdown){
            return (
            <div id='about-gender' className='about-text'>
                <select onChange={this.handleInput} value={this.state.data}>
                    <option disabled value='' key='0'>Gender</option>
                    <option value="Female" key='1'>Female</option>
                    <option value="Male" key='2'>Male</option>
                    <option value="Other" key='3'>Other</option>
                </select>
                <div className='about-text-buttons'>
                    <button className='cancel-btn' onClick={this.handleCancel}>Cancel</button>
                    <button className='submit-btn' disabled={this.state.data.length ? false : true} onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
            )
        }
        return (
            <div className='about-row'>
                <div className='about-row-left'>
                    <div className={`${icon}-icon`}/>
                    <span>
                        {verb}{this.state.data}
                    </span>
                </div>
                <div className='about-row-right'>
                    {this.props.currentUser.id === this.props.user.id ? 
                    <button className="more-container" onClick={this.handleMoreOpen} onBlur={this.handleMoreClose}>
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                    : <div></div>}
                    {this.state.more ? 
                    <div className="more-open">
                        {this.props.user.id === this.props.currentUser.id ? 
                        <button className="more-btn" onMouseDown={this.handleEdit}>
                            <div className="icon-container">
                                <i className="far fa-edit"></i>
                            </div>
                            <div>Edit {this.props.type}</div>
                        </button>
                        : <></>}
                        <button className="more-btn" onMouseDown={this.handleDelete}>
                            <div className="icon-container">
                                <i className="far fa-trash-alt"></i>
                            </div>
                            <div>Delete {this.props.type}</div>
                        </button>
                    </div> : <></>}
                </div>
            </div>
        )
    }
}