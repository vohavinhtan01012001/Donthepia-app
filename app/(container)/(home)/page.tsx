import bgHome1 from '@/public/assets/bgHome1.png'
import imgMap from '@/public/assets/img-map.png'
import bgDonqNftNodes from '@/public/assets/bgDonqNftNodes.png'
import Image from 'next/image';
import DateTimeIcons from '@/components/shared/DateTimeIcons';
import { IconSet } from '@/components/shared/IconSet';
import ButtonNetworkList from '@/components/shared/ButtonNetworkList';


const listName = ['NFT Nodes', 'Total burned', 'DONP Price', 'DONP Holders']

const listTokenInfo = [
    {
        title: 'Taken Information',
        text: 'Node'
    },
    {
        title: 'Taken symbol',
        text: 'Node'
    },
    {
        title: 'Blockchain',
        text: 'BNB Chain'
    },
    {
        title: 'Total Supply',
        text: '1,000,000,000'
    }
]

const listTokenInfo2 = [
    {
        title: 'Eco-System',
        price: 400000000,
        percent: 40,
    },
    {
        title: 'Company Reserves',
        price: 100000000,
        percent: 10,
    },
    {
        title: 'Marketing',
        price: 200000000,
        percent: 20,
    },
    {
        title: 'Team / Advisor',
        price: 100000000,
        percent: 10,
    },
    {
        title: 'Ciculation',
        price: 100000000,
        percent: 10,
    },
    {
        title: 'Contributor',
        price: 100000000,
        percent: 10,
    },
]

const Home = () => {
    const formatNumber = (number: number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return <div className=''>
        <div
            style={{
                backgroundImage: `url(${bgHome1.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '110vh',
                width: '100%'
            }}>
        </div>
        <div className='pb-[101px]'>
            <div className='pt-7 h-[110vh]'>
                <div className='grid grid-cols-2 gap-5 px-[50px] pt-[138px] h-full'>
                    <div className=''>
                        <div className=''>
                            <p
                                className='custom-text-heading'
                            >
                                A digital adventure with
                                Donthepia, The beginning
                                of a decentralized art That connects the world.
                            </p>
                        </div>
                        <div className='w-[431px] mx-auto pt-[90px]'>
                            <p
                                className='text-left custom-text'
                            >
                                돈키호테 유토피아에 오신 것을 환영합니다. <br />
                                옛날 옛적, 돈키호테 유토피아 세계에 전염병이 발생하며 모든 곳이 중앙집권식으로 오염되고 말았습니다.<br />
                                이 오염된 세계에서 우리는 새로운 모험을 시작합니다.<br />
                                돈키호테는 크루즈를 타고 세계 데이터의 바다를<br />
                                항해합니다. 이 여정을 통해 분산화된 친구, 돈통 유저 <br />
                                서버노드를 모아 최후의 보물섬으로 떠나는 것, 이는 <br />
                                돈키호테의 여정이자 우리의 목표입니다. 이를 통해 <br />
                                블록체인의 탈중앙화의 의미를 다시 찾아가려 합니다. <br />
                                돈키호테와 함께 새로운 세계를 세우고, 미래의 예술과<br />
                                기술을 효과적으로 활용해보세요.<br />
                                언제든 글로벌 DONQ NFT노드 구성에 합류할 수<br />
                                있습니다. 지금 함께하시겠습니까?
                            </p>
                        </div>
                    </div>
                    <div className='h-full flex items-center gap-[51px]'>
                        <div className='flex flex-col justify-end h-full pb-32'>
                            <Image
                                src={'/assets/imgAbout1.png'}
                                width={386}
                                height={396}
                                alt='about image'
                            />
                        </div>
                        <div className='flex flex-col justify-end h-full '>
                            <Image
                                src={'/assets/imgAbout2.png'}
                                width={395}
                                height={679}
                                alt='about image'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className='relative mb-[40px]'
            style={{
                backgroundImage: `url(${imgMap.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '104vh',
                width: '100%'
            }}
        >
            <div className='w-[755px] pt-[98px] mx-auto'>
                <p className="custom-text-heading text-center ">Join the community to get even more benefits.</p>
            </div>
            <div className='absolute top-0 bottom-0 right-[48px] flex flex-col justify-center'>
                <ButtonNetworkList />
            </div>
            <div className='absolute bottom-0 left-[48px]'>
                <DateTimeIcons />
            </div>
            <div className='absolute bottom-0 right-[48px] pb-2'>
                <div className='px-4 uppercase text-base font-poppins bg-white text-black  w-[676px] flex items-center justify-around rounded-full h-[83px]'>
                    {
                        listName.map((item, index) =>
                            <div key={index}>
                                <p>{item}</p>
                                <p>0000.000</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
        <div
            className='bg-black w-full h-[140vh] '
        >
            <div
                className='mx-auto '
                style={{
                    backgroundImage: `url(${bgDonqNftNodes.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    height: '100%',
                    width: '100%'
                }}
            >
                <div className='w-[720px] float-end mr-[150px] pt-[140px] pb-[120px]'>
                    <p className='custom-text-heading'>
                        About the antipathy of
                        DONQ NFT Nodes
                    </p>
                    <p className='custom-text pr-[57px] pt-[45px]'>
                        DONQ NFT Node는 20번의 반감기가 있습니다. 반감기에는 DONQ NFT NODE가
                        100ea ~ 500ea 생성될 때마다 DONQ가 자동소각됩니다. 탈중앙화 방식으로 DONQ 코인 가격은 시장 유동성에 의해서 자유롭게 결정됩니다.
                    </p>
                </div>
                <div
                    className='w-full'
                >
                    <Image
                        src={'/assets/imgDonqNftNodes.png'}
                        width={1040}
                        height={592}
                        alt='about image'
                        className='mx-auto'
                    />
                </div>
            </div>
        </div>
        <div className='bg-black w-full h-screen mb-[216px] px-[48px]'>
            <div className='w-[630px] pt-[140px]'>
                <p className='custom-text-heading'>What is an
                    <br />
                    Eco-System DONQ?
                </p>
                <p className='pr-[54px] custom-text'>
                    DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에 대해서도 중앙 기관이나 제3자에 의한 허가가 필요없는 DAO 조직을
                    <br />형성하여 유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고 확장할 수 있도록 합니다.
                </p>
            </div>
            <div className='pt-[102px] w-[1516px] mx-auto relative'>
                <p className='text-[80px] text-[#232323] text-center font-poppins'>What does DAO stand for</p>
                <div className=' font-poppins text-[80px] text-white flex items-center justify-center mx-auto gap-[96px] overflow-x-hidden whitespace-nowrap border-y-[2px] border-y-[#686868]'>
                    <p>What is T2E?</p>
                    <p>What is T2E?</p>
                    <p>What is T2E?</p>
                </div>
                <p className='text-[80px] text-[#232323] text-center font-poppins'>Know about P2E</p>
                <div className='absolute bottom-8 right-[115px]'>
                    <div className='z-10'>
                        <IconSet
                            name='box'
                            height={429}
                            width={357}
                        />
                    </div>
                    <div className='absolute top-[82px] mx-auto w-full z-20'>
                        <div className=''>
                            <IconSet
                                name='chart'
                                width={80}
                                height={80}
                                className='mx-auto'
                            />
                        </div>
                        <p className='font-poppins text-[24px] text-black pt-[51px] text-center'>T2E</p>
                        <p className='font-pretendard w-[254px] text-center mx-auto pt-[10px]'>T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[120vh] w-full px-[202px] pb-[140px]'>
            <div className='flex items-start pt-[160px] justify-between h-full'>
                <div className='h-full'>
                    <div className=' flex items-center'>
                        <p className='text-[100px] leading-[100px] tracking-[-2px] text-[#f1302f] '>
                            Free Characters
                        </p>
                        <IconSet
                            name='star'
                            width={64}
                            height={64}
                            className='mt-[15px] ml-[22px]'
                        />
                    </div>
                    <p className='text-[100px] leading-[100px] tracking-[-2px] text-white pt-[35px]'>Interest farming</p>
                    <p className='text-[100px] leading-[100px] tracking-[-2px] text-white pt-[19px]'>Platform</p>
                    <p className='text-[100px] leading-[100px] tracking-[-2px] text-white pt-[41px]'>Governance</p>
                </div>
                <div className='w-[425px] text-[20px] text-white pt-4 h-full flex flex-col justify-between'>
                    <p className='font-pretendard'>
                        DONQ NFT NODE 보유자는 DonThePia (Donquixote The Utopia) 생태계에서 생성되는
                        <br />다양한 NFT 캐릭터들을 무상으로 받을 수 있습니다.
                        <br />보유한 NFT의 가치가 상승하면, NFT 거래소를 통해서
                        <br />거래를 할 수 있습니다.
                    </p>
                    <div className='pt-[337px]'>
                        <p className='font-pretendard text-xl leading-[32px] text-[#a1a1a1]'>DONQ NFT Nodes Holder’s Benefits</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='h-[120vh] px-[202px]'>
            <div className='pt-[130px] pb-[79px]'>
                <p className='custom-text-heading text-center'>DONQ Token Information</p>
            </div>
            <div className='mb-[92px] flex items-center justify-between w-[1516px] mx-auto border-y-[2px] border-y-[#686868] pr-[60px] pl-[8px]'>
                {
                    listTokenInfo.map((item, index) => {
                        return <div key={index} className='flex flex-col gap-[14px] py-[23px]'>
                            <p className='text-[#a1a1a1] text-base font-poppins uppercase'>{item.title}</p>
                            <p className='text-white uppercase text-base font-poppins'>{item.text}</p>
                        </div>
                    })
                }
            </div>
            <div className='flex items-start gap-[193px]'>
                <div className='pl-[40px] pr-[74px] '>
                    <Image
                        src={'/assets/imgTokenInfo.png'}
                        width={537}
                        height={461}
                        alt='about image'
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-[115px] gap-y-[80px] border-b-[2px] border-[#686868] pb-[126px]'>
                    {
                        listTokenInfo2.map((item, index) => {
                            return <div key={index}>
                                <p className='text-white text-[48px] leading-6 mb-3 font-poppins'>{formatNumber(item.price)}</p>
                                <p className='text-[#a1a1a1] leading-6 text-base font-poppins'>{`${item.title} (${item.percent}%)`}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Home;