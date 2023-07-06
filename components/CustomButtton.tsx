"use client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image'
import React from 'react'

const CustomButtton = ({ title, containerStyles, handleClick, textStyles, rightIcon, isDisabled }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            className={`custom-btn ${containerStyles}`}
            type={'button'}
            onClick={handleClick}
        >
            {/* <Image  /> */}
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && <div className='relative w-6 h-6' >
                <Image src={rightIcon} className='object-contain' fill alt='right-icon' />
            </div>}
        </button>
    )
}

export default CustomButtton