import Image from "next/image";
import UseStateBoxList from "@/components/shared/UserStateBoxList";
import LogoPartnerList from "@/components/shared/LogoPartnerList";
import QuestionsList from "@/components/shared/QuestionsList";
import Button from "@/components/ui/button";
import ButtonIcon from "@/components/shared/ButtonIcon";



const Roadmap = () => {

    return <div>
        <div className=" pt-[140px] flex items-start justify-between mb-[115px] gap-2 max-[940px]:flex-col overflow-hidden">
            <div className="w-[572px] flex flex-col gap-[45px] pl-[52px] max-[590px]:w-full max-[590px]:px-2">
                <p className="custom-text-heading">Roadmap for
                    DONQ NFT Nodes
                </p>
                <p className="custom-text">
                    DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에
                    <br />대해서도 중앙 기관이나 제3자에 의한 허가가 필요 없는 DAO 조직을
                    <br /> 형성하여 유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고 확장할
                    <br /> 수 있도록 합니다.
                </p>
            </div>
            <div className="pt-[77px] -mr-[47px] ">
                <Image
                    src={'/assets/img-loadmap.png'}
                    alt="image"
                    className="bg-[#000000]"
                    width={907}
                    height={748}
                />
            </div>
        </div>
        <div className="mb-[180px]">
            <div className="flex items-center justify-end w-full pr-[164px] pt-[140px] max-[700px]:px-2">
                <div className="w-[640px] max-[700px]:w-full">
                    <p className="custom-text-heading">
                        Team & Advisers for
                        DONQ NFT Nodes
                    </p>
                </div>
            </div>
            <UseStateBoxList />
        </div>
        <div>
            <LogoPartnerList />
        </div>
        <div className="pt-[140px] px-[45px] mb-[100px] max-[740px]:px-2">
            <p className="custom-text-heading w-[700px] pb-[54px] max-[740px]:w-full ">
                If you have questions,
                see our FAQ
            </p>
            <div className="flex flex-col items-end w-full ">
                <QuestionsList />
            </div>
        </div>
        <div className="bg-[#232323] relative h-[110vh] overflow-hidden">
            <div className="absolute -top-[49px] left-[228px]">
                <Image
                    src={'/assets/img-bottom-01.png'}
                    width={253}
                    height={253}
                    alt="img bottom"
                />
            </div>
            <div className="flex flex-col items-center justify-start pt-[290px] h-full relative z-20">
                <p className="text-[129px] font-poppins text-white uppercase font-semibold relative z-20 max-[730px]:text-5xl">Donthepia</p>
                <p className="font-pretendard text-[20px] text-[#878787] -mt-2 relative z-20 max-[730px]:px-2">더 많은 혜택을 받고 싶다면 DONTHEPIA 커뮤니티에 가입하세요.</p>
                <div className="absolute bottom-64 right-[235px] z-0">
                    <Image
                        src={'/assets/img-bottom-03.png'}
                        width={348}
                        height={348}
                        alt="img bottom"
                    />
                </div>
                <div className="flex items-center gap-[15px] pt-[60px] z-20">
                    <Button
                        icon={{
                            name: 'right_arrow',
                            height: 12,
                            width: 12,
                            position: 'right',
                        }}
                        className="font-semibold bg-white"
                        variant="secondary"
                    >
                        NFT 구매하기
                    </Button>
                    <Button
                        icon={{
                            name: 'right_arrow',
                            height: 12,
                            width: 12,
                            position: 'right',
                        }}
                        className="font-semibold"
                    >
                        NFT 구매하기
                    </Button>
                </div>
            </div>
            <div className="absolute -left-[231px] bottom-[250px]">
                <Image
                    src={'/assets/img-bottom-02.png'}
                    width={461}
                    height={259}
                    alt="img bottom"
                />
            </div>
            <div className="absolute bottom-[40px] left-[48px] right-[48px] ">
                <div className="flex items-center justify-between max-[1100px]:block">
                    <div className="flex items-center gap-[264px] max-[750px]:block max-[750px]:text-center">
                        <p className="text-[15.5px] text-white font-poppins">Copyright 2024. Donthepia INC. All rights reserved.</p>
                        <p className="text-[15.5px] text-white font-poppins">Mail@donthepia.com</p>
                    </div>
                    <div className="flex items-center gap-[8px] justify-end max-[1100px]:justify-center max-[1100px]:pt-2 ">
                        <ButtonIcon
                            icon={{
                                name: 'x',
                                width: 47,
                                height: 47
                            }}
                        />
                        <ButtonIcon
                            icon={{
                                name: 'facebook',
                                width: 47,
                                height: 47
                            }}
                        />
                        <ButtonIcon
                            icon={{
                                name: 'instagram',
                                width: 47,
                                height: 47
                            }}
                        />
                        <ButtonIcon
                            icon={{
                                name: 'youtube',
                                width: 47,
                                height: 47
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Roadmap;