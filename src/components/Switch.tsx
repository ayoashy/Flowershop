import { Switch } from 'antd';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SwitchComponent: React.FC = () => {
  const [value, setValue] = useState<boolean>(true);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setValue(checked);
  };

  console.log(value);

  return (
    <div className='h-screen p-6'>
      {/* <Switch defaultChecked onChange={onChange} /> */}
      <Switch
        defaultChecked={true}
        className={`mx-auto scale-150 bg-purple-400! ${
          value ? '!bg-purple-400' : '!bg-[#000]'
        } 
        scale-250 flexa justify-center items-center
        text-yellow-400
        `}
        checkedChildren={<AiOutlineMinus className='mt-1.5' />}
        unCheckedChildren={<AiOutlinePlus className='mt-2.5 text-purple-400' />}
        onChange={onChange}
      />
    </div>
  );
};

export default SwitchComponent;
