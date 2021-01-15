import Link from 'next/link'

export default function Connexion() {
  return (
    <div>
      This is a static page goto{' '}
      <Link href="/">
        <a>Accueil</a>
      </Link>{' '}
      page.
    </div>
  )
}
