'use client'

import { useState } from "react"
import ButtonIcon from "./ButtonIcon"
import { motion } from 'framer-motion';
export type userProps = {
    text: string;
    color: string;
    name1: string;
    name2: string;
    top: number;
}

const users: userProps[] = [
    {
        text: 'T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.',
        color: '#34495E',
        name1: '홍길동',
        name2: 'Gil Dong Hong',
        top: 0,
    },
    {
        text: 'T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.',
        color: '#2C3E50',
        name1: '홍길동',
        name2: 'Gil Dong Hong',
        top: 28,
    },
    {
        text: 'T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.',
        color: '#5D6D7E',
        name1: '홍길동',
        name2: 'Gil Dong Hong',
        top: 92,
    },
    {
        text: 'T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.',
        color: '#4A235A',
        name1: '홍길동',
        name2: 'Gil Dong Hong',
        top: 71,
    },
    {
        text: 'T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.',
        color: '#5D6D7E',
        name1: '홍길동',
        name2: 'Gil Dong Hong',
        top: 92,
    },
    {
        text: 'T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.',
        color: '#2C3E50',
        name1: '홍길동',
        name2: 'Gil Dong Hong',
        top: 28,
    },
]

const UseStateBox = ({ user, number }: { user: userProps, number: number }) => {

    return (
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: number * 500 }}
            transition={{ duration: 0.3 }}
            className="w-[500px] h-[280px] bg-[#232323] rounded-xl pl-[40px] pr-[80px] max-[510px]:w-full max-[510px]:min-w-[380px]" style={{ marginTop: `${user.top}px` }}>
            <p className="text-base leading-6 font-pretendard text-white pt-[46px] ">{user.text}</p>
            <div className="mt-[75px] flex items-center gap-[16px]">
                <div className={`w-[48px] h-[48px] rounded-full `} style={{ background: user.color }}>
                </div>
                <div>
                    <p className="text-base text-white">{user.name1}</p>
                    <p className="text-[#a1a1a1] text-xs">{user.name2}</p>
                </div>
            </div>

        </motion.div>
    )
}

const UseStateBoxList = () => {
    const [number, setNumber] = useState(0)
    const [disabled, setDisabled] = useState('')

    const handleAction = (number: number, title: string) => {
        if (title === 'right' && number < -(users.length - 2)) {
            setDisabled('right')
            return;
        }
        else if (title === 'left' && number >= 2) {
            setDisabled('left')
            return;
        }


        setDisabled('')
        setNumber(number)
    };
    return <>
        <div className="flex items-end justify-start max-[700px]:justify-center max-[700px]:px-2 pl-[63px] gap-[8px] mb-[84px]">
            <ButtonIcon
                icon={{
                    name: "button_left",
                    width: 48,
                    height: 48,
                }}
                disabled={disabled === 'left'}
                onClick={() => { disabled !== 'left' && handleAction(number + 1, 'left') }}
            />
            <ButtonIcon
                icon={{
                    name: "button_right",
                    width: 48,
                    height: 48,
                }}
                disabled={disabled === 'right'}
                onClick={() => { disabled !== 'right' && handleAction(number - 1, 'right') }}
            />
        </div>
        <div className="flex items-start justify-between gap-[16px] overflow-hidden -ml-[54px] max-[516px]:ml-0 max-[516px]:px-2 max-[516px]:justify-center">
            {
                users.map((user, index) => {
                    return <div key={index} >
                        <UseStateBox user={user} number={number} />
                    </div>
                })
            }
        </div>
    </>
}

export default UseStateBoxList;