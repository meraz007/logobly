import Auth from "@/components/auth";
import Label from "@/components/form/label";
import Email from "@/components/form/inputEmail";
import Password from "@/components/form/inputPassword";
import Link from "next/link";
import Button from "@/components/baseButton";
export default function Page() {
    return (
        <>
            <Auth>
                <div>
                    <h1 className="text-black text-4xl font-semibold">Get started now ✨</h1>
                    <p className="flex-normal text-base text-[#667085] mt-4">Lorem ipsum dolor sit amet consectetur. Hendrerit vulputate vitae gravida risus rhoncus. Montes nam amet</p>
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
