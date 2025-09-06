import React, { useState, useEffect } from 'react';
import { Car } from './types';
import { SITE_URL, WHATSAPP_NUMBER, INSTAGRAM_URL, TIKTOK_URL, CARS_DATA } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPage';
import CreditSimulationPage from './pages/CreditSimulationPage';
import TestDrivePage from './pages/TestDrivePage';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#/';
      setRoute(newHash);
      
      const [path, fragment] = newHash.split('/#');

      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    // Trigger on initial load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);


  useEffect(() => {
    // Helper to update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOgMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update canonical link
    const updateCanonical = (href: string) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };
    
    // Helper to update JSON-LD schema
    const updateSchema = (schema: object) => {
        let element = document.getElementById('schema-json-ld');
        if(element) {
            element.innerHTML = JSON.stringify(schema, null, 2);
        }
    };

    const logoUrl = "https://i.imghippo.com/files/ELuJ8250EfE.png";

    const createBreadcrumbSchema = (pageTitle: string, pageUrl: string) => {
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": pageTitle,
          "url": pageUrl,
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": SITE_URL + '/'
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": pageTitle
              }
            ]
          }
        };
    };

    const path = route.split('/#')[0];

    if (path.startsWith('#/mobil/')) {
        const carId = path.split('/')[2];
        const selectedCar = CARS_DATA.find(c => c.id === carId);
        if (selectedCar) {
          const title = `Harga & Promo Suzuki ${selectedCar.name} 2024 di Bandung | NJS`;
          const description = `Dapatkan harga, promo, dan spesifikasi lengkap Suzuki ${selectedCar.name}. ${selectedCar.description} Hubungi dealer resmi NJS Bandung untuk test drive.`;
          const url = `${SITE_URL}/#!/mobil/${selectedCar.id}`; // Adjusted for hash routing
          const imageUrl = selectedCar.image;
          const lowestPrice = Math.min(...selectedCar.variants.map(v => v.price));
          const highestPrice = Math.max(...selectedCar.variants.map(v => v.price));
          const engineSpec = selectedCar.specifications.find(s => s.key === 'Mesin');

          document.title = title;
          updateMeta('description', description);
          updateCanonical(url);
          updateOgMeta('og:title', title);
          updateOgMeta('og:description', description);
          updateOgMeta('og:url', url);
          updateOgMeta('og:image', imageUrl);
          updateOgMeta('og:type', 'product');

          updateSchema({
            "@context": "https://schema.org",
            "@type": "Vehicle",
            "name": `Suzuki ${selectedCar.name}`,
            "brand": { "@type": "Brand", "name": "Suzuki" },
            "model": selectedCar.name,
            "description": selectedCar.description,
            "image": imageUrl,
            ...(engineSpec && {
              "vehicleEngine": {
                "@type": "EngineSpecification",
                "name": engineSpec.value
              }
            }),
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": lowestPrice,
              "highPrice": highestPrice,
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "AutomotiveBusiness",
                "name": "Suzuki Bandung - PT. Nusantara Jaya Sentosa",
                "url": SITE_URL
              }
            }
          });
        }
    } else if (path === '#/kredit') {
        const creditTitle = "Simulasi Kredit Mobil Suzuki Bandung | NJS";
        const creditDesc = "Ajukan simulasi kredit mobil Suzuki Anda di NJS Bandung. Dapatkan perhitungan DP dan angsuran terbaik dengan proses mudah.";
        const creditUrl = `${SITE_URL}/#!/kredit`;

        document.title = creditTitle;
        updateMeta('description', creditDesc);
        updateCanonical(creditUrl);
        updateOgMeta('og:title', creditTitle);
        updateOgMeta('og:description', creditDesc);
        updateOgMeta('og:url', creditUrl);
        updateOgMeta('og:image', logoUrl);
        updateOgMeta('og:type', 'website');
        updateSchema(createBreadcrumbSchema(creditTitle, creditUrl));
    } else if (path === '#/test-drive') {
        const testDriveTitle = "Jadwalkan Test Drive Suzuki di Bandung | NJS";
        const testDriveDesc = "Rasakan langsung pengalaman berkendara. Jadwalkan test drive mobil Suzuki Fronx, Ertiga, XL7, atau model lainnya di dealer NJS Bandung.";
        const testDriveUrl = `${SITE_URL}/#!/test-drive`;
        
        document.title = testDriveTitle;
        updateMeta('description', testDriveDesc);
        updateCanonical(testDriveUrl);
        updateOgMeta('og:title', testDriveTitle);
        updateOgMeta('og:description', testDriveDesc);
        updateOgMeta('og:url', testDriveUrl);
        updateOgMeta('og:image', logoUrl);
        updateOgMeta('og:type', 'website');
        updateSchema(createBreadcrumbSchema(testDriveTitle, testDriveUrl));
    } else { // Home page
        const homeTitle = "Dealer Resmi Suzuki Bandung | Promo & Harga Terbaik | NJS";
        const homeDesc = "Dealer resmi Suzuki Bandung, PT Nusantara Jaya Sentosa (NJS). Dapatkan harga dan promo terbaik mobil Suzuki Fronx, Ertiga, XL7, dan lainnya. Hubungi kami untuk test drive!";
        const homeUrl = SITE_URL + '/';

        document.title = homeTitle;
        updateMeta('description', homeDesc);
        updateCanonical(homeUrl);
        updateOgMeta('og:title', homeTitle);
        updateOgMeta('og:description', homeDesc);
        updateOgMeta('og:url', homeUrl);
        updateOgMeta('og:image', logoUrl);
        updateOgMeta('og:type', 'website');

        updateSchema({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            "name": "Suzuki Bandung - PT. Nusantara Jaya Sentosa",
            "description": "Dealer resmi mobil Suzuki di Bandung. Menyediakan penjualan mobil baru seperti Fronx, Ertiga, dan XL7, layanan servis, suku cadang, dan test drive.",
            "telephone": `+${WHATSAPP_NUMBER}`,
            "url": SITE_URL,
            "logo": logoUrl,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bandung",
              "addressRegion": "Jawa Barat",
              "addressCountry": "ID"
            },
            "brand": {
              "@type": "Brand",
              "name": "Suzuki"
            },
            "sameAs": [
              INSTAGRAM_URL,
              TIKTOK_URL
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            ],
            "keywords": "suzuki bandung, dealer suzuki bandung, njs bandung, suzuki fronx"
        });
    }
  }, [route]);
  
  const renderContent = () => {
    const path = route.split('/#')[0];

    if (path.startsWith('#/mobil/')) {
        const carId = path.split('/')[2];
        const car = CARS_DATA.find(c => c.id === carId);
        return car ? <CarDetailPage car={car} /> : <HomePage />;
    }
    
    switch (path) {
      case '#/kredit':
        return <CreditSimulationPage />;
      case '#/test-drive':
        return <TestDrivePage />;
      case '#/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-in-out both; }
        .animate-pulse-slow { animation: pulse 2.5s infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
      <Header />
      <main className="flex-grow animate-fade-in" key={route}>
        {renderContent()}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
