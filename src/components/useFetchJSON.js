import { useEffect , useState } from 'react';

export const useFetchJSON = (url) => {

    const [state, setState] = useState({ data: null, loading: true })

    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }))
        fetch(url)
            .then(x => x.json())
            .then(y => {
                console.log(y)
                setState({ data: y, loading: false })
            })
    }, [url, setState])

    return state;
}