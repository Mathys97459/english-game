import Image from "next/image";
import Game from "./Game"

export default function Games() {
    return (
        <>
            <div className="grid grid-rows-3 grid-flow-col justify-center gap-2">
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="titcrre" />
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="ticestre" />
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="titcfsre" />
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="logo.webp"
                    link="titre" />
            </div>
        </>
    );
}
