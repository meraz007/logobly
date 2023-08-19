import Auth from "@/layout/auth";
import Label from "@/components/form/label";
import Email from "@/components/form/inputEmail";
import Password from "@/components/form/inputPassword";
import Link from "next/link";
import Button from "@/components/baseButton";
import Name from "@/components/form/inputName";
import InputRadio from "@/components/form/inputRadio";
export default function Page() {
    return (
        <>
            <Auth>
                <div>
                    <h1 className="text-black text-4xl font-semibold">Get started now ✨</h1>
                    <p className="flex-normal text-base text-[#667085] mt-4">Lorem ipsum dolor sit amet consectetur. Hendrerit vulputate vitae gravida risus rhoncus. Montes nam amet</p>
                    <form method="post" className="mt-8">
                        <div>
                            <Label label="Full Name" htmlFor="full_name"/> 
                            <Name
                                id="full_name"
                                placeholder="Please enter your full name"
                                // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
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
                        <div>
                            <Label label="Select type of yor role" htmlFor="" />
                            <div className="flex gap-3 mt-1">
                                <InputRadio id="admin" label="Admin"/>
                                <InputRadio id="user" label="User"/>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center mt-3">
                            <input type="checkbox" name="" id="checkbox" />
                            <label className="font-medium text-sm text-[#344054]" htmlFor="checkbox">I agree to all the <span className="text-[#1570EF] ">term, Privacy Policy</span> and <span className="text-[#1570EF] ">Fees.</span></label>
                        </div>

                        <div>
                            <Button type="submit" className="my-6" buttonText="Sign up" />
                        </div>
                    </form>
                    <p className="text-center font-medium text-base text-[#667085]">Already have an account? 
                        <Link href={'login'} className="text-normal text-[#1570EF] ml-1">Log in</Link>
                    </p>
                </div>
            </Auth>
        </>
    )
}
