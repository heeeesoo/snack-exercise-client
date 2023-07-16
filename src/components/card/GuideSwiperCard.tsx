interface GuideSwiperCardProps {
    title: string;
    text: string;
    num: number;
}

const GuideSwiperCard = ({
    title,
    text,
    num
} : GuideSwiperCardProps) => {
    return (
        <div className="flex flex-col bg-white w-[100%] h-[130px] rounded-[16px] px-[20px] py-[20px]">
            <div className="flex justify-between">
                <div className="font-bold pb-[10px]">
                    {title}
                </div>
                <div className="flex">
                    {num}&nbsp;<div className="text-SystemGray3"> / 8</div>
                </div>
            </div>
            <div className="text-SystemGray3 text-[14px] font-normal">
                {text}
            </div>
        </div>
    );
};

export default GuideSwiperCard;