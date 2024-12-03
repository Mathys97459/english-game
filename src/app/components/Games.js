import Image from "next/image";
import Game from "./Game"

export default function Games() {
    return (
        <>
            <div className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="titcrre" />
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="ticestre" />
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="titcfsre" />
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="titre" />
                <Game
                    title="titre"
                    description="description"
                    image="game.jpg"
                    link="titre" />
            </div>
        </>
    );
}
