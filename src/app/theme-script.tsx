
export default function ThemeScript() {
    
    const script = `
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  `;

    return <script dangerouslySetInnerHTML={{ __html: script }} />;
}