import Auth from "@/components/auth";
import Label from "@/components/form/label";
import Email from "@/components/form/inputEmail";
import Password from "@/components/form/inputPassword";
//import React, { useState } from "react";
import Button from "@/components/baseButton";
import Link from "next/link";
export default function Page() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    return (
        <>
            <Auth>
                <div className="">
                    <div className="text-center">
                        <h1 className="text-black text-4xl font-semibold">Welcome back 👋</h1>
                        <p className="flex-normal text-base text-[#667085] mt-4">Lorem ipsum dolor sit amet consectetur. Hendrerit vulputate vitae gravida risus rhoncus. Montes nam amet</p>
                    </div>
                    <form method="post" className="mt-8">
                        <Label label="Email" htmlFor="email"/>
                        <Email 
                            id="Email"
                            placeholder="Please enter your email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />

                        <Label label="Password" htmlFor="password"/>
                        <Password 
                            id="Email"
                            placeholder="Please enter your email"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-between">
                            <div className="flex gap-1 items-center">
                                <input type="checkbox" name="" id="" />
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
