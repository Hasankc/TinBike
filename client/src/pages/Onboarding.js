import { useState } from 'react'
import Nav from '../components/Nav';

const Onboarding = () => {

    const [formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_gender: false,
        gander_identity: 'man',
        gender_interest: 'bikers',
        email: '',
        url: '',
        about: '',
        matches: [],

    })

    const handleSubmit = () => {
        console.log("Submit")
    }
    const handleChange = (e) => {
        const value = e.target.type ==='checkbox' ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) =>({
            ...prevState,
            [name] : value
        }))
    }
    console.log(formData)
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
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />
                            <input
                              id="dob_month"
                              type="number"
                              name="dob_month"
                              placeholder="MM"
                              required={true}
                              value={formData.dob_month}
                              onChange={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
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
                                checked={formData.gander_identity === 'man'}
                            />
                            <label htmlFor="man_gender_identity">Man</label>
                            <input
                                id="man_gender_identity"
                                type="radio"
                                name="gender_identity"
                                required={true}
                                value={"woman"}
                                onChange={handleChange}
                                checked={formData.gander_identity === 'woman'}
                            />
                            <label htmlFor="woman_gender_identity">Woman</label>
                            <input
                                id="more"
                                type="radio"
                                name="gender_identity"
                                required={true}
                                value={"more"}
                                onChange={handleChange}
                                checked={formData.gander_identity === 'more'}
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
                            checked={formData.show_gender}
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
                                checked={formData.gander_interest === 'man'}
                            />
                            <label htmlFor="man_gender_interest">Man</label>
                            <input
                                id="man_gender_interest"
                                type="radio"
                                name="gender_interest"
                                required={true}
                                value={"woman"}
                                onChange={handleChange}
                                checked={formData.gander_interest === 'woman'}
                            />
                            <label htmlFor="woman_gender_interest">Woman</label>
                            <input
                                id="everyone_gender_interest"
                                type="radio"
                                name="gender_interest"
                                required={true}
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gander_interest === 'everyone'}
                            />
                            <label htmlFor="everyone_gender_interest">Everyone</label>
                        </div>
                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like zx6r.."
                            value={formData.about}
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
                            <img src={formData.url} alt="profile pic preview"/>
                        </div>
                    </section>
                </form >
            </div>
        </>
    )
}
export default Onboarding