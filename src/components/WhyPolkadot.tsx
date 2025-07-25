
import React from 'react';
import { LayoutGrid, Link, Shield, GitBranch, TrendingUp } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyPolkadot: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('why-polkadot.interoperability'),
      description: t('why-polkadot.interoperability-desc'),
      icon: <Link size={32} />
    },
    {
      title: t('why-polkadot.scalability'),
      description: t('why-polkadot.scalability-desc'),
      icon: <TrendingUp size={32} />
    },
    {
      title: t('why-polkadot.security'),
      description: t('why-polkadot.security-desc'),
      icon: <Shield size={32} />
    },
    {
      title: t('why-polkadot.governance'),
      description: t('why-polkadot.governance-desc'),
      icon: <GitBranch size={32} />
    }
  ];
  
  return (
    <section id="por-que" className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-polkadot-cyan/5 rounded-full filter blur-3xl"></div>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-gradient">{t('why-polkadot.title')}</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('why-polkadot.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={index % 2 === 0 ? "md:mt-8" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPolkadot;
