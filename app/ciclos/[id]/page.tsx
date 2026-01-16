export default async function CicloPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <h1>Página de {id.toUpperCase()}</h1>
  );
}