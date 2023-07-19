'use client'
import useCounterStore from "@/store/CounterStore";
import useTestStore from "@/store/TestStore";
import useGetFromStore from "@/store/ZustandHook";

const page = () => {
    const {count, increment, decrement} = useCounterStore();
    const [increasePopulation, decreasePopulation] =  useTestStore(
        (state) => [
            state.increasePopulation, 
            state.decreasePopulation
        ]
    );

    const bears = useGetFromStore(useTestStore, (state): any => state.bears)

    return (
        <div className="flex flex-col">
            exercise
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            {count}
            <div>
                Bears: {bears}
                <button onClick={increasePopulation}>increasePopulation Pop</button>
                <button onClick={decreasePopulation}>decreasePopulation Pop</button>
            </div>
        </div>
    );
};

export default page;