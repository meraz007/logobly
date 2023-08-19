interface Props {
    menu: string
    children: JSX.Element,
}
export default function SidebarMenu({menu, children}:Props) {
    return(
        <>
        <ul className="">
            <li className="flex gap-2 py-4 hover:border hover:rounded hover:bg-[#EAECF0] pl-2 cursor-pointer">
                {children}
                {menu}
            </li>

        </ul>
        </>
    )
}