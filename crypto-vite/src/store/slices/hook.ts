import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { Dispatch, RootState } from '../store';

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
