import Image from "next/image";

export default function About() {

    return (
        <>
            <section id="about" className="bg-gradient-to-r from-[#f0cca8] to-[#ccdef5] py-8 px-4 text-black">
                <h2 className="text-2xl font-bold text-center mb-10 drop-shadow">About</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5 px-4 place-self-start">
                        <h3 className="text-lg font-bold">ZURFRK</h3>
                        <p className="text-sm">
                            ZURFRK is a premium men’s footwear brand born from the pursuit of timeless simplicity.
                            We design with presence clean lines, elegant curves and comfort you forget you’re wearing.
                        </p>
                        <p className="text-sm">
                            Each pair is crafted for the man who doesn’t follow trends. He sets them.
                        </p>
                    </div>
                    <Image
                        src="/picture/about-image.webp"
                        alt="About ZURFRK"
                        width={400}
                        height={300}
                    />
                </div>
            </section>
        </>
    )
}