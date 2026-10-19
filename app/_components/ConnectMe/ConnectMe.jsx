'use client'
import React, { useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import Reveal from "../Reveal/Reveal";


export default function ContactForm() {


    const [status, setStatus] = useState("idle");

    const handleSend = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            setStatus("sent");
            form.reset();
        } catch {
            setStatus("error");
        }
    };
    return (
        <section id="ConectMe" className="px-4 py-6 md:px-6 dark:bg-black">
            <TitleSection title="Connect Me" />
            <div className="mx-auto grid max-w-5xl items-start gap-16 md:grid-cols-2">
                <Reveal direction="left">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl dark:text-slate-50">
                            Let's Talk
                        </h2>
                        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your
                            project and provide help.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Email</h3>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="flex items-center bg-slate-200 dark:bg-neutral-800 w-8 h-8 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-slate-600 dark:text-slate-50"
                                        stroke="currentColor" viewBox="0 0 682.667 682.667" aria-hidden="true">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000" />
                                            </clipPath>
                                        </defs>
                                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" strokeMiterlimit="10" strokeWidth="40"
                                                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                data-original="#000000" />
                                            <path
                                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                data-original="#000000" />
                                        </g>
                                    </svg>
                                </div>
                                <a href="mailto:momenalberann6@gmail.com" className="text-sm ml-4">
                                    <small className="block text-slate-900 dark:text-slate-50">Mail</small>
                                    <span className="font-semibold text-teal-600 dark:text-slate-400">momenalberann6@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Socials</h3>
                        <ul className="m-0 flex list-none items-center gap-3 p-0">

                            {/* <!-- LinkedIn --> */}
                            <li className="group relative">
                                <a
                                    href="https://www.linkedin.com/in/momen-mohamed-fadel"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link relative flex h-12.5 w-12.5 items-center justify-center overflow-hidden rounded-full border border-[#1B3044] bg-[#071321] text-[#F0F4F8] transition-all duration-300 hover:border-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19B6F1]"
                                >
                                    <span className="absolute bottom-0 left-0 h-0 w-full bg-[#0274B3] transition-all duration-300 group-hover/link:h-full"></span>

                                    <svg className="relative z-10 h-5.75 w-5.75" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a>

                                <span className="invisible absolute -top-7.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0274B3] px-2.5 py-1.5 text-sm text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:-top-11.25 group-hover:opacity-100">
                                    LinkedIn
                                </span>
                            </li>

                            {/* <!-- GitHub --> */}
                            <li className="group relative">
                                <a
                                    href="https://github.com/Momenmohamed1"
                                    aria-label="GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link relative flex h-12.5 w-12.5 items-center justify-center overflow-hidden rounded-full border border-[#1B3044] bg-[#071321] text-[#F0F4F8] transition-all duration-300 hover:border-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19B6F1]"
                                >
                                    <span className="absolute bottom-0 left-0 h-0 w-full bg-[#24262A] transition-all duration-300 group-hover/link:h-full"></span>

                                    <svg className="relative z-10 h-5.75 w-5.75" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </a>

                                <span className="invisible absolute -top-7.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#24262A] px-2.5 py-1.5 text-sm text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:-top-11.25 group-hover:opacity-100">
                                    GitHub
                                </span>
                            </li>

                            {/* <!-- Instagram --> */}
                            <li className="group relative">
                                <a
                                    href="https://instagram.com/"
                                    aria-label="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link relative flex h-12.5 w-12.5 items-center justify-center overflow-hidden rounded-full border border-[#1B3044] bg-[#071321] text-[#F0F4F8] transition-all duration-300 hover:border-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19B6F1]"
                                >
                                    <span className="absolute bottom-0 left-0 h-0 w-full bg-[linear-gradient(45deg,#405de6,#5b51db,#b33ab4,#c135b4,#e1306c,#fd1f1f)] transition-all duration-300 group-hover/link:h-full"></span>

                                    <svg className="relative z-10 h-5.75 w-5.75" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </a>

                                <span className="invisible absolute -top-7.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#C135B4] px-2.5 py-1.5 text-sm text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:-top-11.25 group-hover:opacity-100">
                                    Instagram
                                </span>
                            </li>

                            {/* <!-- Telegram --> */}
                            <li className="group relative">
                                <a
                                    href="https://telegram.org/"
                                    aria-label="Telegram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link relative flex h-12.5 w-12.5 items-center justify-center overflow-hidden rounded-full border border-[#1B3044] bg-[#071321] text-[#F0F4F8] transition-all duration-300 hover:border-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19B6F1]"
                                >
                                    <span className="absolute inset-x-0 bottom-0 h-0 bg-[#0088CC] transition-all duration-300 ease-in-out group-hover/link:h-full" />
                                    <svg
                                        className="relative z-10 h-6.25 w-6.25"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z" />
                                    </svg>
                                </a>
                                <span className="pointer-events-none invisible absolute left-1/2 -top-7.5 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0088CC] px-2.5 py-1.5 text-sm text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:-top-11.25 group-hover:opacity-100">
                                    Telegram
                                </span>
                            </li>

                        </ul>
                    </div>
                </Reveal>

                <Reveal as="form" direction="right" delay={120} onSubmit={handleSend} className="space-y-4">
                    {/* Honeypot: مخفي عن المستخدم، لو اتملى يبقى بوت => نرفض الإرسال */}
                    <input
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    />
                    <div>
                        <label htmlFor="name"
                            className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Name</label>
                        <input type="text" id="name" name="name" placeholder="Momen" required autoComplete="name"
                            className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                    </div>
                    <div>
                        <label htmlFor="email"
                            className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Email</label>
                        <input type="email" id="email" name="email" placeholder="momen@gmail.com" required autoComplete="email"
                            className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Phone
                            number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+201234567890" autoComplete="tel"
                            className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                    </div>
                    <div>
                        <label htmlFor="message"
                            className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Message</label>
                        <textarea placeholder="Write message" rows="6" type="text" id="message" required name="message"
                            className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"></textarea>
                    </div>

                    <button type="submit" disabled={status === "sending"}
                        className="py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-teal-600 bg-teal-600 hover:bg-teal-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-70">{status === "sending" ? "Sending..." : "Send message"}</button>
                    <p aria-live="polite" role="status" className="min-h-5 text-sm">
                        {status === "sent" && <span className="text-teal-600">Message sent. Thank you!</span>}
                        {status === "error" && <span className="text-red-500">Something went wrong. Try again.</span>}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}