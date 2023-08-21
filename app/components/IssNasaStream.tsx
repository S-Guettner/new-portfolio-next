import { FC, useState } from 'react'

interface IssNasaStreamProps {

}

const IssNasaStream: FC<IssNasaStreamProps> = ({ }) => {
    
    const [streamOpen, setStreamOpen] = useState(false)
    
    return (
        <section>
            <div className='flex justify-between items-center text-green'>
                <p className=' mb-2 pl-8 '>&lt;IssNasaStream&gt;</p>
                {streamOpen && (
                    <svg onClick={() => setStreamOpen(false)} className='pb-3 pr-2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                )}
            </div>
            {!streamOpen && (
                <div>
                    <p className='text-green pl-16'>&lt;button&gt;</p>

                    <button onClick={() => setStreamOpen(true)} className='text-green ml-2 pl-24'>
                        <p className=' border p-2 my-2 rounded-2xl border-green resume-button'>open Stream</p>
                    </button>


                    <p className='mb-5 text-green pl-16'>&lt;button&gt;</p>
                </div>
            )}

            {streamOpen && (
                <section className='flex mb-2 justify-center text-green'>
                    <iframe className=' rounded-2xl bg-background' width="560" height="315" src="https://www.youtube-nocookie.com/embed/KG6SL6Mf7ak?controls=0&autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </section>
            )}
            <p className='text-green pl-8'>&lt;/IssNasaStream&gt;</p>
        </section>
    )
}

export default IssNasaStream