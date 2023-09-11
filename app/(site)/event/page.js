import Button from '@/UI/Button';
import EventNotification from '@/components/Events/EventNotification';
import EventTimer from '@/components/Events/EventTimer';
import Speakers from '@/components/Events/Speakers';
import TextComponent from '@/components/mantine/TextComponent';
import TitleComponent from '@/components/mantine/TitleComponent';

const Event = async () => {
  return (
    <div className=" overflow-x-hidden">
      <EventNotification />
      <EventTimer />
      <Speakers />
      <div className="h-screen bg-[#131313] relative flex justify-center items-center">
        <TitleComponent
          order={1}
          ta={'center'}
          color="#DE5000"
          className="absolute top-8"
        >
          UPCOMING EVENT
        </TitleComponent>
        <div className="grid grid-cols-1 mt-10 md:mt-0 gap-8 md:w-[70%] w-[90%] sm:grid-cols-2">
          <div className="bg-[#DE5000] p-4 rounded-md flex justify-center flex-col items-center">
            <div className="bg-[#EE0000] p-4 w-[80%] rounded-sm">
              <TitleComponent
                order={3}
                ta={'center'}
                fw={'bolder'}
                color="white"
              >
                ALAIGBO
              </TitleComponent>
            </div>
            <TitleComponent ta={'center'} order={3} w={100}>
              YOUTH SUBMIT
            </TitleComponent>
            <TextComponent
              text="Deciding the Economic and Political Future of Alaigbo"
              ta={'center'}
              fw={'bold'}
              mb={15}
              color="white"
              fs={20}
            />
            <TextComponent fz={13} mb={10} text={'  December 2023'} />

            <Button href="/register" title={'Register'} />
          </div>
          <div className="bg-[#DE5000] p-4 rounded-md flex justify-center flex-col items-center">
            <TitleComponent order={2} ta={'center'}>
              COMING SOON
            </TitleComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
