'use client'
import useCounterStore from "@/store/CounterStore";
import { testStore } from "@/store/testStore";
import useGetFromStore from "@/store/zustandHook";

const page = () => {
    const {count, increment, decrement} = useCounterStore();
    const [increasePopulation, decreasePopulation] =  testStore(
        (state) => [
            state.increasePopulation, 
            state.decreasePopulation
        ]
    );

    const bears = useGetFromStore(testStore, (state): any => state.bears)

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