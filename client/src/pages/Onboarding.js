import { useState } from 'react'
import Nav from '../components/Nav';

const Onboarding = () => {
    const handleSubmit = () => {
        console.log("Submit")
    }
    const handleChange = () => {
        console.log("Change")
    }

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => { }}
                showModal={false}
            />
            <div className="onboarding">
                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>
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
                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob-day"
                                type="number"
                                name="dob-day"
                                placeholder="DD"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input
                                id="dob-month"
                                type="number"
                                name="dob-month"
                                placeholder="MM"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input
                                id="dob-year"
                                type="number"
                                name="dob-year"
                                placeholder="YYYY"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="man_gender_identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man_gender_identity">Man</label>
                            <input
                                id="man_gender_identity"
                                type="radio"
                                name="gender_identity"
                                required={true}
                                value={"woman"}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman_gender_identity">Woman</label>
                            <input
                                id="more"
                                type="radio"
                                name="gender_identity"
                                required={true}
                                value={"more"}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="more_gender_identity">More</label>
                        </div>
                        <label htmlFor="show-gender">Show gender on my profile </label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show-gender"
                            required={true}
                            onChange={handleChange}
                            checked={false}
                        />
                        <label> Show me</label>
                        <div className="multiple-input-interest">
                            <input
                                id="man_gender_interest"
                                type="radio"
                                name="gender_interest"
                                required={true}
                                value={"man"}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man_gender_interest">Man</label>
                            <input
                                id="man_gender_interest"
                                type="radio"
                                name="gender_interest"
                                required={true}
                                value={"woman"}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman_gender_interest">Woman</label>
                            <input
                                id="everyone_gender_interest"
                                type="radio"
                                name="gender_interest"
                                required={true}
                                value="everyone"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="more_gender_interest">Everyone</label>
                        </div>
                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like zx6r.."
                            value=""
                            onChange={handleChange}
                        />
                        <input type="submit" />
                    </section>

                    <section>
                        <label htmlFor="url">Profile Profile</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            required={true}
                            onChange={handleChange}
                        />
                        <div className="photo-container">

                        </div>
                    </section>
                </form >
            </div>
        </>
    )
}
export default Onboarding