import React from 'react'

const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: "/html.png",
            name: "HTML"
        },
        {
            id: 2,
            logo: "/css.jpg",
            name: "CSS"
        },
        {
            id: 3,
            logo: "/bootstrap.png",
            name: "Bootstrap"
        },
        {
            id: 4,
            logo: "/javascript.png",
            name: "JavaScript"
        },
        {
            id: 5,
            logo: "/reactjs.png",
            name: "React JS"
        },
        {
            id: 6,
            logo: "/tailwind.png",
            name: "Tailwind CSS"
        },
    ];

    return (
        <div name="Experience"
            className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Experiences</h1>
                <p>I've a year of experience in the following technologies.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-7 my-3'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-90 overflow-hidden duration-300' key={id}>
                                <img src={logo} className='w-[120px] rounded-full' alt="" />
                                <div className='font-bold text-sm md:text-lg mb-1'>{name}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}


export default Experience