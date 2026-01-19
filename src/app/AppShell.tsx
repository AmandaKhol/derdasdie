import Footer from "./components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1 className="text-center p-7 text-4xl border-b-2 border-gray-500">
          DER DIE DAS
        </h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
