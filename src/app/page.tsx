import TopHeadlines from "@/components/TopHeadlines";


export default function Home() {
  return (
   
      <main className="mt-4">
        {/* @ts-expect-error Async */}
        <TopHeadlines/>
       </main>
   
  );
}
