import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './global.css';

export const metadata = {
  title: 'TA 1151800086',
  description: 'Marketplace Organizer Website with AI Chatbot for Negotiation System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
