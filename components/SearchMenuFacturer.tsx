'use client'
import { SearchManufacturer } from '@/types'
import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants'
const SearchMenuFacturer = ({ manufacturer, setManufacturer }: SearchManufacturer) => {
    const [query, setQuery] = useState('')

    const filteredManufactures = query === "" ? manufacturers : manufacturers.filter(item => (
        item.toLowerCase().replace('/\s+/g', '').includes(query.toLowerCase().replace('/\s+/g', ''))
    ))

    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className={'absolute top-[14px]'} >
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </Combobox.Button>
                    <Combobox.Input className='search-manufacturer__input' placeholder='Volswagen' displayValue={(item: string) => item} onChange={e => setQuery(e.target.value)} />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {
                                // (filteredManufactures.length == 0 && query != '') ? <Combobox.Option value='query' className='search-manufacturer__option ' >
                                //     Create "{query}"
                                // </Combobox.Option> :
                                filteredManufactures.map(item => <Combobox.Option value={item} key={item} className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} >
                                    {item}
                                </Combobox.Option>)
                            }
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>

        </div>
    )
}

export default SearchMenuFacturer