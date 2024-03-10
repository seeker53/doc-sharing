import React, { useRef } from 'react'
import Card from './Card'

export default function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "This is the background colour of the card that will be displayed",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },

        },
        {
            desc: "This is the background colour of the card that will be displayed",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },

        },
        {
            desc: "This is the background colour of the card that will be displayed",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },

        },
    ];
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex felx-wrap gap-10 p-5'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}
