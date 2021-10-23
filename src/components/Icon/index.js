import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faChevronUp, faCoffee, faUserGraduate, faTachometerAlt, faUser,faTrashAlt, faEdit, faPlusCircle, faChartBar, faSignOutAlt, faClock, faFlag} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee, faChevronUp, faUserGraduate, faTachometerAlt, faUser,faTrashAlt, faEdit, faPlusCircle, faChartBar, faSignOutAlt, faClock, faFlag);

const Icon = (props) => <FontAwesomeIcon {...props} />;

export default Icon;