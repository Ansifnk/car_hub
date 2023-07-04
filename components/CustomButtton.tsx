"use client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image'
import React from 'react'

const CustomButtton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            className={`custom-btn ${containerStyles}`}
            type={'button'}
            onClick={handleClick}
        >
            {/* <Image  /> */}
            <span className={`flex-1 `}>
                {title}
            </span>
        </button>
    )
}

export default CustomButtton