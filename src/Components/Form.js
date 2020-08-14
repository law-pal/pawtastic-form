import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            breed: '',
            birthday: '',
            gender: '',
            weight: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBreedChange = this.handleBreedChange.bind(this);
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    } 

    handleBreedChange(event) {
        this.setState({breed: event.target.value});
    } 

    handleBirthdayChange(event) {
        this.setState({birthday: event.target.value});
    } 

    handleGenderChange(event) {
        this.setState({gender: event.target.value});
    } 

    handleWeightChange(event) {
        this.setState({weight: event.target.value});
    } 

    handleSubmit(event) {
        const myString = JSON.stringify(this.state)
        alert(`Pet information was submitted ${myString}`);
        event.preventDefault()
    }

    render() {
        return(
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input placeholder='name' type='text' value={this.state.name} onChange={this.handleNameChange}/>
                    <input placeholder='breed' type='text' value={this.state.breed} onChange={this.handleBreedChange}/>
                    <input placeholder='birthday' type='text' value={this.state.birthday} onChange={this.handleBirthdayChange}/>
                    <input className='male' type='radio' name='gender' value='male' onChange={this.handleGenderChange}/>
                    <label for='male'>Male</label>
                    <input className='male' type='radio' name='gender' value='female' onChange={this.handleGenderChange}/>
                    <label for='female'>Female</label>
                    <input placeholder='weight' type='text' value={this.state.weight} onChange={this.handleWeightChange}/>

                </form>
            </div>
        );
    }

}


export default Form; 