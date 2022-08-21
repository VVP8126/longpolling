import { useState } from "react";

const useInput = ({initValue}) => {
    const [val, setVal] = useState(initValue);
    const onValueChange = (e) => setVal(e.target.value);
    return { val, onValueChange };
}
export default useInput;
