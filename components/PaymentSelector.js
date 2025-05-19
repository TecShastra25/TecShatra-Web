import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getLocalizedPrice } from '../lib/currencyUtils';

const paymentMethods = {
  stripe: {
    name: 'Stripe',
    logoPath: '/images/payments/stripe-logo.png',
    currencies: ['USD', 'EUR', 'GBP'],
    description: 'International payments',
    className: 'bg-purple-500/20 border-purple-500'
  },
  razorpay: {
    name: 'Razorpay',
    logoPath: '/images/payments/razorpay-logo.png',
    currencies: ['INR'],
    description: 'Indian payments',
    className: 'bg-blue-500/20 border-blue-500'
  }
};

export default function PaymentSelector({ course, onPaymentSelect, loading }) {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [userCurrency, setUserCurrency] = useState('USD');
  const [localizedPrice, setLocalizedPrice] = useState(null);

  useEffect(() => {
    // Detect user's locale and set appropriate currency
    const userLocale = navigator.language;
    const currencyMap = {
      'en-IN': 'INR',
      'en-GB': 'GBP',
      'en-EU': 'EUR'
    };
    setUserCurrency(currencyMap[userLocale] || 'USD');
  }, []);

  useEffect(() => {
    if (course && userCurrency) {
      const price = getLocalizedPrice(course.price, 'USD', userCurrency);
      setLocalizedPrice(price);
    }
  }, [course, userCurrency]);

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(paymentMethods).map(([key, method]) => (
          <motion.div
            key={key}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
          >
            <Card
              className={`p-4 cursor-pointer transition-colors ${
                selectedMethod === key ? method.className : 'hover:bg-white/5'
              }`}
              onClick={() => setSelectedMethod(key)}
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-8">
                  <Image
                    src={method.logoPath}
                    alt={method.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Pay with {method.name}</h3>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </div>
              </div>
              <AnimatePresence>
                {selectedMethod === key && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-700"
                  >
                    <p className="text-sm text-gray-300">
                      Supported currencies: {method.currencies.join(', ')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMethod && localizedPrice && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="space-y-4"
          >
            <div className="text-center">
              <p className="text-lg text-gray-300">Total amount:</p>
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {localizedPrice.formatted}
              </p>
            </div>

            <Button
              onClick={() => onPaymentSelect(selectedMethod)}
              disabled={!selectedMethod || loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </div>
              ) : `Proceed to Pay ${localizedPrice.formatted}`}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}