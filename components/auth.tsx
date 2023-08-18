interface Props {
    children: JSX.Element,
}
export default function Auth({children}:Props) {
    return (
        <>
        <div className="flex dark:bg-white">
            <div className="w-1/2 grid content-center max-w-md mx-auto container">
                <img className="mb-8" src="/svg/logo-blue.svg" alt="" />
                {children}
            </div>

            <div className="w-1/2">
                <div className="bg-[url(/img/auth_cover.jpg)] bg-cover bg-no-repeat h-screen">
                    <img className="float-right mt-6 mr-4" src="/svg/logo.svg" alt="logobly logo" />
                    <div className="mx-4 absolute bottom-10 border rounded-xl p-5 bg-[#262626] bg-opacity-[.15]">
                        <p className="font-semibold text-2xl text-white">Given a full text query such das rotes Kleid our approach retrieves matching product images. You can try different queries in the demo and visually inspect retrieved images.</p>

                        <div className="flex justify-between mt-4">
                            <div className="flex flex-col">
                                <span className="font-medium text-2xl text-white">Cameron Williamson</span>
                                <span className="font-medium text-base text-white">Founder, Logobly</span>
                            </div>
                            <div className="flex">
                                <img src="/svg/star.svg" alt="star icon" />
                                <img src="/svg/star.svg" alt="star icon" />
                                <img src="/svg/star.svg" alt="star icon" />
                                <img src="/svg/star.svg" alt="star icon" />
                                <img src="/svg/star.svg" alt="star icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}