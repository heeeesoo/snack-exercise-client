'use client'
import getGroup from "@/utils/getGroup";
import getAllGroups from "@/utils/getAllGroups";
import Link from "next/link";
import GroupBox from "@/components/group/GroupBox";
import { useState, useEffect } from "react";
import { use } from "react";

const getPosts = async (): Promise<any> => {
    const groups = await getAllGroups();
  
    return groups;
};

// function 이름 -> getGroups() 접근자 신경써서 붙이기
export default function Group() {
    // const groups = use(getPosts());
    const [id, setId] = useState(1);

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groups = await getAllGroups();
        setData(groups);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
        fetchData();
    }, []);

    const handleIdChange = (newId : number) => {
        setId(newId);
    };


    const content = (
        <section className="flex w-screen max-w-[400px] overflow-y-auto">
            {data?.map((user : any) => {
                return (
                    <div key={user.id}>
                        <p>
                            <button onClick={() => handleIdChange(user.id)}>{user.name}</button>
                        </p>
                    </div>
                )
            })}
        </section>
    )


    return (
        <div>
            Group
            {content}
            <GroupBox groupId={id}/>
        </div>
    );
};
