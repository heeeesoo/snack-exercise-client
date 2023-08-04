'use client'
import { BlurTitleButton } from "../common/Button";
import { useRouter } from "next/navigation";
import {getDataClient} from "@/utils/getDataClient";
import { useEffect, useState } from "react";
import Link from "next/link";

interface MissionCardProps {
    imgLink?: string;
    groupname?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface MissionType {
    id: number;
    name: string;
    exerciseCategory: string;
    videoLink: string;
    description: string;
    minPerKcal: number;
}

const MissionCard = ({
    imgLink,
    groupname,
    onClick
}:MissionCardProps) => {
    const [data, setData] = useState<MissionType>();
    const [isLoading, setLoading] = useState(true);

    const router = useRouter();
    const handleBlurTitleButtonClick = () => {
        console.log('!');
        router.push(`/group/mission/${groupname}`);
    }

    useEffect(() => {
        const fetchMission = async () => {
            try {
                    const exerciseId = Math.floor(Math.random() * 5) + 1;
                    const response = await getDataClient(`/exercises/${exerciseId}`);
                    console.log('mission:',response.result);
                    setData(response.result.data);
              } catch (error) {
                  console.error('Error in fetchData:', error);
              }
        };
        fetchMission();
        setLoading(false);
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        // <div className={`flex flex-col pt-[200px] items-center justify-evenly h-[320px] w-9xl bg-[url("/imageEx/mission2.svg")] bg-cover bg-center rounded-[16px]`}>
        //     <BlurTitleButton title={title} subtitle={subtitle} onClick={handleBlurTitleButtonClick}/>
        // </div>
        <Link
            href={{
                pathname: `/group/mission/0`,
                query: {
                    name: `${data.videoLink}`
                },
            }}
            className='w-9xl'
        >
            <BlurTitleButton title={data.name} subtitle={data.description} onClick={handleBlurTitleButtonClick}/>
        </Link>
    );
};

export default MissionCard;