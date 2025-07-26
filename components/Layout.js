import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <Header />
      <main className="flex-grow container mx-auto px-4 bg-white shadow-md rounded-md">
        {children}
      </main>
    </div>
  );
}