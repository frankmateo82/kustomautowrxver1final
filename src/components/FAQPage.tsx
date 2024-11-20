import React from 'react';
import { Plus, Minus, Paintbrush, Car, Shield } from 'lucide-react';

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = React.useState<number | null>(null);

  const categories = [
    {
      title: 'General Questions',
      icon: <Shield className="w-6 h-6" />,
      faqs: [
        {
          question: 'What is the difference between a paint job and a car wrap?',
          answer: 'A paint job involves applying permanent automotive paint to the vehicle\'s surface, while a car wrap is a vinyl film applied over the original paint. Wraps can be temporary and are removable without damaging the paint underneath.'
        },
        {
          question: 'How long does a high-quality paint job or wrap last?',
          answer: 'High-quality paint jobs typically last 10+ years if well-maintained. Car wraps generally last 5-7 years depending on the material, care, and exposure to the elements.'
        },
        {
          question: 'Can you match the existing paint color on my car?',
          answer: 'Yes, we use advanced color-matching technology to ensure the new paint blends seamlessly with the existing color. For wraps, we offer a wide selection of colors and finishes but may not perfectly match a custom paint shade.'
        }
      ]
    },
    {
      title: 'Paint Services',
      icon: <Paintbrush className="w-6 h-6" />,
      faqs: [
        {
          question: 'What types of paint do you use?',
          answer: 'We use high-end automotive paints like urethane or ceramic-based paints, known for durability, UV protection, and a glossy finish.'
        },
        {
          question: 'How much does a high-end paint job cost?',
          answer: 'A high-end paint job can range from $5,000 to $20,000 or more, depending on the type of paint, level of customization, and the amount of bodywork required.'
        },
        {
          question: 'How long does a paint job take?',
          answer: 'A full paint job typically takes 1-3 weeks, depending on the extent of the preparation, repairs, and drying time.'
        },
        {
          question: 'Will the paint job include fixing scratches and dents?',
          answer: 'Yes, we will address any surface imperfections before painting to ensure a smooth, flawless finish.'
        },
        {
          question: 'Do you offer ceramic coating with the paint job?',
          answer: 'Yes, we can apply a ceramic coating as an added layer of protection to enhance the gloss and durability of the paint.'
        }
      ]
    },
    {
      title: 'Wrap Services',
      icon: <Car className="w-6 h-6" />,
      faqs: [
        {
          question: 'What types of finishes are available for car wraps?',
          answer: 'We offer a variety of finishes including matte, satin, gloss, metallic, carbon fiber, and even chrome.'
        },
        {
          question: 'Can a wrap damage the original paint?',
          answer: 'No, a properly installed wrap should not damage the original paint. In fact, it can help protect it from UV rays, minor scratches, and road debris.'
        },
        {
          question: 'How do I care for a car wrap?',
          answer: 'You should hand wash your wrapped car using mild soap and avoid automatic car washes. Regular waxing or ceramic coating can also help protect the wrap.'
        },
        {
          question: 'Can you wrap a car with damaged or chipped paint surface?',
          answer: 'It is not recommended to wrap a vehicle with damaged paint, as imperfections will show through. We can perform minor repairs before wrapping if necessary.'
        },
        {
          question: 'How long does it take to wrap a car?',
          answer: 'The process typically takes 3-7 days, depending on the complexity of the wrap and the size of the vehicle.'
        }
      ]
    },
    {
      title: 'Warranty & Maintenance',
      icon: <Shield className="w-6 h-6" />,
      faqs: [
        {
          question: 'Do you offer a warranty on paint jobs or wraps?',
          answer: 'Yes, we offer a warranty on both paint jobs and wraps. Paint warranties typically cover defects in materials and workmanship for 5-10 years. Wrap warranties vary but usually last 2-5 years.'
        },
        {
          question: 'What maintenance is required after a paint job or wrap?',
          answer: 'For paint, regular washing, waxing, and avoiding harsh chemicals will help maintain the finish. For wraps, hand washing and avoiding abrasives are key.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services and processes
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  {React.cloneElement(category.icon, { className: 'w-6 h-6 text-white' })}
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const questionId = categoryIndex * 100 + faqIndex;
                  return (
                    <div
                      key={questionId}
                      className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
                    >
                      <button
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                        onClick={() => setOpenQuestion(openQuestion === questionId ? null : questionId)}
                      >
                        <span className="text-lg font-semibold text-white">{faq.question}</span>
                        {openQuestion === questionId ? (
                          <Minus className="w-5 h-5 text-blue-400 shrink-0 ml-4" />
                        ) : (
                          <Plus className="w-5 h-5 text-blue-400 shrink-0 ml-4" />
                        )}
                      </button>
                      {openQuestion === questionId && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}