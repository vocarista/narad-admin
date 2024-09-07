import { ReactNode } from 'react';
import Navigation from '@/components/navigation/Navigation';

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;