import Image from "next/image";

export default function Game({ title, description, image, link }) {
    return (
        <a className="m-0 p-0" href={`${link}`}>
            <div className="group m-2">
                <div className="flex rounded-lg h-full bg-indigo-900 hover:bg-indigo-900 transition duration-300 flex-col min-w-48">
                    {/* Image Container */}
                    <div className="relative h-40 w-full rounded">
                        <Image
                            src={`/${image}`}
                            alt="logo"
                            fill
                            className="rounded-t-lg group-hover:brightness-75 transition duration-300"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    {/* Content */}
                    <div className="bg-indigo-500 group-hover:bg-indigo-600 rounded-b-lg p-8 transition duration-300">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-50 bg-indigo-50 text-white flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6366f1" className="bi bi-dice-5-fill" viewBox="0 0 16 16">
                                    <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </div>
                            <h2 className="text-white dark:text-white text-lg font-medium">{title}</h2>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="text-sm text-base text-white dark:text-white">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
