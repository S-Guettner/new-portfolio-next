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
    const [success, setSuccess] = useState(false);
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

            <section className='p-4 pb-0 mb-4 md:p-20 lg:px-36 lg:pt-20 2xl:px-[25rem]'>
                <p className='text-green mb-2 md:text-lg'>&lt;Contact&gt;</p>
                <h1 className='text-textLarge text-3xl mb-1 font-bold pl-4 md:text-[1.5rem]'><span className='text-green'>&lt;</span>Send me a message <span className='text-green'>/&gt;</span> </h1>
                <p className='text-green pl-6 md:text-md'>&lt;p&gt;</p>
                <div className='text-text'>
                    <p className='pl-8 md:text-[1rem] md:my-4 xl:pr-[35rem]'>Are you looking to hire a motivated developer? I'm open to new roles and projects. Use the form below to reach out, and let's discuss how I can add value to your team.</p>
                </div>
                <p className='text-green pl-6 md:text-md'>&lt;/p&gt;</p>
                <p className='text-green pl-6 md:text-md'>&lt;form&gt;</p>
                {!success && (
                    <section>
                        <form className='flex flex-col items-center gap-y-1 mb-4 xl:w-1/2 xl:mx-auto' onSubmit={handleSubmit} >
                            <label className='block text-textLarge text-center md:text-lg' htmlFor="name">Name</label>
                            <input onChange={handleChange} value={formData.name} className={`w-3/4 rounded-2xl p-2 border border-green focus:outline-none text-green  bg-text navButton ${errorMessage === "Name missing" ? errorClass : ""}`} type="text" name="name" id="name" />
                            <label className='block text-textLarge text-center md:text-lg' htmlFor="email">Email</label>
                            <input onChange={handleChange} value={formData.email} className={`w-3/4 rounded-2xl p-2 border border-green focus:outline-none text-green  navButton bg-text ${errorMessage === "Email missing" ? errorClass : ""}`} type="email" name="email" id="email" />
                            <label className='block text-textLarge text-center md:text-lg' htmlFor="message">Message</label>
                            <textarea onChange={handleChange} value={formData.message} className={`rounded-2xl p-2 navButton border text-green  border-green focus:outline-none bg-text mb-5 w-3/4 ${errorMessage === "Message missing" ? errorClass : ""}`} name="message" id="message" cols={33} rows={5}></textarea>
                            {errorMessage && (
                                <p className='text-red-500 mb-5'>"{errorMessage}"</p>

                            )}
                            <button className='border border-green text-green py-2 px-10 rounded-2xl resume-button navButton' type="submit" >Submit</button>
                        </form>
                    </section>
                )}
                {success && (
                    <section className=' pt-6 px-14 my-10 mx-5 text-center bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4 md:py-10 xl:w-1/2 xl:mx-auto'>
                        <p className='text-textLarge mb-4 md:text-xl md:mb-8'>Thank you for getting in touch with me!</p>
                        <svg

                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 mb-2 text-green mx-auto animate-checkmark md:mb-8"
                        >

                            <circle
                                cx="8"
                                cy="8"
                                r="7"
                                fill="none"
                                stroke=""
                                strokeWidth="1"
                                stroke-dasharray="0 44"
                                className="animate-circle"
                            />

                            <path
                                strokeWidth="0.5"
                                fillRule="evenodd"
                                d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <p className='text-textLarge mb-5 md:text-lg'>I'll get back to you as soon as possible.</p>
                        <p className='text-textLarge md:text-lg'>Have a great day!</p>
                    </section>
                )}
                <p className='text-green pl-6 md:text-md'>&lt;/form&gt;</p>
                <section className='flex justify-center gap-10'>
                    <div className='text-green hover:-translate-y-1 hover:scale-110'>
                        <a href="https://www.linkedin.com/in/sven-g%C3%BCttner-335739162/">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
                        </a>
                    </div>
                    <div className='text-green hover:-translate-y-1 hover:scale-110'>
                        <a href="https://github.com/S-Guettner">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                        </a>
                    </div>
                </section>
                <p className='text-green md:text-lg'>&lt;/Contact&gt;</p>
            </section>

        </main>
    )
}
export default ContactSection
