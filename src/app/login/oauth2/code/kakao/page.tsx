'use client';
 
import { useSearchParams } from "next/navigation";


const page = () => {
    const searchParams = useSearchParams();
    console.log(searchParams.get('code'));

    return (
        <div>
            카카오 로그인 중
        </div>
    );
};

export default page;