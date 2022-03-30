import {authenticateAsync} from 'expo-local-authentication';
import {toast} from 'react-hot-toast/src/core/toast';
import {selectAuth, signOut, singIn} from '@state/slices/auth';
import {useTypedDispatch, useTypedSelector} from '@hooks/typedReduxHooks';

// handles sign in / sign out with expo local authentication
export default () => {
  const {authenticated} = useTypedSelector((state) => selectAuth(state));
  const dispatch = useTypedDispatch();
  const authenticate = async (): Promise<void> => {
    const auth = await authenticateAsync();
    if (!auth.success) {
      return;
    }

    dispatch(singIn());
    toast.success('Signed in');
    return;
  };

  const revokeAuth = () => {
    dispatch(signOut());
    toast.success('Signed out');
  };

  return {authenticate, revokeAuth, authenticated};
};
