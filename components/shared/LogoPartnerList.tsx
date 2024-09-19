import Image from 'next/image';

const LogoPartnerList = () => {
    return <div
        className="pt-[197px] pb-[257px]"
    >
        <div className="pt-[198px] pb-[140px] flex items-center justify-between">
            <div className='pr-[10px]'>
                <Image
                    src={'/assets/logo-partner-01.png'}
                    width={228}
                    height={108}
                    alt='logo-partner'
                />
            </div>
            <div className='pr-[12px]'>
                <Image
                    src={'/assets/logo-partner-02.png'}
                    width={228}
                    height={108}
                    alt='logo-partner'
                />
            </div>
            <div className='pr-[48px]'>
                <Image
                    src={'/assets/logo-partner-03.png'}
                    width={228}
                    height={108}
                    alt='logo-partner'
                />
            </div>
            <div className='pr-[98px]'>
                <Image
                    src={'/assets/logo-partner-04.png'}
                    width={228}
                    height={108}
                    alt='logo-partner'
                />
            </div>
            <div className='pr-[72px]'>
                <Image
                    src={'/assets/logo-partner-05.png'}
                    width={228}
                    height={108}
                    alt='logo-partner'
                />
            </div>
            <div className='pr-[23px]'>
                <Image
                    src={'/assets/logo-partner-06.png'}
                    width={228}
                    height={108}
                    alt='logo-partner'
                />
            </div>
            <div className='pr-[10px]'>
                <Image
                    src={'/assets/logo-partner-07.png'}
                    width={228}
                    height={108}
                    alt='logo-partner'
                />
            </div>
        </div>
    </div>
}

export default LogoPartnerList;