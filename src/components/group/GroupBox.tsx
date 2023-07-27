'use client';
interface GroupBoxProps {
    groupId : number;
}
export default function GroupBox({
    groupId
} : GroupBoxProps) {

  return (
    <div>GroupBox {groupId}</div>
  )
}
