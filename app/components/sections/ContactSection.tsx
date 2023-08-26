'use client'
import { FC, useRef, useState } from 'react'
import axios from 'axios'

interface ContactSectionProps {

}

const ContactSection: FC<ContactSectionProps> = ({ }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(true);
    const [error, setError] = useState('');

    const [errorMessage, setErrorMessage] = useState("")
    const [errorClass, setErrorClass] = useState("border-2 border-red-400")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);


        if (formData.name.length === 0 || formData.email.length === 0 || formData.message.length === 0) {
            formData.name.length === 0 ? setErrorMessage("Name missing") :
                formData.email.length === 0 ? setErrorMessage("Email missing") :
                    formData.message.length === 0 ? setErrorMessage("Message missing") :
                        setErrorMessage("")

        } else {
            try {
                const response = await axios.post('/api/send', formData);
                if (response.status === 200) {
                    setSuccess(true);
                } else {
                    setError('Failed to send message.');
                }
            } catch (err) {
                setError('An error occurred.');
            } finally {
                setSubmitting(false);
            }

        }


    }



    return (
        <main className='h-vh100 bg-background'>

            <section className='p-4 pb-0 mb-4 '>
                <p className='text-green mb-2'>&lt;Contact&gt;</p>
                <h1 className='text-textLarge text-3xl mb-1 font-bold pl-4'><span className='text-green'>&lt;</span>Send me a message <span className='text-green'>/&gt;</span> </h1>
                <p className='text-green pl-6'>&lt;p&gt;</p>
                <div className='text-text'>
                    <p className='pl-8'>Are you looking to hire a motivated developer? I'm open to new roles and projects. Use the form below to reach out, and let's discuss how I can add value to your team.</p>
                </div>
                <p className='text-green pl-6 '>&lt;/p&gt;</p>
                <p className='text-green pl-6 '>&lt;form&gt;</p>
                {!success && (
                    <section>
                        <form className='flex flex-col items-center gap-y-1 mb-4' onSubmit={handleSubmit} >
                            <label className='block text-textLarge text-center' htmlFor="name">Name</label>
                            <input onChange={handleChange} value={formData.name} className={`w-3/4 rounded-2xl p-2 border border-green focus:outline-none  bg-text navButton ${errorMessage === "Name missing" ? errorClass : ""}`} type="text" name="name" id="name" />
                            <label className='block text-textLarge text-center' htmlFor="email">Email</label>
                            <input onChange={handleChange} value={formData.email} className={`w-3/4 rounded-2xl p-2 border border-green focus:outline-none navButton bg-text ${errorMessage === "Email missing" ? errorClass : ""}`} type="email" name="email" id="email" />
                            <label className='block text-textLarge text-center' htmlFor="message">Message</label>
                            <textarea onChange={handleChange} value={formData.message} className={`rounded-2xl p-2 navButton border border-green focus:outline-none bg-text mb-5 w-3/4 ${errorMessage === "Message missing" ? errorClass : ""}`} name="message" id="message" cols={33} rows={5}></textarea>
                            {errorMessage && (
                                <p className='text-red-500 mb-5'>"{errorMessage}"</p>

                            )}
                            <button className='border border-green text-green py-2 px-10 rounded-2xl resume-button navButton' type="submit" >Submit</button>
                        </form>
                    </section>
                )}
                {success && (
                    <section className='h-[30vh] pt-6 px-14 my-10 mx-5 text-center bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4'>
                        <p className='text-textLarge mb-4'>Thank you for getting in touch with me!</p>
                        <svg
                        
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 mb-2 text-green mx-auto animate-checkmark"
                        >
                            
                            <circle
                                cx="8"
                                cy="8"
                                r="7"
                                fill="none"
                                stroke=""
                                stroke-width="1"
                                stroke-dasharray="0 44"
                                className="animate-circle"
                            />

                            <path
                                strokeWidth="0.5"
                                fill-rule="evenodd"
                                d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <p className='text-textLarge mb-5'>I'll get back to you as soon as possible.</p>
                        <p className='text-textLarge'>Have a great day!</p>
                    </section>
                )}
                <p className='text-green pl-6 '>&lt;/form&gt;</p>
                <p className='text-green'>&lt;/Contact&gt;</p>
            </section>

        </main>
    )
}
export default ContactSection
