import { HOME } from '../services/categories';
import Browse from '../components/browse/Browse';

// Token ping already lives in Browse, so nothing extra here.
const Home = () => <Browse rows={HOME} heroType={"all"} />

export default Home;
