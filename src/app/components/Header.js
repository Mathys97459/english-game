import Image from "next/image";

export default function Header() {
    return (
        <>
            <Image src="/logo.webp" width={150} height={75} alt="logo"></Image>
        </>
    );
}
