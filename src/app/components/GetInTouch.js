'use client'
import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from 'emailjs-com';
import * as Unicons from '@iconscout/react-unicons';

export default function GetInTouch() {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5xlb7mr', 'template_7jpfb9v', form.current, 'CbC0hggHbgKz6vi-m')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setSuccessMessage('Your message has been sent successfully!');
                form.current.reset();
            }, (err) => {
                console.error('Failed to send email. Error:', err);
                setSuccessMessage('Failed to send your message. Please try again.');
            });
    };

    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Get In Touch !</h3>
                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>

                {successMessage && (
                    <div className="mb-4 text-green-600 text-center">
                        {successMessage}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="grid lg:grid-cols-12 lg:gap-5">
                                    <div className="lg:col-span-6 mb-5">
                                        <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Your Name :" required />
                                    </div>

                                    <div className="lg:col-span-6 mb-5">
                                        <input name="email" id="email" type="email" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Your Email :" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <input name="subject" id="subject" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Write your Subject :" />
                                    </div>

                                    <div className="mb-5">
                                        <textarea name="message" id="comments" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Write your Message :" required></textarea>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="lg:ms-8">
                            <div className="flex">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0"/>
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                                    <Link href="tel:+152534-468-854" className="text-slate-400 text-[15px]">+92 317-628-3622</Link>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0"/>
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                                    <Link href="mailto:contact@example.com" className="text-slate-400 text-[15px]">basitkhanbasit640@gmail.com</Link>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0"/>
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                                    <p className="text-slate-400 text-[15px] mb-2">Jaranwala Rd, Kohinoor City Mezzanine Floor, Office#61, Kohinoor City, Faisalabad, Punjab 38000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}