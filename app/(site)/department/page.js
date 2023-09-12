import SemiHeader from '@/UI/SemiHeader';
import DepartmentCard from '@/components/mantine/DepartmentCard';
const departments = [
  { department: 'Education', id: '1' },
  { department: 'Agriculture', id: '2' },
  { department: 'ICT', id: '3' },
  { department: 'Manufacture', di: '4' },
  { department: 'Research', id: '5' },
  { department: 'Creative Economy', id: '6' },
  { department: 'Entertainment', id: '7' },
  { department: 'Sports Development', id: '8' },
  { department: 'Transportation', id: '9' },
  { department: 'Housing', id: '10' },
  { department: 'Urban Plan', id: '11' },
  { department: 'Media', id: '12' },
  { department: 'Healthcare', id: '13' },
  { department: 'Mining', id: '14' },
  { department: 'Tourism', id: '15' },
];
const Department = async () => {
  return (
    <div className="bg-[#1b1b1b] min-h-screen md:py-[100px] py-[80px]">
      <SemiHeader>Departments</SemiHeader>
      <div className="w-[98%] sm:w-[95%] md:w-[75%] lg:w-[60%] mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {departments.map((department) => (
          <DepartmentCard key={department} item={department} />
        ))}
      </div>
    </div>
  );
};

export default Department;
