
interface SkeletonLineType {
    width: string;
    height: string;
}
export default function SkeletonLine({
    width,
    height
} : SkeletonLineType) {
  return (
    <div role="status" className="animate-pulse">
        <div className={`bg-gray-200 rounded-full dark:bg-gray-700 w-[${width}] h-[${height}]`}></div>
        {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div> */}
        <span className="sr-only">Loading...</span>
    </div>
  )
}
