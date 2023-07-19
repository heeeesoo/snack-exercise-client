import useUserStore from "@/store/UserStore";
const page = () => {
    return (
        <div>
            calendar
            {useUserStore.getState().isLogin ? 'true' : 'false'}
        </div>
    );
};

export default page;