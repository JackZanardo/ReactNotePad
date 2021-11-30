import {useState, useEffect} from "react";

function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
       let localValue =  localStorage.getItem(key);
       if(localValue) {
           return JSON.parse(localValue);
       }
       return defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[key, value]);

    return [value, setValue];
}

function clearLocalStorage(key) {
    localStorage.removeItem(key);
}

function useSessionStorage(key, defaultValue) {
    const [sessionValue, setSessionValue] = useState(() => {
        let localValue =  sessionStorage.getItem(key);
        if(localValue) {
            return JSON.parse(localValue);
        }
        return defaultValue;
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(sessionValue));
    },[key, sessionValue]);

    return [sessionValue, setSessionValue];
}

function clearSessionStorage(key) {
    sessionStorage.removeItem(key);
}

export const Storage = {useLocalStorage, clearLocalStorage, useSessionStorage, clearSessionStorage};
