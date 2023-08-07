'use client';
import InputBox from "@/components/common/inputBox/InputBox";
import RadioSelectBox from "@/components/common/inputBox/RadioSelectBox";
import SelectInputBox from "@/components/common/inputBox/SelectInputBox";
import SelectBox from "@/components/common/inputBox/SelectBox";
import { BasicButton } from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import ActionSheet from "@/components/common/ActionSheet";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import TokenStore from "@/store/TokenStore";

interface FormData {
    name: string;
    maxMemberNum: number;
    existDays: number;
    goalRelayNum: number;
    startTime: string;
    endTime: string;
    penalty: string;
    checkIntervalTime: number;
    checkMaxNum: number;
    penaltyOption: string;
    otherValue?: string;
    colorOption: string;
    intervalOption: string;
}

const GroupCreate = () => {
    const router = useRouter();
    const wholeRef = useRef<HTMLInputElement>(null);
    const [modalcolorOpen, setModalColorOpen] = useState<boolean>(false);
    const [modalalarmOpen, setModalAlarmOpen] = useState<boolean>(false);
    const [showOtherInput, setShowOtherInput] = useState(false);
    const {token, setToken, setMemberId} = TokenStore();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
        watch
    } = useForm<FormData>(); 

    const radioPenaltyOptions = [
        { label: '아웃백 쏘기', value: '아웃백 쏘기' },
        { label: '아이스크림 쏘기', value: '아이스크림 쏘기' },
        { label: '직접 입력', value: 'other', isOther: true },
    ];

    const radioColorOptions = [
        { label: '빨강', value: '빨강' },
        { label: '파랑', value: '파랑' },
    ];

    const radioIntervalOptions = [
        { label: '5분', value: '5분' },
        { label: '10분', value: '10분' },
    ];

    const onSubmit = async (data: FormData) => {
        try {
            console.log(data);
            const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/groups`;
        
            const formDataToSend = {
                name: data.name,
                emozi: '😠',
                // color: data.colorOption,
                color: '#3A81F7',
                description: 'default',
                maxMemberNum: parseInt(data.maxMemberNum.toString()),
                goalRelayNum: parseInt(data.goalRelayNum.toString()),
                startTime: parseInt(data.startTime)<10 ? `0${data.startTime}:00:00` : `${data.startTime}:00:00`,
                endTime: parseInt(data.endTime)<10 ? `0${data.endTime}:00:00` : `${data.endTime}:00:00`,
                penalty: data.penaltyOption === "other" ? data.otherValue : data.penaltyOption,
                checkIntervalTime: parseInt(data.intervalOption, 10),
                checkMaxNum: parseInt(data.checkMaxNum.toString()),
                existDays: parseInt(data.existDays.toString())
            };

            const testData = {
                "name": "string",
                "emozi": "string",
                "color": "string",
                "description": "string",
                "maxMemberNum": 0,
                "goalRelayNum": 0,
                "startTime": "16:13:54",
                "endTime": "16:13:54",
                "penalty": "string",
                "checkIntervalTime": 0,
                "checkMaxNum": 0,
                "existDays": 0
            }

            console.log(formDataToSend)
        
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(formDataToSend),
            });
        
            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
        
            const responseData = await response.json();
            console.log('Server response:', responseData);
            alert('그룹이 생성되었습니다!');
            router.replace('/group/');
            } catch (error) {
            console.error('Error while submitting form data:', error);
            alert('Failed to submit form data. Please try again.');
        }
    };

    const handleRadioPenaltyChange = (value: string) => {
        setValue('penaltyOption', value);
        setShowOtherInput(value === 'other');
    };

    const handleRadioColorChange = (value: string) => {
        setValue('colorOption', value);
    };

    const handleRadioIntervalChange = (value: string) => {
        setValue('intervalOption', value);
    };

    const watchRadioColorOption = watch('colorOption');
    const watchRadioIntervalOption = watch('intervalOption');

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
        setValue('colorOption', '빨강');
        setValue('intervalOption', '10분');
    }, [setValue])

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


    return (
        <div ref={wholeRef} className="pb-[40px]">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center pt-[15px]">
                <InputBox title="그룹명을 입력해주세요" label="name" name="name" register={register} error={errors.name?.message} defaultValue="스낵스낵" placeholder="그룹명"/>
                {/* <div className="mb-[40px]"></div> */}
                {/* <SelectBox name="color" value={watchRadioColorOption} title="그룹 색상을 선택해주세요" onOpen={handleOpenModalColor}/>
                <ActionSheet open={modalcolorOpen} onClose={handleCloseModalColor}>
                    {radioColorOptions.map((option) => (
                        <div key={option.value}>
                        <Controller
                            name="colorOption"
                            control={control}
                            defaultValue="빨강"
                            rules={{ required: 'Please select an option' }}
                            render={({ field }) => (
                            <RadioSelectBox
                                label={option.label}
                                value={option.value}
                                checked={field.value === option.value}
                                onChange={(value) => handleRadioColorChange(value)}
                            />
                            )}
                        />
                        </div>
                    ))}
                </ActionSheet> */}
                <div className="mb-[40px]"></div>
                <InputBox title="제한 인원수를 입력해주세요" subtitle="제한 6명" label="name" name="maxMemberNum" register={register} error={errors.maxMemberNum?.message} defaultValue={6} placeholder="그룹명" unit="명" type="number"/>
                <div className="mb-[40px]"></div>
                <InputBox title="목표 릴레이 기간은 입력해주세요" placeholder="목표 릴레이 기간" label="existDays" name="existDays" register={register} error={errors.existDays?.message} defaultValue={14} unit="일" type="number"/>
                <div className="mb-[40px]"></div>
                <InputBox  title="목표 릴레이 횟수를 입력해주세요" placeholder="목표 릴레이 횟수" label="goalRelayNum" name="goalRelayNum" register={register} error={errors.goalRelayNum?.message} defaultValue={14} unit="회" type="number"/>
                <div className="mb-[40px]"></div>
                <InputBox  title="시작 시간을 입력해주세요" placeholder="시작 시간" label="startTime" name="startTime" register={register} error={errors.startTime?.message} defaultValue={9} unit="시" type="number" min={0} max={24} />
                <div className="mb-[40px]"></div>
                <InputBox  title="끝 시간을 입력해주세요" placeholder="끝 시간" label="endTime" name="endTime" register={register} error={errors.endTime?.message} defaultValue={23} unit="시"  type="number" min={0} max={24} />
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
                {radioPenaltyOptions.map((option) => (
                    <div key={option.value}>
                    <Controller
                        name="penaltyOption"
                        control={control}
                        defaultValue="아웃백 쏘기"
                        rules={{ required: 'Please select an option' }}
                        render={({ field }) => (
                        <RadioSelectBox
                            label={option.label}
                            value={option.value}
                            checked={field.value === option.value}
                            onChange={(value) => handleRadioPenaltyChange(value)}
                            isOther={option.isOther}
                        />
                        )}
                    />
                    </div>
                ))}
                {showOtherInput && (
                    <SelectInputBox title="" label="name" name="otherValue" register={register} placeholder="Please enter your option"/>
                )}
                <div className='text-red-500 text-[12px]'>
                    {errors.penaltyOption && <span>X {errors.penaltyOption?.message}</span>}
                </div>
                <hr className="w-4/5 duration-500 my-[40px] border-1 border-[#EEEEFE] cursor-pointer"/>
                <SelectBox name="alarm" title="미션 독촉 알림 시간 간격을 선택해주세요" value={watchRadioIntervalOption} onOpen={handleOpenModalAlarm}/>
                <ActionSheet open={modalalarmOpen} onClose={handleCloseModalAlarm}>
                    {radioIntervalOptions.map((option) => (
                        <div key={option.value}>
                        <Controller
                            name="intervalOption"
                            control={control}
                            defaultValue="10분"
                            rules={{ required: 'Please select an option' }}
                            render={({ field }) => (
                            <RadioSelectBox
                                label={option.label}
                                value={option.value}
                                checked={field.value === option.value}
                                onChange={(value) => handleRadioIntervalChange(value)}
                            />
                            )}
                        />
                        </div>
                    ))}
                </ActionSheet>
                <div className="mb-[40px]"></div>
                <InputBox title="미션 독촉 알림 최대 횟수를 입력해주세요" label="checkMaxNum" name="checkMaxNum" register={register} error={errors.checkMaxNum?.message} defaultValue={3} placeholder="미션 독촉 알림 최대 횟수" unit="번"/>
                <div className="mb-[40px]"></div>
                <BasicButton type="submit" label="그룹 만들기" />
            </form>
        </div>
    );
};

export default GroupCreate;