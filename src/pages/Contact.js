import '../css/contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SiGmail, SiTelegram, SiSkype } from "react-icons/si";
import { BiMailSend, BiSolidCopy } from "react-icons/bi";
import { FaMobileButton } from "react-icons/fa6";
import { useEffect } from 'react';

const Contact = () => {

    const copy = (text, id) => {
        navigator.clipboard.writeText(text);
        const btn = document.getElementById(id)
        const oldText = btn.innerHTML
        btn.innerText = 'Copied'
        setTimeout(() => {
            btn.innerHTML = oldText
        }, 1000)
    }

    useEffect(() => {
        setTimeout(() => document.getElementById('li1').classList.remove('actives'), 500)
        setTimeout(() => document.getElementById('li2').classList.remove('actives'), 1000)
        setTimeout(() => document.getElementById('li3').classList.remove('actives'), 1500)
        setTimeout(() => document.getElementById('li4').classList.remove('actives'), 2000)
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setBtnDisabled(true)
        emailjs.sendForm('service_manmxhm', 'template_mjdoi5b', form.current, 'W4QLjciGHEj19CYT5')
            .then((result) => {
                setName('')
                setEmail('')
                setMsg('')
                setBtnDisabled(false)
                document.getElementById('msg-alert').style.display = 'block'
                setTimeout(() => document.getElementById('msg-alert').style.display = 'none', 2000)
            }, (error) => {
                console.log(error.text);
            }
            );
    };

    return (
        <>
            <div className="page">
                <div className='page-flex'>
                    <div className='page-left'>
                        <div className="contact">
                            <div className='contacts'>
                                <li id='li1' className='actives'>
                                    <span><SiGmail /></span>
                                    <p>Gmail</p>
                                    <button id='gmail' onClick={() => copy('markronaldsicad@gmail.com', 'gmail')}>Copy <BiSolidCopy /></button>
                                </li>
                                <li id='li2' className='actives'>
                                    <span><FaMobileButton /></span>
                                    <p>Phone</p>
                                    <button id='phone' onClick={() => copy('09277535961', 'phone')}>Copy <BiSolidCopy /></button>
                                </li>
                                <li id='li3' className='actives'>
                                    <span><SiTelegram /></span>
                                    <p>Telegram</p>
                                    <button id='telegram' onClick={() => copy('https://t.me/mnald12', 'telegram')}>Copy <BiSolidCopy /></button>
                                </li>
                                <li id='li4' className='actives'>
                                    <span><SiSkype /></span>
                                    <p>Skype</p>
                                    <button id='skype' onClick={() => copy('https://join.skype.com/invite/wnJEvodd9aUB', 'skype')}>Copy <BiSolidCopy /></button>
                                </li>
                            </div>
                            <div className="contact-form">
                                <p id='msg-alert' className='msg-alert'>Success! Thank you for your message.</p>
                                <form ref={form} onSubmit={sendEmail}>
                                    <input name="user_name" type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name" required />
                                    <br />
                                    <input name="user_email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" required />
                                    <br />
                                    <textarea name="message" placeholder='enter your message' value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
                                    <br />
                                    <div className='d-flex-right'>
                                        <button disabled={btnDisabled}>Send <BiMailSend className='send' /> </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='page-right'>
                        <div className='page-title'>
                            <h1>~ MY</h1>
                            <h1>Contacts</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact