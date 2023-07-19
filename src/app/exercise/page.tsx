'use client'
import CounterStore from "@/store/CounterStore";
import TestStore from "@/store/TestStore";
import GetFromStore from "@/store/ZustandHook";

const page = () => {
    const {count, increment, decrement} = CounterStore();
    const [increasePopulation, decreasePopulation] =  TestStore(
        (state) => [
            state.increasePopulation, 
            state.decreasePopulation
        ]
    );

    const bears = GetFromStore(TestStore, (state): any => state.bears)

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