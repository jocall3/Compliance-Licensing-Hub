import React from 'react';
import { DataProvider } from './context/DataContext';
import LicensingView from './components/LicensingView';

function App() {
  return (
    <DataProvider>
      <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
        <header className="bg-gray-800 border-b border-gray-700 p-4 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto flex items-center space-x-3">
             <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center font-bold text-white text-lg">C</div>
             <h1 className="text-xl font-bold text-white tracking-wide">Compliance Hub</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          <LicensingView />
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
