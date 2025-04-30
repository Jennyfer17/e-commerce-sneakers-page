import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export function AddSubtract({handleIncrement, handleDecrement}) {
    const [count, setCount] = useState(0)
    return (
        <div className="flex w-full bg-muted py-3 rounded-[8px] px-3">
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full justify-between space-x-4">
                    <button onClick={() => {setCount(count - 1); handleDecrement()}} disabled={count === 0} className="p-2 rounded-full disabled:opacity-50">
                        <Minus size={16} />
                    </button>
                    <span className="font-medium text-xl">{count}</span>
                    <button onClick={() => {setCount(count + 1); handleIncrement()}} className="p-2 rounded-full">
                        <Plus size={16} />
                    </button>
                </div>     
            </div>
        </div>
    )
}