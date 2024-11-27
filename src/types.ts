export interface ServiceCardProps {
  icon: string;
  title: string;
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