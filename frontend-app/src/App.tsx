import { FC } from 'react';
import { useQuery } from 'react-query';

type User = {
  name: string;
  age: number;
};

const getUser = async () => (await fetch('/user/1')).json();

const App: FC = () => {
  const { data: user } = useQuery<User>(['user', 1], () => getUser());

  return (
    <div className="pt-4 pl-4 text-red-600 text-4xl font-extrabold">
      {user?.name} は {user?.age} 歳です。
    </div>
  );
};

export default App;
