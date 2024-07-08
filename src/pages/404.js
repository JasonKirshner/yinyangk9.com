import Error404 from "@/components/Error404/Error404";

export function getStaticProps() {
  return { props: { title: "404 Not Found" } }
}

export default function errorPage() {
  return (
    <main className='main'>
      <Error404 />
    </main>
  );
}
