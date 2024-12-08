export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMemberCardProps {
  imageSrc: string;
  rating: string;
  starImageSrc: string;
  ratingImageSrc: string;
  bottomImageSrc: string;
}

export interface RatingCardProps {
  rating: string;
  imageSrc: string;
  starImageSrc: string;
  ratingImageSrc: string;
  bottomImageSrc: string;
}

export interface HeroSectionProps {
  logoSrc: string;
  backgroundSrc: string;
  teamName: string;
  rating: string;
  starImageSrc: string;
  description: string;
}

export interface SearchBarProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

export interface NavigationItemProps {
  label: string; // Название элемента навигации
  path: string;  // Путь для перехода
}

export interface RatingProps {
  score: string;               // Оценка
  ratingImage: string;         // Изображение рейтинга
  starImage: string;           // Изображение звезды
  verifiedImage: string;       // Изображение проверки
  reviewImage: string;         // Изображение отзыва
}

export interface CompanyCardProps {
  rating: RatingProps;         // Рейтинг компании
  name?: string;               // Имя компании (если необходимо)
  description?: string;        // Описание компании (если необходимо)
}

export interface CompanyHeaderProps {
  name: string;                // Название компании
  rating: string;              // Рейтинг компании
  description: string;         // Описание компании
  backgroundImage: string;     // Фоновое изображение
  starIcon: string;            // Иконка звезды
}

export interface ComparisonCardProps {
  className?: string;
}

export interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  logoText?: string; // Added logoText property
}

export interface ComparisonContainerProps {
  className?: string;
  children: React.ReactNode;
}

export interface PhotoUploadProps {
  onUpload?: (file: File) => void;
}

export interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

export interface NavLinkProps {
  text: string;
}

export interface UserTypeButtonProps {
  text: string;
  bgColor: string;
  selected?: boolean;
  onClick?: () => void;
}

export interface EmployeeCardProps {
  imageUrl?: string;
}

export interface NavigationItemProps {
  label: string;
}

export interface TagProps {
  className?: string;
}

export interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick?: () => void;
}

export interface NavItem {
  text: string;
  href: string;
}

export interface ProfileData {
  name: string;
  portfolio: string[];
  description: string;
}

export interface OrderCardProps {
  imageUrl?: string;
  paymentAmount?: string;
  onPaymentClick: () => void;
}

export interface HeaderProps {
  logo: string;
  profileImage: string;
}

export interface OrdersHeaderProps {
  title: string;
  iconUrl: string;
}

export interface NavigationProps {
  activeTab: 'pending' | 'history';
  onTabChange: (tab: 'pending' | 'history') => void;
}

export interface ComparisonCardProps {
  backgroundColor: string;
  height: number;
}

export interface LogoContainerProps {
  children: React.ReactNode;
  shadowColor?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
}