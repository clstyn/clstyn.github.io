export default function Porto(){
    const styleCard = "porto h-[400px] w-[350px] bg-cream rounded-lg"

    return(
        <section className="">
            <h1 className="text-5xl text-cream text-center font-heading mt-8">PORTOFOLIO</h1>
            <div className="w-1/2 mx-auto flex gap-6 mt-56 items-center justify-center">
                <div className={styleCard}>
                </div>
                <div className={styleCard}></div>
                <div className={styleCard}></div>
            </div>
        </section>
    )
}