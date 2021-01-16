import { useState, useEffect } from 'react';
import { useFirebase } from './firebase';

export const useStorage = (path) => {
    const {storage} = useFirebase();
    const [imgUrl, setImgUrl] = useState("")

    useEffect(() => {
        if (storage){
            storage.ref().child(path).getDownloadURL().then(function (url) {
                setImgUrl(url);
            }).catch(function (error) {
                console.log(error)
            })
        }
    }, [storage, path])

    return imgUrl
}