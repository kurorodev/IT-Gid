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
  width?: string;
}

export interface NavLinkProps {
  text: string;
}

export interface UserTypeButtonProps {
  text: string;
  bgColor: string;
}