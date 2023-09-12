import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

import { format } from 'date-fns';
import TextComponent from '../mantine/TextComponent';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const EventCard = ({}) => {
  return (
    <div>
      <Card className=" flex justify-center flex-col !mx-auto bg-[#D9D9D9] rounded-md">
        <CardHeader className="flex flex-col justify-center">
          <CardTitle className="text-center">Calendar</CardTitle>
          <CardDescription className="text-center font-bold">
            Upcoming Event
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center">
          <TextComponent
            ta={'center'}
            text="Alaigbo Youth Summit"
            fw={'bold'}
          />
          <p className="text-center">
            Status: <span className="font-semibold">Registered</span>{' '}
          </p>
          <p className="text-center">
            Accommodation: <span className="font-semibold">Reserved</span>{' '}
          </p>
          <p className="text-center">
            Logistics: <span className="font-semibold">Booked</span>{' '}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/event" className={'w-full flex justify-center'}>
            <Button className="!rounded-md w-[200px] bg-[#DE5000] ">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventCard;
