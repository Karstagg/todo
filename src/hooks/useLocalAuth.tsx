import * as LocalAuthentication from 'expo-local-authentication';
import {toast} from 'react-hot-toast/src/core/toast';
import {useTypedDispatch} from '@hooks/reduxTypedHooks';
import {signOut, singIn} from '@state/slices/auth';

export default () => {
  const dispatch = useTypedDispatch();
  const authenticate = async (): Promise<void> => {
    const auth = await LocalAuthentication.authenticateAsync();
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
