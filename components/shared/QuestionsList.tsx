'use client'
import { useState } from "react";
import ButtonIcon from "./ButtonIcon";

const listQuestions = [
    {
        id: 1,
        title: 'NFT는 뭔가요? 이것은 어떻게 사용하나요?',
        text: 'FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.'
    },
    {
        id: 2,
        title: '홈페이지를 이용하는데, 로그인은 어떻게 하나요?',
        text: 'FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.'
    },
    {
        id: 3,
        title: 'NFT를 구매했어요. 사용은 어떻게 하나요?',
        text: 'FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.'
    },
    {
        id: 4,
        title: 'NFT를 구매하는 것에 실패했어요. 어떻게 해결해야하나요?',
        text: 'FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.'
    },
    {
        id: 5,
        title: 'NFT를 다른 방식으로 구매하고 싶어요. 어떤 방법이 있나요?',
        text: 'FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.'
    },
    {
        id: 6,
        title: '로그인 시 오류가 있어요. 해결 방법이 알고 싶어요.',
        text: 'FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.'
    },
    {
        id: 7,
        title: '홈페이지를 이용하는데, 로그인은 어떻게 하나요?',
        text: 'FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.'
    },
    {
        id: 8,
        title: 'NFT를 구매했어요. 사용은 어떻게 하나요?',
        text: 'FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.'
    },
];

const QuestionsList = () => {
    const [showQuestion, setShowQuestion] = useState(1);
    return <div>
        {
            listQuestions.map((question, index) => {
                return (
                    <div key={index} className="flex items-start gap-[192px] w-[950px] pb-[62px] max-[1040px]:gap-2 max-[1040px]:w-full max-[1040px]:px-2">
                        <div className="w-full ">
                            <div className="flex items-center justify-start">
                                <p className="text-[20px] font-poppins pr-[37px] text-white">0{index + 1}</p>
                                <p className="text-[20px] text-white font-pretendard">{question.title}</p>
                            </div>
                            {
                                showQuestion === question.id ?
                                    <p className="text-[#878787]  text-[16.5px] font-pretendard pl-[60px]">{question.text}</p>
                                    : ''
                            }
                        </div>
                        <div>
                            {
                                showQuestion === question.id ?
                                    <ButtonIcon
                                        icon={{
                                            name: 'button_close',
                                            height: 24,
                                            width: 24
                                        }}
                                        onClick={() => setShowQuestion(0)}
                                    />
                                    :
                                    <ButtonIcon
                                        icon={{
                                            name: 'button_plus',
                                            height: 24,
                                            width: 24
                                        }}
                                        onClick={() => setShowQuestion(question.id)}
                                    />
                            }
                        </div>
                    </div>
                )
            })
        }
    </div>
}
export default QuestionsList;