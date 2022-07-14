import { useState } from 'react'
import Nav from '../components/Nav';

const Onboarding = () => {
    return(
        <>
        <Nav 
        minimal={true}
        setShowModal={() => {}}
        showModal={false}
        />
        <div className="onboarding">
            <h2>Create Account</h2>
            <from onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="first-name">First Name</label>
                    <input 
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required={true}
                    value={""}
                    onChange={handleChange}
                    />
                </section>
                
            </from>
        </div>
        </>
    )
}
export default Onboarding