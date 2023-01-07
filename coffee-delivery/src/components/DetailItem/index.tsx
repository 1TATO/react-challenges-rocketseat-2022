import { ReactNode } from 'react';
import { DetailItemContainer, IconContainer } from './styles';

interface DetailItemProps {
  icon: ReactNode;
  backgroundColor: 'yellow' | 'yellowDark' | 'purple' | 'baseText';
  title: string | ReactNode;
  subtitle?: string | ReactNode;
}

export function DetailItem({
  icon,
  backgroundColor,
  title,
  subtitle,
}: DetailItemProps) {
  return (
    <DetailItemContainer>
      <IconContainer backgroundColor={backgroundColor}>{icon}</IconContainer>

      {subtitle ? (
        <div>
          <p>{title}</p>
          <span>{subtitle}</span>
        </div>
      ) : (
        <div>
          <p>{title}</p>
        </div>
      )}
    </DetailItemContainer>
  );
}
