export default function Footer() {
    let year = new Date().getFullYear();
    return(
        <footer className="py-10">
            <div className="w-full flex justify-center items-center">
                <span className="text-tetiary">Koło naukowe WSB MERITO w Gdańsku 2024-{year}</span>
            </div>
        </footer>
    )
}