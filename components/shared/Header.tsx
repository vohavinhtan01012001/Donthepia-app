'use client'
import Link from "next/link";
import Button from "../ui/button";
import NavItems from "./NavItems";
import { IconSet } from "./IconSet";
import { useRouter } from "next/navigation";
import { MenuMobile } from "./menuMobile/MenuMobile";

const Header = () => {
    const router = useRouter()
    return <div className="w-full backdrop-blur-lg h-[108px] px-[49px] max-[1620px]:px-[10px] fixed z-50">
        <div className="w-full flex items-center justify-between h-full">

            <div className="h-full flex items-center max-[1450px]:justify-center max-[1450px]:w-full">
                <div className="hidden max-[1450px]:block">
                    <MenuMobile />
                </div>
                <Link
                    href={'/'}
                    className="max-[500px]:hidden"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="211" height="26">
                        <path fillRule="evenodd" fill="#FFF" d="m205.897 24.758-2.379-5.508h-11.899l-2.346 5.508h-4.555L195.427.96h4.351l10.743 23.798h-4.624zM197.568 5.38l-4.453 10.403h8.941L197.568 5.38zM177.567.96h4.419v23.798h-4.419V.96zm-14.186 16.93h-5.371v6.868h-4.42V.96h9.791c6.256 0 10.131 3.196 10.131 8.465 0 5.236-3.875 8.465-10.131 8.465zm-.204-13.19h-5.167v9.451h5.167c3.876 0 5.882-1.734 5.882-4.726S167.053 4.7 163.177 4.7zM131.266.96h17.372v3.706h-12.953v6.187h11.491v3.637h-11.491v6.562h13.429v3.706h-17.848V.96zm-10.392 13.599h-12.307v10.199h-4.42V.96h4.42v9.825h12.307V.96h4.419v23.798h-4.419V14.559zM93.361 24.758h-4.419V4.7h-7.887V.96h20.194V4.7h-7.888v20.058zM61.378 8.643v16.115h-4.385V.96h3.637l13.123 16.114V.96h4.386v23.798h-3.638L61.378 8.643zM39.794 25.098c-7.377 0-12.816-5.202-12.816-12.239C26.978 5.822 32.417.62 39.794.62c7.378 0 12.817 5.168 12.817 12.239 0 7.071-5.439 12.239-12.817 12.239zm0-20.602c-4.793 0-8.363 3.501-8.363 8.363s3.57 8.363 8.363 8.363c4.794 0 8.364-3.501 8.364-8.363s-3.57-8.363-8.364-8.363zM11.238 24.758H.835V.96h10.403c7.717 0 12.987 4.76 12.987 11.899 0 7.139-5.27 11.899-12.987 11.899zM11.034 4.7H5.255v16.318h5.779c5.303 0 8.737-3.229 8.737-8.159 0-4.929-3.434-8.159-8.737-8.159z" />
                    </svg>
                </Link>
            </div>
            <div className="flex-1 px-[137px] max-[1780px]:px-[50px] h-full max-[1450px]:hidden">
                <NavItems />
            </div>
            <div className="flex items-center justify-between gap-[32px]">
                <div className="max-[500px]:hidden">
                    <IconSet
                        name={'earth'}
                        width={27}
                        height={27}
                    />
                </div>
                <div>
                    <Button
                        icon={{
                            name: 'right_arrow',
                            height: 12,
                            width: 12,
                            position: 'right',
                        }}
                        className="font-semibold w-[134px]"
                        onClick={() => router.push('/roadmap')}
                    >
                        NFT 구매
                    </Button>
                </div>
            </div>
        </div>
    </div>
}

export default Header;