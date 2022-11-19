import {
  QueryKey,
  useQuery as useQueryNative,
  UseQueryOptions,
} from '@tanstack/react-query';
// ---------------------------------------------------------------------
interface Props {
  key: QueryKey;
  service(): Promise<any>;
  showMessage?: boolean;
  options?: UseQueryOptions | any;
  onError?: (err: any) => void;
  onSuccess?: (data: any) => void;
}
function useQuery<T>(props: Props) {
  const query = useQueryNative<T>(props.key, props.service, props.options);
  return query;
}

export default useQuery;
