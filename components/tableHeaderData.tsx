interface Props {
    children?: JSX.Element,
    columnName: string
}
export default function TableHaderData({children, columnName}: Props) {
    return(
        <>
        <div className="flex gap-2 items-center w-1/6 p-4">
            <span className="font-medium text-sm text-[#667085]">{columnName}</span>
            <div>{children}</div>
        </div>
        </>
    )
}