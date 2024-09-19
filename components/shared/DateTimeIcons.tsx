import Image from "next/image";

const DateTimeIcons = () => {
    return <div className="flex items-center ">
        <div>
            <Image
                src={'/assets/days.png'}
                width={204}
                height={253}
                alt='about image'
            />
        </div>
        <div>
            <Image
                src={'/assets/hours.png'}
                width={204}
                height={253}
                alt='about image'
            />
        </div>
        <div>
            <Image
                src={'/assets/minutes.png'}
                width={204}
                height={253}
                alt='about image'
            />
        </div>
    </div>
}
export default DateTimeIcons;