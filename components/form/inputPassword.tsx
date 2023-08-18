import React, { ChangeEvent } from "react";

interface Props {
    id: string;
    placeholder: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}
export default function Password({ id, placeholder, value, onChange  }: Props) {
    return (
        <>
        <div className='relative block mt-1 pb-3'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3 -mt-2'>
                <img src="/svg/password.svg" alt="Email Icon" />
            </span>
            <input
                type='password'
                id={`${id}`}
                value={value}
                onChange={onChange}
                placeholder = {`${placeholder}`}
                className="w-full dark:text-black border border-[#D0D5DD] rounded-lg py-2 px-3.5 pl-10  focus:outline-none"
            />
        </div>
        </>
    )
}