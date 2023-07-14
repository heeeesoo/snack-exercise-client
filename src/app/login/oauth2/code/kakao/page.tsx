'use client';
 
const page = () => {

    if (typeof window !== "undefined") {
        // Client-side-only code
        const code = new URL(window.location.href).searchParams.get("code");
        console.log(code);
    }

    return (
        <div>
            카카오 로그인 중
        </div>
    );
};

export default page;