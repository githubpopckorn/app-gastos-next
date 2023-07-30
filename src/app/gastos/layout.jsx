'use client'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function GastosLayout({ children }) {
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "loading") {
            return;
        }
        if (!session) {
            router.push("/");
        }
    }, [status, session, router]);

    return (
        <>
            {children}
        </>
    );

}