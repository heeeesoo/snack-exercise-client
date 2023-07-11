'use client';
 
import { useSearchParams } from "next/navigation";

const page = () => {
    const params = useSearchParams();
    const codeParam = params.get('code');
    console.log(codeParam);
    return (
        <div>
            카카오 로그인 중
        </div>
    );
};

export default page;