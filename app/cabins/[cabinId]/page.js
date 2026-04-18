import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";
import { getCabin, getCabins } from "../../_lib/data-service";
import Cabin from "@/app/_components/Cabin";

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);
  return {
    title: `Cabin ${cabin.name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin}></Cabin>
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">Reserve today {cabin.name}. Pay on arrival.</h2>
        <Suspense fallback={<Spinner></Spinner>}>
          <Reservation cabin={cabin}></Reservation>
        </Suspense>
      </div>
    </div>
  );
}
