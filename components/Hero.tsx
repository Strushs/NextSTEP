import Link from "next/link";
import NavImage from "./NavImage";

export default function Hero() {
  return (
    <>
      <NavImage />
      <section className="mt-[650px] relative w-full min-h-[600px] flex">
        <div className="flex flex-col items-end w-[30%]">
          <p className="mr-[-300px] text-nowrap text-primary text-5xl baloo">
            Sprawdź gdzie się odnajdziesz
          </p>
          <p className="my-8 leading-10 text-xl text-center">
            Testy psychologincze, <br />
            Sztuczna inteligencja czekają,
            <br /> żeby Ci pomóc wybrać odpowiedni <br /> kierunek studiów
          </p>
          <Link
            href={"/quiz"}
            className="btn mr-6 rounded-3xl px-12 py-6 text-3xl baloo text-white mt-4"
          >
            Sprawdź się
          </Link>
        </div>
        <div className="w-[70%] wsb"></div>
      </section>
    </>
  );
}
