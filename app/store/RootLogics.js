import { authentication, fail, task } from 'app/store/logic';

export default [...authentication, ...fail, ...task];
