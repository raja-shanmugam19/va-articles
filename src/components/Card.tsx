import React from 'react';
import { CardStyle } from './common/Card';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  className,
}) => {
  return <CardStyle data-testid="card-component" className={className}>{children}</CardStyle>;
};
export default Card;
