import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  const guestHref = session?.user ? "/account" : "/api/auth/signin?callbackUrl=/account";

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href={guestHref}
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
            )}
            <span>Guest area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
