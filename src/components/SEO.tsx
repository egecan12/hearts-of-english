import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Heart of English | Eskişehir İngilizce Dil Kursu',
  description = 'Heart of English - Eskişehir\'in merkezinde 20 yıllık tecrübe ile İngilizce ve Yabancı Dil Eğitimi',
  keywords = 'İngilizce kursu, dil kursu, TOEFL hazırlık, IELTS hazırlık, YDS hazırlık, Eskişehir, yabancı dil, eğitim',
  ogType = 'website',
  ogImage = '/heart_of_english_logo.svg',
  canonicalUrl,
}) => {
  const siteUrl = 'https://www.heartofenglish.com'; // This will be your actual domain once purchased
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={fullUrl} />}
    </Helmet>
  );
};

export default SEO; 