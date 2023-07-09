import { Cards } from '../components/Cards';
import { devProjects } from '../data/data';

export const LiveProjects = () => {
  return (
    <div>
      <Cards data={devProjects} title='Dev Projects'/>
    </div>
  );
};


