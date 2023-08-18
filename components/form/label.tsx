interface Props {
    label: string,
    htmlFor: string
}
export default function Label({ label, htmlFor }: Props) {
    return (
        <>
        <label className="font-medium text-sm text-[#344054]" htmlFor={htmlFor}>{label}</label>
        </>
    )
}