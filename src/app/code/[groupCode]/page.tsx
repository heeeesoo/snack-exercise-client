'use client'
import CopyInviteCodeButton from "@/components/common/CopyInviteCodeButton"

export default function GroupCode({ params }: { params: { groupCode: string } }) {

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="font-bold text-[40px]">
            {params.groupCode}  
        </div>
        <div className="py-[10px]"/>
        <CopyInviteCodeButton inviteCode={params.groupCode} />
    </div>
  )
}
