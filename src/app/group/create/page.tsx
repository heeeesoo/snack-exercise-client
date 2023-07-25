'use client';
import {SelectBox} from "@/components/common/InputBox";
import InputBox from "@/components/common/inputBox/InputBox";
import RadioSelectBox from "@/components/common/inputBox/RadioSelectBox";
import SelectInputBox from "@/components/common/inputBox/SelectInputBox";
import { BasicButton } from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import ActionSheet from "@/components/common/ActionSheet";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface FormData {
    name: string;
    maxMemberNum: number;
    existDays: number;
    goalRelayNum: number;
    startTime: string;
    endTime: string;
    penalty: string;
    missionIntervalTime: number;
    checkMaxNum: number;
    lastName: string;
    email: string;

    radioOption: string;
    otherValue?: string;
}

const GroupCreate = () => {
    const router = useRouter();
    const wholeRef = useRef<HTMLInputElement>(null);
    const [modalcolorOpen, setModalColorOpen] = useState<boolean>(false);
    const [modalalarmOpen, setModalAlarmOpen] = useState<boolean>(false);
    const [showOtherInput, setShowOtherInput] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
        watch
    } = useForm<FormData>(); 

    const radioOptions = [
        { label: '아웃백 쏘기', value: '아웃백 쏘기' },
        { label: '아이스크림 쏘기', value: '아이스크림 쏘기' },
        { label: '직접 입력', value: 'other', isOther: true },
    ];

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    const handleRadioChange = (value: string) => {
        setValue('radioOption', value);
        setShowOtherInput(value === 'other');
    };

    const watchRadioOption = watch('radioOption');

    const handleOpenModalColor = () => {
        setModalColorOpen(true);
    };
    
      const handleCloseModalColor = () => {
        setModalColorOpen(false);
    };

    const handleOpenModalAlarm = () => {
        setModalAlarmOpen(true);
    };
    
    const handleCloseModalAlarm = () => {
        setModalAlarmOpen(false);
    };

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
          const target = e.target as HTMLElement; 
          // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
          if (modalcolorOpen && wholeRef.current && wholeRef.current.contains(target)) {
            handleCloseModalColor();
          }
        };
      
        document.addEventListener("click", clickOutside);
      
        return () => {
          // Cleanup the event listener
          document.removeEventListener("click", clickOutside);
        };
    }, [modalcolorOpen]);

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
          const target = e.target as HTMLElement; 
          // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
          if (modalalarmOpen && wholeRef.current && wholeRef.current.contains(target)) {
            handleCloseModalAlarm();
          }
        };
      
        document.addEventListener("click", clickOutside);
      
        return () => {
          // Cleanup the event listener
          document.removeEventListener("click", clickOutside);
        };
    }, [modalalarmOpen]);

    const handlePush = () => {
        router.push('/group/title');
    }

    const handleSubmitTest = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
     
        const data = {
            groupname: event.currentTarget.groupname.value,
            penalty: event.currentTarget.penalty.value ? event.currentTarget.penalty.value : event.currentTarget.penaltyOther.value
        }
        
        console.log(data);
        
        // const JSONdata = JSON.stringify(data)
     
        // const endpoint = '/api/form'
     
        // const options = {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSONdata,
        // }
     
        // const response = await fetch(endpoint, options)
     
        // const result = await response.json()
        // alert(`Is this your full name: ${result.data}`)
    }

    return (
        <div ref={wholeRef}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                <InputBox title="그룹명을 입력해주세요" label="name" name="name" register={register} error={errors.name?.message} defaultValue="스낵스낵" placeholder="그룹명"/>
                <div className="mb-[40px]"></div>
                <SelectBox type="text" id="color" name="color" title="그룹 색상을 선택해주세요" onOpen={handleOpenModalColor} onClose={handleCloseModalColor}/>
                <ActionSheet open={modalcolorOpen} onClose={handleCloseModalColor} text="color"/>
                <div className="mb-[40px]"></div>
                <InputBox title="제한 인원수를 입력해주세요" subtitle="제한 6명" label="name" name="maxMemberNum" register={register} error={errors.maxMemberNum?.message} defaultValue={6} placeholder="그룹명" unit="명"/>
                <div className="mb-[40px]"></div>
                <InputBox title="목표 릴레이 기간은 입력해주세요" placeholder="목표 릴레이 기간" label="existDays" name="existDays" register={register} error={errors.existDays?.message} defaultValue={14} unit="일"/>
                <div className="mb-[40px]"></div>
                <InputBox  title="목표 릴레이 횟수를 입력해주세요" placeholder="목표 릴레이 횟수" label="goalRelayNum" name="goalRelayNum" register={register} error={errors.goalRelayNum?.message} defaultValue={14} unit="회"/>
                <div className="mb-[40px]"></div>
                <InputBox  title="시작 시간을 입력해주세요" placeholder="시작 시간" label="startTime" name="startTime" register={register} error={errors.startTime?.message} defaultValue={9} unit="시" />
                <div className="mb-[40px]"></div>
                <InputBox  title="끝 시간을 입력해주세요" placeholder="끝 시간" label="endTime" name="endTime" register={register} error={errors.endTime?.message} defaultValue={23} unit="시"  />
                <hr className="w-4/5 duration-500 my-[40px] border-1 border-[#EEEEFE] cursor-pointer"/>
                <div className="flex flex-col w-4/5">
                    <div className="text-left text-SystemGray2 text-[16px]">
                        벌칙을 선택해주세요
                    </div>
                    <div className="text-SystemGray3 text-[12px]">
                        미션 기간이 끝나고난 후 미션 할당 받고 수행까지의 시간이 
                        평균적으로 가장 오래 걸린 사람이 벌칙을 받습니다.
                    </div>
                </div>
                {radioOptions.map((option) => (
                    <div key={option.value}>
                    <Controller
                        name="radioOption"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Please select an option' }}
                        render={({ field }) => (
                        <RadioSelectBox
                            label={option.label}
                            value={option.value}
                            checked={field.value === option.value}
                            onChange={(value) => handleRadioChange(value)}
                            isOther={option.isOther}
                        />
                        )}
                    />
                    </div>
                ))}
                {showOtherInput && (
                    <SelectInputBox title="" label="name" name="otherValue" register={register} placeholder="Please enter your option"/>
                )}
                <hr className="w-4/5 duration-500 my-[40px] border-1 border-[#EEEEFE] cursor-pointer"/>
                <SelectBox type="text" id="alarm" name="alarm" title="미션 독촉 알림 시간 간격을 선택해주세요" placeholder="미션 독촉 알림 시간 간격" onOpen={handleOpenModalAlarm} onClose={handleCloseModalAlarm}/>
                <ActionSheet open={modalalarmOpen} onClose={handleCloseModalAlarm} text="alarm"/>
                <div className="mb-[40px]"></div>
                <InputBox title="미션 독촉 알림 최대 횟수를 입력해주세요" label="checkMaxNum" name="checkMaxNum" register={register} error={errors.checkMaxNum?.message} defaultValue={3} placeholder="미션 독촉 알림 최대 횟수" unit="번"/>
                <div className="mb-[40px]"></div>
                <BasicButton type="submit" label="그룹 만들기" />
            </form>
        </div>
    );
};

export default GroupCreate;