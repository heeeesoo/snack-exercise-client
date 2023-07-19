import useUserStore from "@/store/userStore";
const page = () => {
    return (
        <div>
            calendar
            {useUserStore.getState().isLogin ? 'true' : 'false'}
        </div>
    );
};

export default page;