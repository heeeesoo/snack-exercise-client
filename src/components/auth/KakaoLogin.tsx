'use client'
import { useRouter } from 'next/navigation';
import { Kakao } from '@/constant/icon';
import Image from 'next/image';
import UserStore from '@/store/UserStore';
import GroupStore from '@/store/GroupStore';

const KakaoLogin = () => {
    const router = useRouter();
    const {isLoggedIn, login, logout} = UserStore();
    const {arrGroup, setGroup, removeGroup} = GroupStore();
    const REST_API_KEY=process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
    const KAKAO_REDIRECT_URL=process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;

    const kakaoURLAuthCode=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
    const kakaoURL=`https://dev-api.snackexercise.com/login/oauth2/code/`;
    const kakaoURL2=`http://dev-api.snackexercise.com/oauth2/authorization/kakao`;

    const handleClick = () => {
        router.replace('/');

        // 서버 자체 토큰 받아오는 redirect url
        // router.replace(kakaoURL2);

        // 로그인 성공하면 user login 상태 true로 변경
        login();

        // 사용자가 참여하고 있는 group id, name 받아옴
        const newArray = [{id: 2, name: '운동하자'}, {id: 3, name: '짧고 굵게'},{id: 4, name: '운동하자'}, {id: 5, name: '짧고 굵게'},{id: 6, name: '운동하자'}, {id: 7, name: '짧고 굵게'}]
        setGroup(newArray);
    }

    return (
        <div className='flex flex-col items-center justify-center bg-white h-[152px] rounded-[36px]'>
            <div className='font-normal text-[14px] text-SystemGray3 pb-[16px]'>
                로그인하여 스낵을 100% 활용해보세요!
            </div>
            <button className='flex px-[22px] items-center w-4/5 h-[56px] bg-yellow-300 rounded-[16px]' onClick={handleClick}>
                <Image
                    src={Kakao}
                    width={24}
                    height={24}
                    alt="Kakao"
                />
                <div className='flex-1 font-semibold'>
                    카카오로 로그인하기
                </div>
                <div className='w-[24px]'></div>
            </button>
        </div>
    );
};

export default KakaoLogin;