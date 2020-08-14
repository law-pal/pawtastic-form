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
}

export default Form; 