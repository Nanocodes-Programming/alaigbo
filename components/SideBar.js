import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Header from './Header';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Links from './Links';

const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu color="orange" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetClose asChild>
          <Links />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
