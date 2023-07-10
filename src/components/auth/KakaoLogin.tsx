'use client'
import { useRouter } from 'next/navigation';

const KakaoLogin = () => {
    const router = useRouter();
    const REST_API_KEY=process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
    const KAKAO_REDIRECT_URL=process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;

    const kakaoURL=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

    const handleClick = () => {
        router.push(kakaoURL);
    }

    return (
        <button onClick={handleClick}>
            카카오 로그인
        </button>
    );
};

export default KakaoLogin;