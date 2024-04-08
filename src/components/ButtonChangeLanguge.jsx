'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonChangeLanguge = ({language}) => {
    const router = useRouter();
    function handleLanguageChange(val){
        router.replace(`/${val}`)
    }
    return (
        <details className="dropdown float-right">
            <summary className="m-1 btn">{language}</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li name="km" onClick={()=>handleLanguageChange('km')}>
                    <a>Khmer</a>
                </li>
                <li name="en" onClick={()=>handleLanguageChange('en')}>
                    <a>English</a>
                </li>
            </ul>
        </details>
    )
}

export default ButtonChangeLanguge