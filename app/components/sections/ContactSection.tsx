'use client'
import { FC,useRef,useState } from 'react'
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await axios.post('/api/sendEmail', formData);
            if (response.status === 200) {
                setSuccess(true);
            } else {
                setError('Failed to send message.');
            }
        } catch (err) {
            setError( 'An error occurred.');
        } finally {
            setSubmitting(false);
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
                <section>
                    <form className='flex flex-col items-center gap-y-1 mb-4' onSubmit={handleSubmit} >
                        <label className='block text-textLarge text-center' htmlFor="name">Name</label>
                        <input onChange={handleChange} value={formData.name} className='w-3/4 rounded-2xl p-2 bg-text navButton' type="text" name="name" id="name" />
                        <label className='block text-textLarge text-center' htmlFor="email">Email</label>
                        <input onChange={handleChange} value={formData.email} className='w-3/4 rounded-2xl p-2 navButton bg-text' type="email" name="email" id="email" />
                        <label className='block text-textLarge text-center' htmlFor="message">Message</label>
                        <textarea onChange={handleChange} value={formData.message} className='rounded-2xl navButton bg-text mb-5 w-3/4' name="message" id="message" cols={33} rows={5}></textarea>
                        <button className='border border-green text-green py-2 px-10 rounded-2xl resume-button' type="submit" >Submit</button>
                    </form>
                </section>
                <p className='text-green pl-6 '>&lt;/form&gt;</p>
                <p className='text-green'>&lt;/Contact&gt;</p>
            </section>

        </main>
    )
}
export default ContactSection
