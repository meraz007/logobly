interface Props {
    buttonText: string,
    type: "button" | "submit",
    className?: string
}
export default function Button ({buttonText, type, className}: Props) {
    return(
        <>
        <button className={`${className} w-full text-medium text-base text-white bg-[#1C64F2] rounded-lg py-3`} type={type}>{buttonText}</button>
        </>
    )
}