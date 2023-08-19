"use client";
import Link from "next/link";
import Auth from "@/layout/auth";
import React, { useState } from "react";
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import Label from "@/components/form/label";
import Button from "@/components/baseButton";
import Email from "@/components/form/inputEmail";
import Password from "@/components/form/inputPassword";

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    // const dispatch = useDispatch();

    // const signInMutation = useMutation(async (credentials) => {
    //     const response = await fetch('/api/signin', {
    //     method: 'POST',
    //     body: JSON.stringify(credentials),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     });

    //     const data = await response.json();
    //     return data;
    // });
    const signIn = async (e: any) => {
        e.preventDefault();

      }
    return (
        <>
            <Auth>
                <div className="">
                    <div className="text-center">
                        <h1 className="text-black text-4xl font-semibold">Welcome back 👋</h1>
                        <p className="flex-normal text-base text-[#667085] mt-4">Lorem ipsum dolor sit amet consectetur. Hendrerit vulputate vitae gravida risus rhoncus. Montes nam amet</p>
                    </div>
                    <form method="post" onSubmit={signIn} className="mt-8">
                        <Label label="Email" htmlFor="email"/>
                        <Email 
                            id="Email"
                            placeholder="Please enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Label label="Password" htmlFor="password"/>
                        <Password 
                            id="Email"
                            placeholder="Please enter your email"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-between">
                            <div className="flex gap-1 items-center">
                                <input 
                                    type="checkbox"
                                    id="checkbox" 
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                <Label label="Remember me" htmlFor="checkbox" />
                            </div>
                            <Link className="text-[#1570EF] text-medium text-base" href={'/'}>Forgot Password?</Link>
                        </div>
                        <div>
                            <Button type="submit" className="my-6" buttonText="Log in" />
                        </div>
                    </form>
                    <p className="text-center font-medium text-base text-[#667085]">Don’t have an account? 
                        <Link href={'signup'} className="text-normal text-[#1570EF] ml-1">Sign Up for free</Link>
                    </p>
                </div>
            </Auth>
        </>
    )
}
