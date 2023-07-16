'use client'
import useCounterStore from "@/store/CounterStore";

const page = () => {
    const {count, increment, decrement} = useCounterStore();
    return (
        <div>
            exercise
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            {count}
        </div>
    );
};

export default page;