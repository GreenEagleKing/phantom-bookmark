import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useLocalStorage(key, initialValue) {

    const [link, setLink] = useState(() => {
        try{
        // Check to see if there is data in the key value
        const localLink = window.localStorage.getItem(key)
        return localLink ? JSON.parse(localLink) : initialValue
        } catch (err) {
            console.log(err)
            // if theres no value then return the intialvalue as though there is nothing there
            return initialValue
        }
    })

    //Runs on start and if a new link array is changed
    useEffect(() => {
        // taking the value from the link state adding it to local storage 
        window.localStorage.setItem(key, JSON.stringify(link))
    }, [key, link])

    return [link, setLink]
}