import { Cards } from '../components/Cards';
import { uiUxProjects } from '../data/data';

export const UiUx = () => {
  return (
    <div>
      <Cards data={uiUxProjects} title='Design Projects'/>
    </div>
  );
};

