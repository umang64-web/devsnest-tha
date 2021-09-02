import {useCallback, useState} from "react"

export default function EditArray(initial) {
    const [item, setItem] = useState(initial);

    return (
        {
            item,
            setItem,
            push: useCallback((i) => {
                setItem(v => [...v,i]);
            }),
            erase: useCallback((i)=> {
                setItem((v) => {
                    const rt = v.filter((element) => {
                        return element !==v[i];
                    });
                    return rt;
                })
            }),
            eraseAll: useCallback(() => {
                setItem(() => []);
            })

        }
    );
}