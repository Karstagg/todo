import {authenticateAsync} from 'expo-local-authentication';
import {toast} from 'react-hot-toast/src/core/toast';
import {signOut, singIn} from '@state/slices/auth';
import {useTypedDispatch} from '@hooks/typedReduxHooks';

// handles sign in / sign out with expo local authentication
export default () => {
  const dispatch = useTypedDispatch();
  const authenticate = async (): Promise<void> => {
    const auth = await authenticateAsync();
    if (!auth.success) {
      return;
    }

    dispatch(singIn());
    toast.success('Authenticated');
    return;
  };

  const revokeAuth = () => {
    dispatch(signOut());
  };

  return {authenticate, revokeAuth};
};
