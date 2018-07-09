import React from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import serializeForm from 'form-serialize';

class AddNewLocation extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash:true })
        if (this.props.NewLocation) {
            this.props.NewLocation(values)
        }
    }

    render() {
        return (
            <div>
                <Link
                    className='return-link'
                    to='/'>
                    Go Back
                </Link>
                <form onSubmit={this.handleSubmit}className='create-new-organization'>
                <div className='create-title'>
                    <h2>New Charitable Organization</h2>
                    <p className='new-heart'></p>
                </div>
                    <ImageUpload
                        className='image-upload'
                        name='imageURL'
                        maxHeight={100}
                    />
                    <div className='create-input-form'>
                        <input type='text' name='name' placeholder='Organization'/>
                        <input type='text' name='email' placeholder='Email'/>
                        <button>Add Organization</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNewLocation;