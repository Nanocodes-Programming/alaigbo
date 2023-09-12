import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import TextComponent from './mantine/TextComponent';

const IdentityCard = async ({
  memberId,
  imgUrl,
  lastName,
  firstName,
  middleName,
  state,
  lga,
  dob,
}) => {
  return (
    <div>
      <Card className="  bg-[#F4A273] rounded-md">
        <CardHeader>
          <CardTitle className="text-center">ALAIGBO YOUTH FORUM</CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center  space-x-3 space-y-3 w-full ">
            <div className="w-[200px] h-[200px] rounded-full  relative overflow-hidden">
              <Image
                alt="profile-image"
                src={imgUrl}
                fill
                priority
                className="object-cover"
                quality={100}
              />
            </div>
            <div className=" ">
              <div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <span className="text-xs">Surname</span>
                    <TextComponent fz={'md'} text={lastName} fw={'bold'} />
                  </div>
                  <div>
                    <div className="space-y-1">
                      <span className="text-xs">Other names</span>
                      <div className="">
                        <TextComponent
                          fz={'md'}
                          text={`${firstName} ${middleName}  `}
                          fw={'bold'}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1">
                  <div>
                    <span className="text-xs whitespace-nowrap">
                      State of origin
                    </span>
                    <TextComponent fz={'md'} text={state} fw={'bold'} />
                  </div>
                  <div>
                    <span className="text-xs">LGA</span>
                    <TextComponent fz={'md'} text={lga} fw={'bold'} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div>
                    <span className="text-xs whitespace-nowrap">
                      Member Type
                    </span>
                    <TextComponent fz={'sm'} text={'Executive'} fw={'bold'} />
                  </div>
                  <div className="">
                    <span className="text-xs inline-block">DOB</span>
                    <TextComponent fz={'sm'} text={dob} fw={'bold'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent className="w-full">
          <div className="text-center">
            <p className="text-black uppercase">{`UIN: AYF-${memberId}`}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdentityCard;
