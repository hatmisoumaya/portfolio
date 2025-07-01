import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center dark:bg-gradient-to-l dark:from-black dark:to-gray-800 text-sm text-gray-500 dark:text-gray-400 py-6">
      {t('footer.rights')}
    </footer>
  );
};
export default Footer;
