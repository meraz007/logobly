import SidebarMenu from "@/components/sidebarMenu";

interface Props {
    children: JSX.Element,
    pageTitle: string
}
export default function AdminLayout({children, pageTitle}:Props) {
    return(
        <>
        <div className="dark:bg-white text-black h-screen flex">
            <div className="w-[20%] border-r px-4">
                <div className="flex justify-center py-6">
                    <img src="/svg/logo-blue.svg" alt="Logo" />
                </div>
                <div className="border-t"></div>

                <div className="flex justify-between my-4">
                    <span className="uppercase" >Business</span>
                    <img src="/svg/plus-icon.svg" alt="plus icon" />
                </div>
                <SidebarMenu menu="Dashboard">
                    <img src="/svg/home-trend.svg" alt="" />
                </SidebarMenu>
                <SidebarMenu menu="Stock">
                    <img src="/svg/stock.svg" alt="" />
                </SidebarMenu>
                <SidebarMenu menu="Notification">
                    <img src="/svg/notification.svg" alt="" />
                </SidebarMenu>
                <div className="border-t"></div>
                <span className="uppercase mt-8">Setting</span>
                <SidebarMenu menu="Profile">
                    <img src="/svg/profile.svg" alt="" />
                </SidebarMenu>
                <SidebarMenu menu="Settings">
                    <img src="/svg/settings.svg" alt="" />
                </SidebarMenu>
                <SidebarMenu menu="logout">
                    <img src="/svg/home-trend.svg" alt="" />
                </SidebarMenu>
            </div>
            <div className="w-[80%]">
                <div className="flex justify-between border-b px-4 items-center py-2">
                    <span className='font-medium text-3xl text-[#344054]'>{pageTitle}</span>
                    <div className="flex gap-1">
                        <img src="/img/profile.png" alt="" />
                        <div className="flex flex-col">
                            <span className="font-medium text-base text-[#25242F]">Esther Howard</span>
                            <span className="font-normal text-sm text-[#999999]">howare@property.com</span>
                        </div>
                    </div>
                </div>

                <div className="p-4">{children}</div>
            </div>
        </div>
        </>
    )
}