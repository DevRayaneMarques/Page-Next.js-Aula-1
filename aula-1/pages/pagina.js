// pages/pagina.js
import Link from 'next/link';

const MinhaPagina = () => {
  return (
    <div>
      <h1>Minha Página</h1>
      <p>Esta é a minha primeira página com Next.js!</p>
      <Link href="/outra-pagina">
        <a>Ir para outra página</a>
      </Link>
    </div>
  );
};

export default MinhaPagina;
