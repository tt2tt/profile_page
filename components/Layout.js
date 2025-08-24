import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 bg-white rounded-md" aria-label="Main content">
        {children}
      </main>
    </div>
  );
}