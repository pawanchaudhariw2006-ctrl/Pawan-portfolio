import './globals.css';

export const metadata = {
  title: 'Pawan Chaudhari | Portfolio',
  description: 'AI Engineer | ML Researcher | Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Added suppressHydrationWarning here */}
      <body className="antialiased bg-black text-white" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}