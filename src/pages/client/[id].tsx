import { useRouter } from 'next/router';

export default function Client() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <p>
      O id é : <strong>{id}</strong>
    </p>
  );
}
