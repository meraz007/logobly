import Label from "./label";
interface Props {
    id:string,
    label:string
}
export default function InputRadio({id, label}: Props) {
    return(
        <>
            <div className="border rounded-md py-3 px-4 w-full flex gap-2">
                <input type="radio" id={id} />
                <Label label={label} htmlFor={id} />
            </div>
        </>
    )
}