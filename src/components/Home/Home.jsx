import { useLanguage } from '../../context/useLanguage';

export default function Home() {
  const { t } = useLanguage();
  return (
    <main style={{ paddingInlineStart: '32px' }}>
      <h1>{t.hello}</h1>
    </main>
  );
}
