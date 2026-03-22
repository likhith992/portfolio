export default function Home() {
  return (
    <main style={{
      backgroundColor: '#f5f5f0',
      minHeight: '100vh',
      padding: '100px 20px',
      fontFamily: 'Inter, system-ui, sans-serif',
      color: '#111'
    }}>

      <div style={{
        maxWidth: '640px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>

        {/* Name */}
        <h1 style={{
          fontSize: '32px',
          fontWeight: '500',
          marginBottom: '6px'
        }}>
          Likhith M Shetty
        </h1>

        <p style={{
          color: '#666',
          marginBottom: '30px',
          fontSize: '14px'
        }}>
          Developer focused on backend systems and AI-based solutions.
        </p>

        {/* Links (like reference site) */}
          <div style={{ marginBottom: '40px', fontSize: '14px' }}>
          <a href="https://github.com/likhith992" target="_blank" style={{ marginRight: '12px' }}>GitHub</a>

         <a href="https://www.linkedin.com/in/likhith-shetty-640b67341https://www.linkedin.com/in/likhith-shetty-640b67341" target="_blank" style={{ marginRight: '12px' }}>LinkedIn</a>

         
       </div>
q
        {/* About */}
        <section style={{ marginBottom: '40px' }}>
          <p style={{ color: '#444', fontSize: '14px' }}>
            I am currently learning about machine learning, and system design.
            I enjoy building simple and efficient applications that solve real-world problems.
          </p>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '14px', marginBottom: '10px' }}>Experience</h2>

          <div>
            <p style={{ fontSize: '14px' }}>
              Self Projects — Developer
            </p>
            <p style={{ color: '#666', fontSize: '13px' }}>
              2025 - Present
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}