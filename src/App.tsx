import React, { useState } from 'react';
import { Phone, MapPin, ChefHat, Ruler, Shield, Truck, DollarSign, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showFileModal, setShowFileModal] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_ny3e2hk',
        'template_8bx1ird',
        {
          to_email: 'w.wmm@slmail.me',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'xYbP09ABMMgE6iy40'
      );

      setSubmitStatus('success');
      setShowFileModal(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hidden SEO text */}
      <div className="hidden" aria-hidden="true">
        Кухни по поръчка от ПДЧ, ЛПДЧ, МДФ и масив в София. Поръчкови кухни София. Мебели по поръчка София. Поръчкови мебели София.
      </div>

      {/* Contact Info - Fixed at top */}
      <div className="absolute top-0 right-0 z-10 flex gap-6 p-4 text-white text-lg items-center">
        <a 
          href="#contact" 
          className="flex items-center hover:text-amber-300 transition-colors mr-8"
        >
          <span>Контакт</span>
        </a>
      </div>

      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
            alt="Модерна кухня" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Мебели по поръчка за Вашата кухня</h1>
            <p className="text-xl mb-8">Създаваме персонализирани решения от висококачествени материали, съобразени с Вашите нужди.<br />
              Кухни по поръчка от ПДЧ, МДФ и масив в София
            </p>
            <a 
              href="#contact"
              className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 transition"
            >
              Поискайте оферта или посещение
            </a>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Защо да изберете нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <ChefHat className="w-12 h-12 mx-auto mb-4 text-amber-500" />
              <h3 className="font-semibold mb-2">Безплатна консултация с дизайнер</h3>
              <p className="text-gray-600">Професионален подход към всеки проект</p>
            </div>
            <div className="text-center">
              <Ruler className="w-12 h-12 mx-auto mb-4 text-amber-500" />
              <h3 className="font-semibold mb-2">Изработка по индивидуални размери</h3>
              <p className="text-gray-600">Прецизност във всеки детайл</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-amber-500" />
              <h3 className="font-semibold mb-2">Гаранция</h3>
              <p className="text-gray-600">2 години гаранция на всички мебели</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-amber-500" />
              <h3 className="font-semibold mb-2">Доставка и монтаж в удобно за вас време</h3>
              <p className="text-gray-600">Монтаж и свързване на ел. уреди</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-amber-500" />
              <h3 className="font-semibold mb-2">Конкурентни цени</h3>
              <p className="text-gray-600">Оптимално съотношение цена-качество</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Моля, използвайте формата ни за контакт или се обадете</h2>
              <p className="text-gray-600 mb-8">
                Ще се свържем с вас възможно най-скоро.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-500 mr-3" />
                  <div className="space-y-2">
                    <a href="tel:+359894459580" className="block hover:text-amber-500 transition-colors">+359 894 459 580</a>
                    <a href="tel:+359877510094" className="block hover:text-amber-500 transition-colors">+359 877 510 094</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                  <span>гр. София</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Име <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имейл
                    </label>
                    <p className="bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold p-2 rounded-md mb-2">
                      /препоръчително, ако качвате файл/
                    </p>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Съобщение <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    ></textarea>
                  </div>
                  <p className="bg-blue-50 border border-blue-200 text-blue-800 text-sm font-semibold p-3 rounded-md text-center">
                    СЛЕД ИЗПРАЩАНЕТО, МОЖЕ ДА КАЧИТЕ ФАЙЛ.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition font-semibold ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Изпращане...' : 'Изпрати запитване'}
                  </button>
                  {submitStatus === 'success' && (
                    <div className="text-center mt-2">
                      <p className="text-green-600">
                        Съобщението беше изпратено успешно!
                      </p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center mt-2">
                      Възникна грешка при изпращането. Моля, опитайте отново.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* File Upload Modal */}
      {showFileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowFileModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Прикачване на файлове</h3>
              <p className="text-gray-600 mb-6">
                Можете да прикачите файлове към вашето запитване
              </p>
              <a
                href="https://www.dropbox.com/request/O3CTluNQaWV8clcALv76"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors"
                onClick={() => setShowFileModal(false)}
              >
                ПРИКАЧИ ФАЙЛ
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Кухни по поръчка. Всички права запазени.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;