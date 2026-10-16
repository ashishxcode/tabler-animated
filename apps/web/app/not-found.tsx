import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">That page does not exist. The icons are on the home page.</p>
      <Link href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
        Back to icons
      </Link>
    </main>
  );
}
