'use client'
import { useRouter } from 'next/navigation';
import { Kakao } from '@/constant/icon';
import Image from 'next/image';
import UserStore from '@/store/UserStore';

const KakaoLogin = () => {
    const router = useRouter();
    const {isLogin, userLogin, userLogout} = UserStore();
    const REST_API_KEY=process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
    const KAKAO_REDIRECT_URL=process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;

    const kakaoURL=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

    const handleClick = () => {
        // router.push(kakaoURL);
        router.replace('/');
        userLogin();
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