import useSWR from 'swr'

interface GroupMissionCardProps {
    groupId : number;
}

const fetcher = async (url: string) => {
    const response = await fetch(url);
    return response.json();
};
  

export default async function GroupMissionCard({
    groupId
} : GroupMissionCardProps) {
    // const { data, error } = useSWR(
    //     'https://jsonplaceholder.typicode.com/users',
    //     fetcher
    // );

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    // console.log(data)

    return (
        <div>GroupMissionCard {groupId}</div>
    )
}
