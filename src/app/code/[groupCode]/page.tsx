'use client'

export default function GroupCode({ params }: { params: { groupCode: string } }) {

  return (
    <div className="flex flex-col items-center justify-center">
        {params.groupCode}
    </div>
  )
}
