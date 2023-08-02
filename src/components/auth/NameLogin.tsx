export default function NameLogin() {
  return (
    <div className='flex flex-col items-center justify-center bg-white h-[152px] rounded-[36px]'>
        <div className='font-normal text-[14px] text-SystemGray3 pb-[16px]'>
            로그인하여 스낵을 100% 활용해보세요!
        </div>
        <button className='flex justify-center px-[22px] items-center w-4/5 h-[56px] bg-SystemBrand rounded-[16px]'>
            <div className='font-semibold text-white'>
                이름으로 로그인하기
            </div>
        </button>
    </div>
  )
}
