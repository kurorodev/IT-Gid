import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Logo } from './Logo';
import { NavigationItem } from './NavigationItem'; // Добавлено
import { ComparisonCard } from './ComparisonCard';
import styles from './Comparisons.module.css';
import stylesNav from './styles.module.css'
import { UpdatedLogoWithText } from './UpdatedLogoWithText';
import ProfileDropdown from './ProfileDropdown';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Компании', path: '/company-profile' },
  { label: 'Сравнения', path: '/comparisons' },
  { label: 'Разместить заказ', path: '/place-order' }
];

interface DraggableItemProps {
  item: string;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item, index, moveItem }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'item',
    item: { index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'item',
    hover: (draggedItem: { index: number }, monitor: any) => {
      if (draggedItem.index === index) {
        return;
      }
      const dragIndex = draggedItem.index;
      const hoverIndex = index;

      if (dragIndex < hoverIndex) {
        moveItem(dragIndex, hoverIndex - 1);
      } else {
        moveItem(dragIndex, hoverIndex);
      }

      draggedItem.index = hoverIndex;
    },
  }));

  return (
    <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {item}
    </div>
  );
};

const items = [
  { label: 'Цена' },
  { label: 'Время разработки' },
  { label: 'Рейтинг' },
  { label: 'Отзывы' },
  { label: 'Количество выполненных заказов' },
];

const Comparisons: React.FC = () => {
  const [list, setList] = React.useState(items.map((item) => item.label));

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = list[dragIndex];
    const newList = list.filter((_, index) => index !== dragIndex);
    newList.splice(hoverIndex, 0, dragItem);
    setList(newList);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <main className={styles.mainContainer}>
        <header className={stylesNav.header}>
          <div className={stylesNav.logo}>
            <UpdatedLogoWithText />
          </div>
          <nav className={stylesNav.navigation}>
            {navItems.map((item, index) => (
              <NavigationItem key={index} label={item.label} path={item.path} />
            ))}
          </nav>
          <ProfileDropdown />
        </header>
        <section className={styles.comparisonSection}>
          {list.map((item, index) => (
            <DraggableItem key={index} item={item} index={index} moveItem={moveItem} />
          ))}
        </section>
      </main>
    </DndProvider>
  );
}
