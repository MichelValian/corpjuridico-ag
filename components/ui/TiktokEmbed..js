// TikTokEmbed.js
import { useEffect, useState } from 'react';

const TikTokEmbed = ({ userHandle }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este efecto solo se ejecuta en el cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // No renderiza nada en el servidor
  }

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@${userHandle}`}
      style={{ maxWidth: '325px', width: '100%' }}
    >
      <section>
        <a href={`https://www.tiktok.com/@${userHandle}`} target="_blank" rel="noopener noreferrer">
          Ver perfil
        </a>
      </section>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </blockquote>
  );
};

export default TikTokEmbed;
